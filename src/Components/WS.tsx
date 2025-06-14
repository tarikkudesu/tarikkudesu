import React, { useRef, useState, useEffect, useContext, MouseEvent, TouchEvent } from 'react';
import Feild, { Point } from '../extra/Feild';
import { useQuery } from '@tanstack/react-query';
import { Button, Callout, Flex, Spinner } from '@radix-ui/themes';
import { InfoCircledIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { API, workspaceContext } from '../Functionaity/Interfaces';

export const gridWidth: number = 200;
export const gridHeight: number = 40;

export interface roadElement {
	name: string;
	sub: string[];
}

const Workspace: React.FC = () => {
	async function fetchData() {
		const response = await fetch(API.Roadmap);
		return response.json();
	}
	const { isLoading, error, data } = useQuery({
		queryKey: ['roadmap'],
		queryFn: fetchData,
	});

	function CondotionalComponent(): React.ReactNode {
		if (isLoading)
			return (
				<Flex align="center" justify="center">
					<Spinner size="3" />
				</Flex>
			);
		if (error)
			return (
				<Callout.Root color="red">
					<Callout.Icon>
						<InfoCircledIcon />
					</Callout.Icon>
					<Callout.Text>Something went wrong while loading data. If this keeps happening, feel free to reach out — I’ll fix it as soon as possible.</Callout.Text>
				</Callout.Root>
			);
		return (
			<>
				{data.map((ele: roadElement, index: number) => {
					return <Feild right={index === data.length - 1 ? false : true} left={index === 0 ? false : true} name={ele.name} x={index * 3} childs={ele.sub} key={index} />;
				})}
			</>
		);
	}
	const workspace = useContext(workspaceContext);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [origin, setOrigin] = useState<Point>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
	const [translate, setTranslate] = useState<Point>({ x: 0, y: window.innerHeight / 2 });
	const [zoom, setZoom] = useState<number>(1);

	const handleStart = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
		setIsDragging(true);

		// Get coordinates from either mouse or touch event
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

		setOrigin({ x: clientX, y: clientY });
	};

	const handleMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
		if (!isDragging) return;

		// Prevent scrolling on mobile
		e.preventDefault();

		// Get coordinates from either mouse or touch event
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

		const dx = clientX - origin.x;
		const dy = clientY - origin.y;

		setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
		setOrigin({ x: clientX, y: clientY });
	};

	const handleEnd = () => setIsDragging(false);

	return (
		<>
			<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
				<Button variant="outline" mr="1" onClick={() => workspace(false)}>
					Home
				</Button>
				<Button
					mr="1"
					ml="1"
					variant="outline"
					onClick={() => {
						if (zoom <= 5) setZoom(zoom + zoom * 0.1);
					}}
				>
					<PlusIcon />
				</Button>
				<Button
					variant="outline"
					ml="1"
					onClick={() => {
						if (zoom > 0.5) setZoom(zoom - zoom * 0.1);
					}}
				>
					<MinusIcon />
				</Button>
			</div>
			<div
				ref={containerRef}
				onMouseDown={handleStart}
				onMouseMove={handleMove}
				onMouseUp={handleEnd}
				onMouseLeave={handleEnd}
				onTouchStart={handleStart}
				onTouchMove={handleMove}
				onTouchEnd={handleEnd}
				onTouchCancel={handleEnd}
				className="h-screen w-screen unselectable"
				style={{
					overflow: 'hidden',
					cursor: isDragging ? 'grabbing' : 'grab',
					backgroundColor: 'var(--accent-2)',
				}}
			>
				<div
					style={{
						width: '20000px',
						position: 'relative',
						transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
						transformOrigin: '0 0',
					}}
				>
					<div style={{ display: 'flex', gap: gridWidth * 2 }}>{CondotionalComponent()}</div>
				</div>
			</div>
		</>
	);
};

export default Workspace;
