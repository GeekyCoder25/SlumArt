'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Navbar = () => {
	const navRoutes = [
		{
			slug: '',
			label: 'Home',
		},
		{
			slug: 'services',
			label: 'Services',
		},
		{
			slug: 'about',
			label: 'About',
		},
		{
			slug: 'blog',
			label: 'Art Blog',
		},
	];

	return (
		<nav className="flex my-5 mx-auto max-w-screen-xl">
			<h1 className="font-bold text-lg font-bai">SlumArt</h1>
			<ul className="ml-auto flex gap-8">
				{navRoutes.map(route => (
					<RouteLink key={route.slug} route={route} />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

const RouteLink = ({route}) => {
	const pathname = usePathname();

	return (
		<li>
			<Link
				href={`/${route.slug}`}
				className={`font-inter font-semibold ${
					`/${route.slug}` === pathname && 'text-amber-500'
				}`}
			>
				{route.label}
			</Link>
		</li>
	);
};
