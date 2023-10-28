import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const socials = [
		{
			name: 'facebook',
			link: 'https://facebook',
		},
		{
			name: 'instagram',
			link: 'https://instagram',
		},
		{
			name: 'twitter',
			link: 'https://twitter',
		},
		{
			name: 'youtube',
			link: 'https://youtube',
		},
	];
	return (
		<footer className="bg-gray-900 text-white mt-36 p-20">
			<section className="max-w-screen-xl mx-auto flex justify-between ">
				<div>
					<h2 className="font-inter font-semibold">FOLLOW US</h2>
					<span className="flex gap-5 mt-3">
						{socials.map(index => (
							<Link key={index.name} href={index.link}>
								<Image
									src={`/images/${index.name}.svg`}
									width={30}
									height={30}
									alt={index.name}
								/>
							</Link>
						))}
					</span>
				</div>
				<div>
					<h2 className="font-inter font-semibold">About</h2>
					<span className="flex gap-5 mt-3">
						<ul className="flex flex-col gap-2 mt-3">
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
						</ul>
					</span>
				</div>
				<div>
					<h2 className="font-inter font-semibold">Service</h2>
					<span className="flex gap-5 mt-3">
						<ul className="flex flex-col gap-2 mt-3">
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Link Here</Link>
							</li>
						</ul>
					</span>
				</div>
				<div>
					<h2 className="font-inter font-semibold">Help and Information</h2>
					<span className="flex gap-5 mt-3">
						<ul className="flex flex-col gap-2 mt-3">
							<li className="font-inter">
								<Link href="/contact">Contact Us</Link>
							</li>
							<li className="font-inter">
								<Link href="/">Terms and Conditions & Privacy</Link>
							</li>
							<li className="font-inter">
								<Link href="/">FAQs</Link>
							</li>
						</ul>
					</span>
				</div>
				<div>
					<h2 className="font-inter font-semibold">CONTACT</h2>
					<span className="flex gap-5 mt-3">
						<ul className="flex flex-col gap-2 mt-3">
							<li className="font-inter">
								<Link href="tel:+234">+2349012345678</Link>
							</li>
							<li className="font-inter">
								<Link href="mailto:slumart@gmial.com">slumart@gmail.com</Link>
							</li>
						</ul>
					</span>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
