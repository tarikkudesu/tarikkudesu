import React from 'react';

import { Frame } from './Mini';
import { Box, Flex, Heading, Grid, Text, Badge, Avatar, Link, Card } from '@radix-ui/themes';
import { Pencil2Icon } from '@radix-ui/react-icons';

const Team: React.FC<unknown> = () => {
	return (
		<Frame className="py-48">
			<Badge variant="soft" radius="full">
				<Flex gap="2" align="center" px="2">
					<Pencil2Icon />
					Built It Myself
				</Flex>
			</Badge>
			<Box height="12px" />
			<Heading size="8">Team & Project Mates</Heading>
			<Box height="24px" />
			<Text as="div" size="2" className="opacity-70">
				All coding projects are built from the ground up, from ideation, designing and planning, all the way to finalizing it with
				my own artistic touches. All the project are built with care and proffessionalism, everything is available on my github.
			</Text>
			<Box height="46px" />
			<Card>
				<Flex direction="column" gap="4">
					<Flex gap="4" align="center" justify="start">
						<Avatar radius="medium" size="2" src="/profile.jpg" fallback="T"></Avatar>
						<Link size="1" className="cursor-pointer" style={{ width: 160 }}>
							tarikkudesu
						</Link>
						<Text size="1" className="opacity-80 cursor-pointer">
							amehritarik@gmail.com
						</Text>
					</Flex>
					<Flex gap="4" align="center" justify="start">
						<Avatar radius="medium" size="2" src="/profile.jpg" fallback="T"></Avatar>
						<Link size="1" className="cursor-pointer" style={{ width: 160 }}>
							otman oulcaid
						</Link>
						<Text size="1" className="opacity-80 cursor-pointer">
							amehritarik@gmail.com
						</Text>
					</Flex>
					<Flex gap="4" align="center" justify="start">
						<Avatar radius="medium" size="2" src="/profile.jpg" fallback="T"></Avatar>
						<Link size="1" className="cursor-pointer" style={{ width: 160 }}>
							mustapha zahiri
						</Link>
						<Text size="1" className="opacity-80 cursor-pointer">
							amehritarik@gmail.com
						</Text>
					</Flex>
					<Flex gap="4" align="center" justify="start">
						<Avatar radius="medium" size="2" src="/profile.jpg" fallback="T"></Avatar>
						<Link size="1" className="cursor-pointer" style={{ width: 160 }}>
							omar omghazi
						</Link>
						<Text size="1" className="opacity-80 cursor-pointer">
							amehritarik@gmail.com
						</Text>
					</Flex>
				</Flex>
			</Card>
		</Frame>
	);
};

export default Team;
