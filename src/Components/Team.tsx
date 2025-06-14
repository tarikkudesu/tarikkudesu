import React from 'react';

import { Frame } from './Mini';
import { Box, Flex, Heading, Text, Badge, Avatar, Link } from '@radix-ui/themes';
import { PersonIcon } from '@radix-ui/react-icons';

const Team: React.FC<unknown> = () => {
	return (
		<Frame className="py-48">
			<Badge variant="soft" radius="full">
				<Flex gap="2" align="center" px="2">
					<PersonIcon />
					The brains
				</Flex>
			</Badge>
			<Box height="12px" />
			<Heading size="8">Team & Collaborators</Heading>
			<Box height="24px" />
			<Text as="div" size="2" className="opacity-70">
				Great ideas flourish through great partnerships. I excel at building strong working relationships with other developers, environments where creativity meets execution. I believe the
				best solutions emerge when talented people unite around a shared vision.
			</Text>
			<Box height="46px" />
			<Flex direction="column" gap="4">
				<Flex gap="4" align="center" justify="start">
					<Avatar radius="medium" size="2" src="https://avatars.githubusercontent.com/u/57399454?v=4" fallback="T"></Avatar>
					<Text size="1" style={{ width: 160 }}>
						Otman Oulcaid
					</Text>
					<Link target="_blank" href="https://github.com/otmanoulcaid/" size="1" className="opacity-80 cursor-pointer">
						github.com/otmanoulcaid
					</Link>
				</Flex>
				<Flex gap="4" align="center" justify="start">
					<Avatar radius="medium" size="2" src="https://avatars.githubusercontent.com/u/150599684?v=4" fallback="T"></Avatar>
					<Text size="1" style={{ width: 160 }}>
						El Mustapha Zahiri
					</Text>
					<Link target="_blank" href="https://github.com/ezahiri10/" size="1" className="opacity-80 cursor-pointer">
						github.com/ezahiri10
					</Link>
				</Flex>
				<Flex gap="4" align="center" justify="start">
					<Avatar radius="medium" size="2" src="https://avatars.githubusercontent.com/u/111459163?v=4" fallback="T"></Avatar>
					<Text size="1" style={{ width: 160 }}>
						Omar Ghazi
					</Text>
					<Link target="_blank" href="https://github.com/otmanoulcaid/" size="1" className="opacity-80 cursor-pointer">
						github.com/om7gh
					</Link>
				</Flex>
			</Flex>
		</Frame>
	);
};

export default Team;
