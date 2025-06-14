import React, { useRef, useState, useEffect, MouseEvent, WheelEvent } from 'react';
import Feild, { Point } from '../extra/Feild';
import { useQuery } from '@tanstack/react-query';

export const gridWidth: number = 300;
export const gridHeight: number = 60;

export interface roadElement {
	name: string;
	sub: string[];
}

const Workspace: React.FC = () => {
	async function fetchData() {
		const response = await fetch('/json/roadmap.json');
		return response.json();
	}
	const { isLoading, error, data } = useQuery<roadElement[]>({
		queryKey: ['roadmap'],
		queryFn: fetchData,
	});

	const containerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [origin, setOrigin] = useState<Point>({ x: 0, y: 0 });
	const [translate, setTranslate] = useState<Point>({ x: 0, y: 0 });
	const [zoom, setZoom] = useState<number>(1);

	// Start dragging
	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setOrigin({ x: e.clientX, y: e.clientY });
	};

	// While dragging
	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;

		const dx = e.clientX - origin.x;
		const dy = e.clientY - origin.y;

		setTranslate((prev) => ({
			x: prev.x + dx,
			y: prev.y + dy,
		}));

		setOrigin({ x: e.clientX, y: e.clientY });
	};

	const handleMouseUp = () => setIsDragging(false);

	useEffect(() => {
		window.addEventListener('mouseup', handleMouseUp);
		return () => window.removeEventListener('mouseup', handleMouseUp);
	}, []);

	// Zoom from cursor
	const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
		// e.preventDefault();
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const cursorX = e.clientX - rect.left;
		const cursorY = e.clientY - rect.top;

		const deltaScale = e.deltaY > 0 ? 0.9 : 1.1;
		const newZoom = Math.min(Math.max(zoom * deltaScale, 0.2), 3);

		// Calculate the new translate so the cursor stays in the same place
		const scaleDiff = newZoom / zoom;

		const newTranslateX = cursorX - scaleDiff * (cursorX - translate.x);
		const newTranslateY = cursorY - scaleDiff * (cursorY - translate.y);

		setZoom(newZoom);
		setTranslate({
			x: newTranslateX,
			y: newTranslateY,
		});
	};

	const arr: string[] = ['1', '2', '3', '4'];
	return (
		<>
			<div
				ref={containerRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onWheel={handleWheel}
				className="h-screen w-screen"
				style={{
					overflow: 'hidden',
					cursor: isDragging ? 'grabbing' : 'grab',
				}}
			>
				<div
					style={{
						width: '20000px',
						height: '2000px',
						position: 'relative',
						transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
						transformOrigin: '0 0',
					}}
				>
					<div style={{ display: 'flex', gap: gridWidth }}>
						{!isLoading &&
							!error &&
							data &&
							data.map((ele: roadElement, index: number) => {
								return <Feild right={index === arr.length - 1 ? false : true} left={index === 0 ? false : true} name={ele.name} x={index * 2} childs={ele.sub} key={index} />;
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Workspace;
