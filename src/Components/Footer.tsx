import { Grid, Avatar, Flex, Text, Link } from '@radix-ui/themes';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Frame } from './Mini';

interface FooterProps {
	theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
	return (
		<footer>
			<Frame className="py-12 border-t-1 border-gray-500/50">
				<Grid columns={{ initial: '1', sm: '3' }} gap="9" width="auto">
					<Avatar size="2" src={theme === 'dark' ? '/logowhite.png' : '/logo.png'} fallback="Tr." />
					<Flex direction="column" gap="2">
						<Text size="3" className="font-bold">
							Let's talk
						</Text>
						<Flex gap="2" align="center">
							<Link href="mailto:amehritarik@gmail.com" underline="hover" color="gray" size="2">
								amehritarik@gmail.com
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="tel:+212624651076" underline="hover" color="gray" size="2">
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
							<Link href="http://github.com/tarikkudesu" underline="hover" color="gray" size="2">
								Github
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="https://www.instagram.com/amehri_tarik" underline="hover" color="gray" size="2">
								Instagram
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="https://www.linkedin.com/in/tarik-amehri" underline="hover" color="gray" size="2">
								LinkedIn
							</Link>
							<ArrowTopRightIcon />
						</Flex>
						<Flex gap="2" align="center">
							<Link href="https://x.com/AmehriT83856?t=XK5JBaVLC-LdTguRyM4f_A&s=08" underline="hover" color="gray" size="2">
								X
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
