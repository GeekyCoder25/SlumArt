'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

const Navbar = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const pathname = usePathname();

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

	useEffect(() => {
		setShowMobileNav(false);
	}, [pathname]);

	return (
		<nav className="flex my-5 mx-auto max-w-screen-xl px-3 items-center">
			<h1 className="font-bold text-lg font-bai">SlumArt</h1>
			<span className="md:hidden ml-auto">
				<i
					className="fas fa-bars text-2xl "
					onClick={() => setShowMobileNav(true)}
				></i>
			</span>
			<ul
				className={`fixed md:static top-0 ${
					showMobileNav ? 'right-0' : '-right-96'
				} h-screen md:h-fit w-72 md:w-fit bg-gray-900 z-30 md:bg-transparent flex flex-col md:flex-row md: ml-auto gap-8 pl-6 pt-28 md:pt-0 transition-all ease-in-out duration-500`}
			>
				<span className="absolute right-4 top-6 md:hidden">
					<i
						className="fas fa-xmark text-white text-2xl"
						onClick={() => setShowMobileNav(false)}
					></i>
				</span>
				{navRoutes.map(route => (
					<RouteLink key={route.slug} route={route} />
				))}
			</ul>
			<span
				className={`absolute h-full w-full bg-black/40 z-20 left-0 bottom-0 ${
					showMobileNav ? 'block' : 'hidden'
				}`}
				onClick={() => setShowMobileNav(false)}
			></span>
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
					`/${route.slug}` === pathname
						? 'text-amber-500'
						: 'text-white md:text-black'
				}`}
			>
				{route.label}
			</Link>
		</li>
	);
};
