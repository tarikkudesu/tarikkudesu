import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Point {
	x: number;
	y: number;
}

interface CurvedLineProps {
	from: Point;
	to: Point;
	stroke?: string;
	strokeWidth?: number;
}

const getPath = (from: Point, to: Point) => {
	const dx = Math.abs(to.x - from.x);
	const curve = Math.min(100, dx);
	const c1 = { x: from.x + curve, y: from.y };
	const c2 = { x: to.x - curve, y: to.y };
	return `M ${from.x},${from.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${to.x},${to.y}`;
};

const CurvedLine: React.FC<CurvedLineProps> = ({ from, to, stroke = 'black', strokeWidth = 2 }) => {
	const path = useMemo(() => getPath(from, to), [from, to]);

	return (
		<svg style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
			<motion.path d={path} stroke={stroke} strokeWidth={strokeWidth} fill="none" transition={{ duration: 0.4, ease: 'easeOut' }} animate={{ d: path }} />
		</svg>
	);
};

export default CurvedLine;
