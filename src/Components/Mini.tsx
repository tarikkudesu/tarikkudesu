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
