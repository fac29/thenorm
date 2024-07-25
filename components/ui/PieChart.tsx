'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface PieChartData {
    text: string;
    color: 'red' | 'orange' | 'green';
}

interface PieChartProps {
    data: PieChartData[];
    //   onSegmentClick: (index: number) => void;
    width?: number;
    height?: number;
}

const PieChart: React.FC<PieChartProps> = ({
    data,
    // onSegmentClick,
    width = 500,
    height = 500,
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        if (svgRef.current) {
            drawChart();
        }
    }, [data, width, height, hoveredIndex]);

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

        d3.select(svgRef.current).selectAll('*').remove();

        const svg = d3
            .select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const pie = d3
            .pie<PieChartData>()
            .value(() => 1)
            .sort(null);

        const arc = d3
            .arc<d3.PieArcDatum<PieChartData>>()
            .innerRadius(0)
            .outerRadius(radius);

        // Ensure we always have 18 segments
        const paddedData = [
            ...data,
            ...Array(18 - data.length).fill({ text: '', color: 'green' }),
        ].slice(0, 18);

        const segments = pie(paddedData);

        const g = svg
            .selectAll('.arc')
            .data(segments)
            .enter()
            .append('g')
            .attr('class', 'arc')
            // .on('click', (event, d) => onSegmentClick(segments.indexOf(d)))
            .on('mouseenter', (event, d) =>
                setHoveredIndex(segments.indexOf(d))
            )
            .on('mouseleave', () => setHoveredIndex(null));

        g.append('path')
            .attr('d', arc)
            .style('fill', (d, i) =>
                i === hoveredIndex ? brightenColor(d.data.color) : d.data.color
            )
            .style('cursor', 'pointer')
            .style('transition', 'fill 0.3s ease');

        g.append('text')
            .attr('transform', (d) => {
                const [x, y] = arc.centroid(d);
                const angle = (d.startAngle + d.endAngle) / 2;
                const rotate = `rotate(${(angle * 180) / Math.PI - 90})`;
                const flip = angle > Math.PI ? `rotate(180)` : ``;
                return `translate(${x}, ${y}) ${rotate} ${flip}`;
            })
            .attr('dy', '.35em')
            .style('font-size', '10px')
            .style('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .text((d) => d.data.text);
    };

    return <svg ref={svgRef}></svg>;
};

export default PieChart;
