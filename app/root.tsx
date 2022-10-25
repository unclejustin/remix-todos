import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'

import tailwindStyles from './styles/tailwind.css'

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: tailwindStyles }]
}

export const meta: MetaFunction = () => {
	return {
		viewport: 'width=device-width, initial-scale=1',
		charset: 'utf-8',
		title: 'Remix Todos',
		description:
			'A testing focused Remix Stack, that integrates E2E & Unit testing with Playwright, Vitest, MSW and Testing Library. Driven by Prisma ORM. Deploys to Fly.io',
		keywords:
			'remix,create-remix,remix-stack,playwright,typescript,sqlite,postgresql,prisma,tailwindcss,fly.io',
		'og:title': 'Remix Playwright',
		'og:type': 'website',
		'og:url': 'https://stripe-stack.fly.dev',
		'og:image':
			'https://raw.githubusercontent.com/dev-xo/dev-xo/main/playwright-stack/assets/Playwright-Thumbnail.png',
		'og:card': 'summary_large_image',
		'og:creator': '@DanielKanem',
		'og:site': 'https://stripe-stack.fly.dev',
		'og:description':
			'A testing focused Remix Stack, that integrates E2E & Unit testing with Playwright, Vitest, MSW and Testing Library. Driven by Prisma ORM. Deploys to Fly.io',
		'twitter:image':
			'https://raw.githubusercontent.com/dev-xo/dev-xo/main/playwright-stack/assets/Playwright-Thumbnail.png',
		'twitter:card': 'summary_large_image',
		'twitter:creator': '@DanielKanem',
		'twitter:title': 'Remix Playwright',
		'twitter:description':
			'A testing focused Remix Stack, that integrates E2E & Unit testing with Playwright, Vitest, MSW and Testing Library. Driven by Prisma ORM. Deploys to Fly.io',
	}
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	)
}
