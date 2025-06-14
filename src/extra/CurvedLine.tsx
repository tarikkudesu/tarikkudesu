import React, { useMemo } from 'react';

interface Point {
	x: number;
	y: number;
}

interface CurvedLineProps {
	from?: Point;
	to?: Point;
	stroke?: string;
	strokeWidth?: number;
	dotted?: boolean;
}

const isValidPoint = (point: Point | undefined): point is Point => {
	return point !== undefined && typeof point.x === 'number' && typeof point.y === 'number' && !isNaN(point.x) && !isNaN(point.y);
};

const getPath = (from: Point, to: Point) => {
	const dx = Math.abs(to.x - from.x);
	const curve = Math.min(100, dx);
	const c1 = { x: from.x + curve, y: from.y };
	const c2 = { x: to.x - curve, y: to.y };
	return `M ${from.x},${from.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${to.x},${to.y}`;
};

const CurvedLine: React.FC<CurvedLineProps> = ({ from, to, stroke = 'black', strokeWidth = 2, dotted = false }) => {
	const path = useMemo(() => {
		if (!isValidPoint(from) || !isValidPoint(to)) {
			return null;
		}
		return getPath(from, to);
	}, [from, to]);

	if (!path) {
		return null;
	}

	return (
		<svg style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
			<path d={path} stroke={stroke} strokeWidth={strokeWidth} fill="none" strokeDasharray={dotted ? '5,5' : ''} />
			{to && <circle cx={to.x} cy={to.y} r="6" fill={stroke} />}
		</svg>
	);
};

export default CurvedLine;
