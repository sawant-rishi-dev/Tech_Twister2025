
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tech: {
					'purple': '#8A2BE2',
					'blue': '#1C0D36',
					'pink': '#FF00FF',
					'cyan': '#00FFFF',
					'dark': '#0A0118',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7', filter: 'brightness(1.2) blur(4px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'shine': 'shine 8s linear infinite',
				'scale-up': 'scale-up 0.5s ease-out forwards'
			},
			backgroundImage: {
				'tech-pattern': 'radial-gradient(circle at 25px 25px, #8A2BE2 2px, transparent 0), radial-gradient(circle at 75px 75px, #8A2BE2 2px, transparent 0)',
				'tech-gradient': 'linear-gradient(to right, #8A2BE2, #FF00FF)',
				'hero-pattern': 'linear-gradient(to bottom, rgba(10, 1, 24, 0.8), rgba(26, 6, 61, 0.9)), url("/background-uploads/logo.gif")',
				'card-gradient': 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)',
				'button-gradient': 'linear-gradient(90deg, #8A2BE2, #FF00FF, #8A2BE2)',
				'section-gradient': 'linear-gradient(to bottom, rgba(10, 1, 24, 1), rgba(28, 13, 54, 0.95))'
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Orbitron', 'Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
