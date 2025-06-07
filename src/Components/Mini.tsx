import { Box } from '@radix-ui/themes';
import React from 'react';

interface FrameProps {
	children: React.ReactNode;
	className?: string;
}
export const Frame: React.FC<FrameProps> = ({ children, className }) => {
	return (
		<div className={className}>
			<div className="max-w-320 mx-auto px-6 sm:px-12 md:px-16 overflow-hidden">{children}</div>
		</div>
	);
};

export const Decorators: React.FC<unknown> = () => {
	return (
		<Box className="relative -z-10">
			<Box
				height="200px"
				width="200px"
				className="opacity-25 absolute"
				top="50%"
				left="100%"
				style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-100%)' }}
			></Box>
			<Box
				height="400px"
				width="400px"
				className="opacity-25 absolute"
				top="50%"
				left="100%"
				style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-100%)' }}
			></Box>
			<Box
				height="600px"
				width="600px"
				className="opacity-25 absolute"
				top="50%"
				left="100%"
				style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-100%)' }}
			></Box>
			<Box
				height="1000px"
				width="1000px"
				className="opacity-25 absolute"
				top="50%"
				left="100%"
				style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-100%)' }}
			></Box>
		</Box>
	);
};
