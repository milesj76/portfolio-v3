import { fontFamily, screens as defaultScreens } from "tailwindcss/defaultTheme";
const defaultColors = require('tailwindcss/colors')
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		colors: {
			inherit: defaultColors.inherit,
			current: defaultColors.current,
			transparent: defaultColors.transparent,
			black: '#09141f',
			white: {
				'100': "#f5f5f4",
				'200': "#ececea",
				'300': "#e2e2df",
			},
			slate: defaultColors.slate,
			gray: defaultColors.gray,
			zinc: defaultColors.zinc,
			neutral: defaultColors.neutral,
			stone: defaultColors.stone,
			red: defaultColors.red,
			orange: defaultColors.orange,
			amber: defaultColors.amber,
			yellow: defaultColors.yellow,
			lime: defaultColors.lime,
			green: {
				'300': "#65b886",
				'400': "#57b27c",
				'500': '#4DA871',
			},
			emerald: defaultColors.emerald,
			teal: defaultColors.teal,
			cyan: defaultColors.cyan,
			sky: defaultColors.sky,
			blue: {
				dark: "#334870",
				light: "#778da9",
				...defaultColors.blue
			},
			indigo: defaultColors.indigo,
			violet: defaultColors.violet,
			purple: defaultColors.purple,
			fuchsia: defaultColors.fuchsia,
			pink: defaultColors.pink,
			rose: defaultColors.rose,
		},
		screens: {
			"xs": "475px",
			...defaultScreens,
			"2xl": "1400px"
		},
		fontFamily: {
			'sans': ['Raleway']
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				blklite: '#222222',
				theme100: "#09141f",
				theme200: "#1b263b",
				theme300: "#778da9",
				theme400: "#f5f5f4",
				theme500: "#4da871",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				serif: [...fontFamily.serif]
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
