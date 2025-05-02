module.exports = {
	theme: {
		extends: {},
	},
	variants: {
		extends: {
			fill: ['hover', 'focus'],
			stroke: ['hover', 'focus'],
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
