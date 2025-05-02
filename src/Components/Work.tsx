import React from 'react';
import { useQuery } from '@tanstack/react-query';

import {
	Badge,
	Box,
	Card,
	Flex,
	Heading,
	Inset,
	ScrollArea,
	Text,
	Callout,
	Spinner,
	AlertDialog,
	Button,
	IconButton,
} from '@radix-ui/themes';
import { Pencil2Icon, OpenInNewWindowIcon, InfoCircledIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { ShowCase, Template } from '../Functionaity/Interfaces';
import { Frame } from './Mini';
import { marked } from 'marked';
import './Md.css';

interface MarkdownProps {
	markdown: string;
}
const Markdown: React.FC<MarkdownProps> = ({ markdown }) => {
	const html = marked(markdown);
	return <div id="md" dangerouslySetInnerHTML={{ __html: html }} />;
};

interface PeiceOfWorkProps {
	project: Template;
}
const PeiceOfWork: React.FC<PeiceOfWorkProps> = ({ project }) => {
	async function fetchData() {
		const response = await fetch('md/' + project.md);
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
					<Callout.Text>
						Something went wrong while loading data. If this keeps happening, feel free to reach out — I’ll fix it as soon as
						possible.
					</Callout.Text>
				</Callout.Root>
			);
		if (data)
			return (
				<ScrollArea
					type="always"
					scrollbars="vertical"
					className="pr-4 overflow-hidden"
					radius="medium"
					style={{ height: '400px' }}
				>
					<Markdown markdown={data} />
				</ScrollArea>
			);
	}
	return (
		<Box className="cursor-pointer">
			<AlertDialog.Root>
				<AlertDialog.Trigger>
					<Card size="3" style={{ width: 360, height: 300 }} className="relative cursor-pointer">
						<Inset clip="padding-box" side="top" pb="current">
							<img
								src={`./img/${project.img}`}
								alt="Bold typography"
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
				</AlertDialog.Trigger>
				<AlertDialog.Content size="3">
					<Flex gap="3" justify="end">
						<AlertDialog.Cancel>
							<Button variant="outline" color="gray">
								Cancel
							</Button>
						</AlertDialog.Cancel>
						<AlertDialog.Action>
							<Button variant="solid">Github</Button>
						</AlertDialog.Action>
					</Flex>
					<Box height="12px" />
					<AlertDialog.Title>{project.title}</AlertDialog.Title>
					<AlertDialog.Description size="2">{project.description}</AlertDialog.Description>
					<Box height="12px" />
					{project.Languages.map((lang, index) => (
						<Badge size="1" variant="soft" radius="full" mr="2" className="opacity-80" key={index}>
							{lang}
						</Badge>
					))}
					<Box py="4">{CondotionalComponent()}</Box>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</Box>
	);
};

const Work: React.FC<unknown> = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['projects'],
		queryFn: fetchData,
	});
	async function fetchData() {
		const response = await fetch(ShowCase.Projects);
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
					<Callout.Text>
						Something went wrong while loading data. If this keeps happening, feel free to reach out — I’ll fix it as soon as
						possible.
					</Callout.Text>
				</Callout.Root>
			);
		return (
			<ScrollArea type="always" scrollbars="horizontal" className="pb-8 overflow-hidden" radius="medium">
				<Flex gap="7" justify="between">
					{data.map((ele: Template, index: number) => (
						<PeiceOfWork project={ele} key={index} />
					))}
				</Flex>
			</ScrollArea>
		);
	}
	return (
		<>
			<Frame className="py-24">
				<Badge variant="soft" radius="full">
					<Flex gap="2" align="center" px="2">
						Built It Myself
						<Pencil2Icon />
					</Flex>
				</Badge>
				<Box height="12px" />
				<Heading size="8">My Projects & Work</Heading>
				<Box height="24px" />
				<Text as="div" size="2" className="opacity-70">
					All coding projects are built from the ground up, from ideation, designing and planning, all the way to finalizing it
					with my own artistic touches. All the project are built with care and proffessionalism, everything is available on my
					github.
				</Text>
				<Box height="46px" />
				{CondotionalComponent()}
			</Frame>
		</>
	);
};

export default Work;
