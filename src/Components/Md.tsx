import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import './Md.css';

import { Frame, Icon, RenderError, Spinner } from './Mini';
import CLOSE from './CLOSE';

interface MarkdownProps {
	markdown: string;
}
const Markdown: React.FC<MarkdownProps> = ({ markdown }) => {
	const html = marked(markdown);
	return <div id="md" dangerouslySetInnerHTML={{ __html: html }} />;
};

interface MdProps {
	md: string;
	close: () => void;
}
const Md: React.FC<MdProps> = ({ md, close }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [data, setData] = useState<string>('');

	useEffect(
		function () {
			async function fetchMd() {
				try {
					const response = await fetch('/md/' + md);
					const text = await response.text();
					setData(text);
					setLoading(false);
				} catch (err) {
					console.log(err);
					setError(true);
				}
			}
			fetchMd();
		},
		[md]
	);
	return (
		<>
			<div className="flex justify-between items-center">
				<div className=""></div>
				<div
					onClick={close}
					className="h-10 w-10 rounded-md text-gray-600 hover:text-white hover:bg-gray-800 duration-200 flex justify-center items-center cursor-pointer"
				>
					<CLOSE className="h-6 w-6 p-1" />
				</div>
			</div>
			{loading ? <Spinner /> : error ? <RenderError /> : <Markdown markdown={data} />}
		</>
	);
};

export default Md;
