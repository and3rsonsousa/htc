/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					0: "#EBE4E0",
					1: "#BFD2AC",
					2: "#A1C18B",
					3: "#679550",
					4: "#47743E",
					5: "#E6734D",
				},
			},
		},
	},
	plugins: [],
};
