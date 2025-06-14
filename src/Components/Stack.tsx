import React from 'react';

import { Flex, Card, Heading, Box, Text, Badge, Tooltip, Spinner, Callout } from '@radix-ui/themes';
import { CardStackIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Frame } from './Mini';
import { useQuery } from '@tanstack/react-query';
import { API } from '../Functionaity/Interfaces';

interface EntitiProps {
	children: React.ReactNode;
	name: string;
}
const Entity: React.FC<EntitiProps> = ({ children, name }) => {
	return (
		<div className="">
			<Tooltip content={name}>
				<Card className="duration-100" size="3">
					<Box height="36px" width="36px">
						{children}
					</Box>
				</Card>
			</Tooltip>
		</div>
	);
};

export interface StackElement {
	name: string;
	src: string;
}

const Stack: React.FC<unknown> = () => {
	async function fetchData() {
		const response = await fetch(API.Stack);
		return response.json();
	}
	const { isLoading, error, data } = useQuery<StackElement[]>({
		queryKey: ['stack'],
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
		if (data)
			return (
				<>
					{data.map((ele: StackElement, index: number) => (
						<Entity name={ele.name} key={index}>
							<img src={ele.src} />
						</Entity>
					))}
				</>
			);
	}
	return (
		<Frame className="py-48 relative">
			<Badge variant="soft" radius="full">
				<Flex gap="2" align="center" px="2">
					<CardStackIcon />
					My Top
				</Flex>
			</Badge>
			<Box height="12px" />
			<Heading size="8">Tech Stack & Skills</Heading>
			<Box height="24px" />
			<Text as="div" size="2" className="opacity-70">
				Technology is merely a tool—one that inevitably becomes obsolete. What truly matters is our ability to adapt and evolve alongside change.
			</Text>
			<Box height="46px" />
			<Flex gap="8" justify="between" className="flex-wrap">
				{CondotionalComponent()}
			</Flex>
		</Frame>
	);
};

export default Stack;
