import React from 'react';

import { Frame } from './Mini';
import { Box, Flex, Heading, Grid, Text } from '@radix-ui/themes';

interface EntityProps {
	place: string;
	date: string;
	diploma: string;
}
const Entity: React.FC<EntityProps> = ({ place, date, diploma }) => {
	return (
		<Box>
			<Flex justify="between" align="center">
				<Text size="3" weight="medium">
					{diploma}
				</Text>
				<Text size="2" className="opacity-70">
					{date}
				</Text>
			</Flex>
			<Text size="1" color="gray">
				{place}
			</Text>
		</Box>
	);
};
const Me: React.FC<unknown> = () => {
	return (
		<Frame className="py-48">
			<Heading size="8">Experience & Education</Heading>
			<Box height="12px" />
			<Text as="div" size="2" className="opacity-70">
				Yes, previously a physics student, after having completed my studies in Materials physics I decided to switch into IT. I
				joined the 42 Network - 1337 Coding school to persue and dedicate my time for information technology.
			</Text>
			<Box height="92px" />
			<Grid columns="2" gap="9" width="auto">
				<Flex direction="column" gap="6">
					<Heading size="4">Education</Heading>
					<Entity place="1337 coding school - khouribga" date="2023 - Present" diploma="Computer Science" />
					<Entity
						place="University Soultan Moulay Soliman, polydisciplinary faculty - khouribga"
						date="2020 - 2023"
						diploma="Licence (Material physics)"
					/>
					<Entity
						place="Al Khawarizmi High School - Chichaoua"
						date="2018 - 2019"
						diploma="Baccalaurite (Experimental physics)"
					/>
				</Flex>
				<Flex direction="column" gap="6">
					<Heading size="4">Experience</Heading>
					<Entity
						place="OCP Khouribga BNI-IDIR Unit (Phosphate Drying, Oven failure analysis)"
						date="08-2023"
						diploma="Internship"
					/>
				</Flex>
			</Grid>
		</Frame>
	);
};

export default Me;
