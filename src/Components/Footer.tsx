import { Grid, Avatar, Flex, Text, Link } from '@radix-ui/themes';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Frame } from './Mini';

const Footer: React.FC<unknown> = () => {
	return (
		<footer>
			<Frame className="py-12 border-t-1 border-gray-500/50">
				<Grid columns="3" gap="9" width="auto">
					<Avatar size="2" src="src/assets/logowhite.png" fallback="Tr." />
					<Flex direction="column" gap="2">
						<Text size="3" className="font-bold">
							Let's talk
						</Text>
						<Flex gap="2" align="center">
							<Link href="#" underline="hover" color="gray" size="2">
								amehritarik@gmail.com
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="#" underline="hover" color="gray" size="2">
								+212 624 651 076
							</Link>
							<ArrowTopRightIcon />
						</Flex>
					</Flex>
					<Flex direction="column" gap="2">
						<Text size="3" className="font-bold">
							Social
						</Text>
						<Flex gap="2" align="center">
							<Link href="#" underline="hover" color="gray" size="2">
								Github
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="#" underline="hover" color="gray" size="2">
								Instagram
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="#" underline="hover" color="gray" size="2">
								LinkIn
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="#" underline="hover" color="gray" size="2">
								Twitter
							</Link>
							<ArrowTopRightIcon />
						</Flex>
					</Flex>
				</Grid>
			</Frame>
		</footer>
	);
};
export default Footer;
