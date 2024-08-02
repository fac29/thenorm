"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import TheNormLogo from "../public/thenorm-centre-edit.png";
import TheNormOutside from "../public/The-Norm_Wheel_Outside1.png";

import CustomSheet from "./CustomSheet";

interface PieChartProps {
	width?: number;
	height?: number;
	segmentNames: string[];
	completedWheel: boolean;
}

interface PieChartData {
	text: string;
	match: string;
	color: "red" | "orange" | "green" | "white";
}

const PieChart: React.FC<PieChartProps> = ({
	width = 600,
	height = 600,
	segmentNames,
	completedWheel,
}) => {
	const svgRef = useRef<SVGSVGElement | null>(null); // Reference to the SVG element for D3 manipulations
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
	const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

	const determineColour = (match: string) => {
		if (match === "well") {
			return "green";
		} else if (match === "somewhat") {
			return "orange";
		} else if (match === "not at all") {
			return "red";
		} else if (match === "") {
			return "white";
		}
	};

	// Memorise pieData to avoid recalculating it on every render
	const pieData: PieChartData[] = useMemo(
		() =>
			Array(18) // Ensure 18 segments for the pie chart
				.fill(null)
				.map((_, i) => {
					const text = segmentNames[i].split(":")[0]; // Extract text before the colon
					const match =
						segmentNames[i].indexOf(":") === -1
							? "" // If no colon, set match to an empty string
							: segmentNames[i].split(":")[1].trimStart(); // Extract and trim match status after the colon
					return {
						text: text,
						match: match,
						color: determineColour(match) as
							| "red"
							| "orange"
							| "green"
							| "white",
					};
				}),
		[segmentNames] // Dependency array: recalculate pieData only when segmentNames changes
	);

	useEffect(() => {
		if (svgRef.current) {
			drawChart();
		}
	}, [pieData, width, height]);

	useEffect(() => {
		updateHoveredSegment();
	}, [hoveredIndex]);

	const brightenColor = (color: string): string => {
		const rgbColor = d3.rgb(color);
		return d3
			.rgb(
				Math.min(255, rgbColor.r + 40),
				Math.min(255, rgbColor.g + 40),
				Math.min(255, rgbColor.b + 40)
			)
			.toString();
	};

	const drawChart = () => {
		const radius = Math.min(width, height) / 2;

		d3.select(svgRef.current).selectAll("*").remove();

		// Create and position the SVG group element
		const svg = d3
			.select(svgRef.current)
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", `translate(${width / 2},${height / 2})`);

		// Add TheNormOutside image
		const outsideImageSize = radius * 2.08;
		svg
			.append("image")
			.attr("xlink:href", TheNormOutside.src)
			.attr("x", -outsideImageSize / 2)
			.attr("y", -outsideImageSize / 2)
			.attr("width", outsideImageSize)
			.attr("height", outsideImageSize);

		// Add center logo
		const centerImageSize = radius * 0.6;
		svg
			.append("image")
			.attr("xlink:href", TheNormLogo.src)
			.attr("x", -centerImageSize / 2)
			.attr("y", -centerImageSize / 2)
			.attr("width", centerImageSize)
			.attr("height", centerImageSize);

		// Create a group element for the pie chart segments
		const pieGroup = svg.append("g");

		// Define arc generator for the pie chart
		const arc = d3
			.arc<d3.PieArcDatum<PieChartData>>()
			.innerRadius(radius * 0.3)
			.outerRadius(radius * 0.9);

		// Define pie layout generator
		const pie = d3
			.pie<PieChartData>()
			.value(() => 1)
			.sort(null);

		// Ensure we always have 18 segments
		const paddedData = [...pieData].slice(0, 18);

		// Generate pie chart segments
		const segments = pie(paddedData);

		// Append groups for each pie segment and set up event listeners
		const g = pieGroup
			.selectAll(".arc")
			.data(segments)
			.enter()
			.append("g")
			.attr("class", "arc")
			.on("mouseenter", (event, d) => setHoveredIndex(segments.indexOf(d)))
			.on("mouseleave", () => setHoveredIndex(null))
			.on("click", (event, d) => {
				setSelectedSegment(d.data.text);
				setIsSheetOpen(true);
			});

		g.append("path")
			.attr("d", arc)
			.style("fill", (d) => d.data.color)
			.style("stroke", "black")
			.style("stroke-width", "1px")
			.style("cursor", (d) =>
				d.data.color === "white" ? "default" : "pointer"
			)
			.style("transition", "fill 0.1s ease");

		// Add text labels if needed
		g.append("text")
			.attr("transform", (d) => {
				const [x, y] = arc.centroid(d); // Get the centroid position for the text
				const angle = (d.startAngle + d.endAngle) / 2; // Calculate the angle for rotation
				const rotate = `rotate(${(angle * 180) / Math.PI - 90})`; // Rotate text to align with segment
				const flip = angle > Math.PI ? `rotate(180)` : ``; // Flip text if needed
				return `translate(${x}, ${y}) ${rotate} ${flip}`; // Set the transform attribute
			})
			.attr("dy", ".35em")
			.style("font-size", "15px")
			.style("text-anchor", "middle")
			.style("pointer-events", "none")
			.text((d) => d.data.text);
	};

	const updateHoveredSegment = () => {
		d3.select(svgRef.current)
			.selectAll<SVGPathElement, d3.PieArcDatum<PieChartData>>(".arc path")
			.transition()
			.style("fill", (d, i) =>
				i === hoveredIndex ? brightenColor(d.data.color) : d.data.color
			);
	};

	return (
		<div>
			{completedWheel ? (
				<div>
					<svg ref={svgRef}></svg>
					<CustomSheet
						selectedSegment={selectedSegment}
						isSheetOpen={isSheetOpen}
						setIsSheetOpen={setIsSheetOpen}
					/>
				</div>
			) : (
				<div>
					<svg ref={svgRef}></svg>
				</div>
			)}
		</div>
	);
};

export default PieChart;
