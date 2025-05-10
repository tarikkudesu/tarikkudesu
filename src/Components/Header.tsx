import React from 'react';

import { GitHubLogoIcon, MoonIcon } from '@radix-ui/react-icons';
import { Flex, Avatar, IconButton, Link } from '@radix-ui/themes';

interface HeaderProps {
	changeTheme: () => void;
	theme: string;
}

const Header: React.FC<HeaderProps> = ({ changeTheme, theme }) => {
	return (
		<>
			<Flex
				align="center"
				justify="between"
				py="2"
				px="6"
				top="0"
				right="0"
				left="0"
				className="border-b-1 border-gray-500/50 fixed z-10"
				style={{ backgroundColor: 'var(--gray-2)' }}
			>
				<Avatar size="2" src={theme === 'dark' ? '/logowhite.png' : '/logo.png'} fallback="Tr." />
				<Flex align="center" gap="5">
					<IconButton variant="ghost" size="3" color="gray">
						<Link href="https://github.com/tarikkudesu" target='_blank'>
							<GitHubLogoIcon />
						</Link>
					</IconButton>
					<IconButton variant="ghost" size="3" color="gray">
						<MoonIcon onClick={changeTheme} />
					</IconButton>
				</Flex>
			</Flex>
		</>
	);
};

export default Header;
