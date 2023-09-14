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
			black: '#333333',
			white: defaultColors.white,
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
			green: defaultColors.green,
			emerald: defaultColors.emerald,
			teal: defaultColors.teal,
			cyan: defaultColors.cyan,
			sky: defaultColors.sky,
			blue: defaultColors.blue,
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
				blklite: '#222222'
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
