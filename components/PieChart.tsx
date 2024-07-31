"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import TheNormLogo from "../public/thenorm-centre-edit.png";
import TheNormOutside from "../public/The-Norm_Wheel_Outside1.png";

import CustomSheet from "./CustomSheet";

interface PieChartData {
	text: string;
	color: "red" | "orange" | "green";
}

interface PieChartProps {
	data: PieChartData[];
	width?: number;
	height?: number;
}

const PieChart: React.FC<PieChartProps> = ({
	data,
	width = 500,
	height = 500,
}) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
	const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

	useEffect(() => {
		if (svgRef.current) {
			drawChart();
		}
	}, [data, width, height]);

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

		// Create a group for the pie chart
		const pieGroup = svg.append("g");

		const arc = d3
			.arc<d3.PieArcDatum<PieChartData>>()
			.innerRadius(radius * 0.3)
			.outerRadius(radius * 0.9);

		const pie = d3
			.pie<PieChartData>()
			.value(() => 1)
			.sort(null);

		// Ensure we always have 18 segments
		const paddedData = [
			...data,
			// ...Array(18 - data.length).fill({ text: "", color: "green" }),
		].slice(0, 18);

		const segments = pie(paddedData);

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
			.style("stroke", "white")
			.style("stroke-width", "1px")
			.style("cursor", "pointer")
			.style("transition", "fill 0.1s ease");

		// Add text labels if needed
		g.append("text")
			.attr("transform", (d) => {
				const [x, y] = arc.centroid(d);
				const angle = (d.startAngle + d.endAngle) / 2;
				const rotate = `rotate(${(angle * 180) / Math.PI - 90})`;
				const flip = angle > Math.PI ? `rotate(180)` : ``;
				return `translate(${x}, ${y}) ${rotate} ${flip}`;
			})
			.attr("dy", ".35em")
			.style("font-size", "15px")
			.style("text-anchor", "middle")
			.style("pointer-events", "none")
			.text((d) => d.data.text);
	};

	const updateHoveredSegment = () => {
		const radius = Math.min(width, height) / 2;
		const arc = d3
			.arc<d3.PieArcDatum<PieChartData>>()
			.innerRadius(radius * 0.3)
			.outerRadius(radius * 0.9);

		d3.select(svgRef.current)
			.selectAll<SVGPathElement, d3.PieArcDatum<PieChartData>>(".arc path")
			.transition()
			.style("fill", (d, i) =>
				i === hoveredIndex ? brightenColor(d.data.color) : d.data.color
			);
	};

	return (
		<div>
			<svg ref={svgRef}>
				<CustomSheet
					selectedSegment={selectedSegment}
					isSheetOpen={isSheetOpen}
					setIsSheetOpen={setIsSheetOpen}
				/>
			</svg>
		</div>
	);
};

export default PieChart;
