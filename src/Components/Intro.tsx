import React from 'react';
import { Frame } from './Mini';
import { DownloadIcon, MagicWandIcon } from '@radix-ui/react-icons';
import { Flex, Badge, Box, Strong, Button, Text, Link } from '@radix-ui/themes';

const Intro: React.FC<unknown> = () => {
	return (
		<Frame className="py-36">
			<Flex align="center" justify="center" direction="column" gap="2">
				<Badge variant="soft" radius="full">
					<Flex gap="2" align="center" px="2">
						Digital Wizard
						<MagicWandIcon />
					</Flex>
				</Badge>
				<Box height="12px"></Box>
				<Box>
					<Text as="div" weight="bold" align="center" size={{ initial: '8', lg: '9' }}>
						I Build & Deploy
					</Text>
					<Box height="8px"></Box>
					<Text as="div" weight="bold" align="center" size={{ initial: '8', lg: '9' }}>
						You
						<Text style={{ color: 'var(--accent-10)' }} className="pl-4">
							Interact
						</Text>{' '}
						&
						<Text style={{ color: 'var(--accent-10)' }} className="pl-4">
							Enjoy
						</Text>
					</Text>
				</Box>
				<Box height="36px"></Box>
				<Text as="div" align="center" size="4">
					My name is <Strong>Tarik Amehri</Strong>
					<br />
					<Strong>Software Engineer</Strong> / <Strong>Front-End Developer</Strong>
				</Text>
				<Text as="div" align="center" className="max-w-200" size="2">
					A computer science student at{' '}
					<Link href="https://1337.ma/en/" weight="bold">
						1337 coding school
					</Link>
					, currently crafting my version of the wonderfull digital world one step at a time. I think about every detail in my
					work - from idea and analytics to prototype and visual design. into a great and innovative product.
				</Text>
				<Box height="46px"></Box>
				<Flex gap="4">
					<Link href="#work" className="cursor-pointer">
						<Button size="2" variant="solid">
							Projects
						</Button>
					</Link>
					<Link href="/Amehri Tarik.pdf" download="Amehri Tarik.pdf" className="cursor-pointer">
						<Button size="2" variant="outline">
							<Flex align="center" gap="2">
								Resume
								<DownloadIcon />
							</Flex>
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Frame>
	);
};

export default Intro;
