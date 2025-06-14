import React, { useState } from 'react';
import { Frame } from './Mini';
import { DownloadIcon, MagicWandIcon } from '@radix-ui/react-icons';
import { Flex, Badge, Box, Strong, Button, Text, Link, HoverCard, Avatar, Heading } from '@radix-ui/themes';
import Threads from '../extra/Threads';

const Intro: React.FC<unknown> = () => {
	const [active, setActive] = useState<boolean>(false);
	return (
		<>
			<div className="relative">
				<div className="absolute top-140 left-0 right-0 -z-10">
					<div style={{ width: '100%', height: '600px', position: 'relative' }}>
						<Threads amplitude={3} distance={0} enableMouseInteraction={true} />
					</div>
				</div>
			</div>
			<Frame className="py-36">
				<Flex align="start" direction="column" gap="2">
					<Box height="120px"></Box>
					<Badge variant="soft" radius="full">
						<Flex gap="2" align="center" px="2">
							<MagicWandIcon />
							Digital Wizard
						</Flex>
					</Badge>
					<Box height="8px"></Box>
					<Box>
						<Text as="div" weight="bold" align="left" size={{ initial: '8', lg: '9' }}>
							Hi, I am{' '}
							<HoverCard.Root>
								<HoverCard.Trigger>
									<Link href="https://github.com/tarikkudesu" target="_blank">
										<Text style={{ color: 'var(--accent-10)' }} className="pl-4">
											Tarik Amehri
										</Text>
									</Link>
								</HoverCard.Trigger>
								<HoverCard.Content maxWidth="300px">
									<Flex gap="4">
										<Avatar size="5" fallback="T" radius="full" src="/profile.png" />
										<Box>
											<Heading size="3" as="h3">
												Tarik Amehri
											</Heading>
											<Text as="div" size="2" color="gray" mb="2">
												@tarikkudesu
											</Text>
											<Text as="div" size="2">
												A Computer Science student at 1337 Khouribga
											</Text>
										</Box>
									</Flex>
								</HoverCard.Content>
							</HoverCard.Root>
						</Text>
					</Box>
					<Box height="8px"></Box>
					<Text size='4'>
						<Strong>Software Engineer</Strong> / <Strong>Front-End Specialist</Strong>
					</Text>
					<Box height="8px"></Box>
					<Text as="div" align="left" className="max-w-175" size="2">
						A computer science student at{' '}
						<Link href="https://1337.ma/en/" weight="bold" color="gray" highContrast target="_blank">
							1337 coding school
						</Link>
						, Based in Khouribga - Morocco, with 2+ years of specialized experience in Unix/Linux and modern web development, with a proven ability to solve complex technical challenges
						and deliver scalable solutions.
					</Text>
					<Box height="24px"></Box>
					<Flex gap="4">
						<Link href="#work" className="cursor-pointer">
							<Button size="2" variant="solid">
								Projects
							</Button>
						</Link>
						<Link href="/ws">
							<Button size="2" variant="outline" onClick={() => setActive(!active)}>
								Roadmap
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
		</>
	);
};

export default Intro;
