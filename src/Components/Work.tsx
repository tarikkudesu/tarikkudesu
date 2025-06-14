import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Badge, Box, Flex, Heading, ScrollArea, Text, Callout, Spinner, Button, Grid, Dialog, Link, Card, Inset } from '@radix-ui/themes';
import { Pencil2Icon, InfoCircledIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { API, Template } from '../Functionaity/Interfaces';
import { marked } from 'marked';
import { Frame } from './Mini';

import './Md.css';

interface MarkdownProps {
	markdown: string;
}
export const Markdown: React.FC<MarkdownProps> = ({ markdown }) => {
	const html = marked(markdown);
	return <div id="md" dangerouslySetInnerHTML={{ __html: html }} />;
};

interface PeiceOfWorkProps {
	project: Template;
}
const PeiceOfWork: React.FC<PeiceOfWorkProps> = ({ project }) => {
	async function fetchData() {
		const response = await fetch('/md/' + project.md);
		return response.text();
	}
	const { isLoading, error, data } = useQuery({
		queryKey: [project.md],
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
				<ScrollArea type="always" scrollbars="vertical" className="pr-4 overflow-hidden" radius="medium" style={{ height: '500px' }}>
					<Markdown markdown={data} />
				</ScrollArea>
			);
	}
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Card size="3" style={{ width: 360, height: 300 }} className="relative cursor-pointer">
					<Inset clip="padding-box" side="top" pb="current">
						<img
							src={`./img/${project.img}`}
							alt="Project preview"
							style={{
								display: 'block',
								objectFit: 'cover',
								width: '100%',
								height: 160,
								backgroundColor: 'var(--gray-5)',
							}}
						/>
					</Inset>
					<Heading size="5">{project.title}</Heading>
					<Box height="12px" />
					<Text as="div" size="1" truncate>
						{project.description}
					</Text>
					<Box height="12px" />
					<Flex gap="2" align="center">
						<Text size="1" className="hover:underline">
							Read More
						</Text>
						<CaretRightIcon width="18" height="18" />
					</Flex>
				</Card>
			</Dialog.Trigger>
			<Dialog.Content size="3" minWidth={{ initial: '100px', xs: '500px', sm: '700px', md: '900px' }}>
				<Dialog.Title size="7">{project.title}</Dialog.Title>
				<Dialog.Description size="2">{project.description}</Dialog.Description>
				<Box height="12px" />
				{project.Languages.map((lang, index) => (
					<Badge size="1" variant="soft" radius="full" mr="2" className="opacity-80" key={index}>
						{lang}
					</Badge>
				))}
				<Box py="4">{CondotionalComponent()}</Box>
				<Box height="12px" />
				<Flex gap="3" justify="end">
					<Dialog.Close>
						<Button style={{ outline: 'none' }} variant="outline" color="gray">
							Cancel
						</Button>
					</Dialog.Close>
					<Dialog.Close>
						<Link href={project.link} target="_blank">
							<Button variant="solid">View</Button>
						</Link>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
};

const Work: React.FC<unknown> = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['projects'],
		queryFn: fetchData,
	});
	async function fetchData() {
		const response = await fetch(API.Projects);
		return response.json();
	}
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
			<Grid gap="7" columns={{ md: '2', lg: '3' }}>
				{data.map((ele: Template, index: number) => (
					<div>
						<div className="mx-auto" style={{ width: 360, height: 300 }}>
							<PeiceOfWork project={ele} key={index} />
						</div>
					</div>
				))}
			</Grid>
		);
	}
	return (
		<>
			<div id="work"></div>
			<Frame className="py-48">
				<Badge variant="soft" radius="full">
					<Flex gap="2" align="center" px="2">
						<Pencil2Icon />
						Built It Myself
					</Flex>
				</Badge>
				<Box height="12px" />
				<Heading size="8">My Projects & Work</Heading>
				<Box height="24px" />
				<Text as="div" size="2" className="opacity-70">
					I build every project from the ground up, taking each through the full journey from initial concept and design to final implementation with my own creative touches. All work is
					crafted with care and professional precision—explore the complete collection on my GitHub.
				</Text>
				<Box height="46px" />
				{CondotionalComponent()}
			</Frame>
		</>
	);
};

export default Work;
