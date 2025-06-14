import { CaretDownIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { Text } from '@radix-ui/themes';
import React, { useState } from 'react';
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
	const [spread, setSpread] = useState<boolean>(false);
	return (
		<>
			{left && <CurvedLine from={new Point(x * gridWidth - gridWidth, gridHeight / 2)} to={new Point(x * gridWidth, gridHeight / 2)} stroke="var(--accent-10)" strokeWidth={1} />}
			{right && (
				<CurvedLine from={new Point(x * gridWidth + gridWidth, gridHeight / 2)} to={new Point(x * gridWidth + 2 * gridWidth, gridHeight / 2)} stroke="var(--accent-10)" strokeWidth={1} />
			)}
			{childs.map((ele, index) => {
				return (
					<CurvedLine
						to={new Point(x * gridWidth + gridWidth / 2, spread ? gridHeight / 2 + (index + 1) * 2 * gridHeight : gridHeight / 2)}
						from={new Point(x * gridWidth + gridWidth / 2, gridHeight / 2)}
						stroke="var(--accent-10)"
						strokeWidth={1}
						key={index}
					/>
				);
			})}
			<div style={{ position: 'relative', display: 'flex', width: gridWidth, height: gridHeight, flexDirection: 'column', gap: 80 }}>
				{childs.map((ele, index) => (
					<div
						className="rounded-full flex justify-center items-center"
						style={{
							position: 'absolute',
							borderColor: 'var(--accent-10)',
							backgroundColor: 'var(--accent-1)',
							borderWidth: 1,
							left: 0,
							width: gridWidth,
							height: gridHeight,
							top: spread ? (index + 1) * 2 * gridHeight : 0,
							transition: 'top 0.4s ease, left 0.4s ease',
						}}
						key={index}
					>
						<Text as="div" align="center">
							{ele}
						</Text>
					</div>
				))}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: gridWidth,
						height: gridHeight,
						color: 'var(--accent-1)',
						backgroundColor: 'var(--accent-12)',
					}}
					className="rounded-full flex justify-center items-center pl-2 gap-1"
					onClick={() => setSpread(!spread)}
				>
					<Text align="center" weight="bold">
						{name}
					</Text>
					{spread ? <CaretDownIcon /> : <CaretRightIcon />}
				</div>
			</div>
		</>
	);
};

export default Feild;
