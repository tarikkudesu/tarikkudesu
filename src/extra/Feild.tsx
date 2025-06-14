import { Text } from '@radix-ui/themes';
import React from 'react';
import { gridHeight, gridWidth } from '../Components/WS';
import CurvedLine from './CurvedLine';

export class Point {
	constructor(public x: number, public y: number) {}
}

interface FeildProps {
	x: number;
	name: string;
	left?: boolean;
	right?: boolean;
	childs: string[];
}

const Feild: React.FC<FeildProps> = ({ name, x, childs, right, left }) => {
	return (
		<>
			{left && <CurvedLine from={new Point(x * gridWidth - gridWidth * 2, gridHeight / 2)} to={new Point(x * gridWidth, gridHeight / 2)} stroke="var(--accent-10)" strokeWidth={4} />}
			{right && (
				<CurvedLine from={new Point(x * gridWidth + gridWidth, gridHeight / 2)} to={new Point(x * gridWidth + 3 * gridWidth, gridHeight / 2)} stroke="var(--accent-10)" strokeWidth={4} />
			)}
			{childs.map((_ele, index) => {
				const id: number = index - Math.ceil(childs.length / 2);
				return (
					<CurvedLine
						from={new Point(x * gridWidth + gridWidth, gridHeight / 2)}
						to={new Point(x * gridWidth + gridWidth + gridWidth / 2, gridHeight / 2 + (id >= 0 ? id + 1 : id) * 2 * gridHeight)}
						stroke="var(--accent-6)"
						strokeWidth={1}
						key={index}
						dotted
					/>
				);
			})}
			<div style={{ position: 'relative', display: 'flex', width: gridWidth, height: gridHeight, flexDirection: 'column', gap: 80 }}>
				{childs.map((ele, index) => {
					const id: number = index - Math.ceil(childs.length / 2);
					return (
						<div
							style={{
								position: 'absolute',
								borderColor: 'var(--accent-10)',
								backgroundColor: 'var(--accent-4)',
								borderWidth: 1,
								left: gridWidth + gridWidth / 2,
								height: gridHeight,
								top: (id >= 0 ? id + 1 : id) * 2 * gridHeight,
								transition: 'top 0.4s ease, left 0.4s ease',
							}}
							className="rounded-md flex justify-center items-center px-8 text-nowrap z-10"
							key={index}
						>
							<Text as="div" align="center" weight="bold">
								{ele}
							</Text>
						</div>
					);
				})}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: gridWidth,
						height: gridHeight,
						color: 'var(--accent-1)',
						backgroundColor: 'var(--accent-10)',
					}}
					className="rounded-md flex justify-center items-center z-10"
				>
					<Text align="center" weight="bold">
						{name}
					</Text>
				</div>
			</div>
		</>
	);
};

export default Feild;
