/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const Blog = () => {
	const [carouselIndex, setCarouselIndex] = useState(1);
	const [carouselImages, setCarouselImages] = useState([]);

	const blogImages = [
		{
			id: 1,
			image: '/images/blog.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 2,
			image: '/images/carousel2.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 3,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 4,
			image: '/images/blog2.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 5,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 6,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 7,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 8,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 9,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
		{
			id: 10,
			image: '/images/carousel.png',
			title: 'Blog Title',
			desc: 'Short Description',
			date: '11/10/23',
		},
	];

	useEffect(() => {
		setCarouselImages(blogImages.slice(0, 3));
	}, []);

	useEffect(() => {
		const bgTimeout = setTimeout(() => {
			carouselIndex >= carouselImages.length
				? setCarouselIndex(1)
				: setCarouselIndex(prev => prev + 1);
		}, 3500);
		return () => {
			clearTimeout(bgTimeout);
		};
	}, [carouselImages.length, carouselIndex]);

	return (
		<div>
			<section className="relative h-[50vh] min-h-[600px] md:h-screen font-bai">
				<div className="absolute top-1/3 text-gray-50 w-full flex flex-col gap-5 pl-6 md:pl-10 z-20 ">
					<h3 className="font-bold font-bai text-5xl md:text-7xl ">
						Blog Title
					</h3>
					<span className="font-semibold text-lg md:text-2xl ">
						Short Description
					</span>
					<span>
						<button className="bg-gray-100 text-gray-950 font-semibold rounded-md p-3 text-xl mt-20">
							READ MORE
						</button>
					</span>
				</div>
				<span className="absolute h-full w-full bg-black/40 z-10"></span>
				{carouselImages.map(index => (
					<img
						src={index.image}
						key={index.id}
						className={`absolute h-full w-full object-cover ${
							carouselIndex === index.id ? '-z-10' : 'hidden -z-20'
						}`}
						alt="blog_image"
					/>
				))}
				<div className="absolute bottom-20 w-full flex justify-center gap-5 z-20">
					{carouselImages.map(index => (
						<span
							key={index.id}
							className={`w-4 h-4 text-center rounded-full cursor-pointer ${
								carouselIndex === index.id ? 'bg-white' : 'bg-gray-500 '
							}`}
							onClick={() => setCarouselIndex(index.id)}
						></span>
					))}
				</div>
			</section>
			<section className="flex max-w-screen-xl m-auto my-20 flex-col-reverse md:flex-row ">
				<div className="flex-1">
					<Image
						src={'/images/blog2.png'}
						width={720}
						height={627}
						className="max-w-full"
						alt="explore"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-5 justify-center py-10 px-5 md:p-10">
					<h4 className="text-6xl font-bold font-bai">Blog Title</h4>
					<p className="font-inter text-lg font-medium">Short Description</p>
					<span>
						<button className="bg-gray-900 text-white py-2 px-8 font-medium font-inter rounded-md mt-5">
							READ MORE
						</button>
					</span>
				</div>
			</section>
			<section className="flex flex-wrap justify-center gap-x-14 gap-y-6 mt-10 px-5">
				{blogImages.slice(0, 9).map(index => (
					<BlogCard key={index.id} index={index} />
				))}
			</section>
			<div className="flex justify-center w-full my-16">
				<button className="bg-gray-900 text-white py-2 px-12 font-medium font-inter rounded-md">
					READ MORE
				</button>
			</div>
			<section className="relative h-screen font-bai">
				<div className="absolute top-1/3 text-gray-50 w-full flex flex-col gap-5 pl-10 z-20 ">
					<h3 className="font-bold font-bai text-7xl ">Blog Title</h3>
					<span className="font-semibold text-2xl ">Short Description</span>
					<span>
						<button className="bg-gray-100 text-gray-950 font-semibold rounded-md p-3 text-xl mt-20">
							READ MORE
						</button>
					</span>
				</div>
				<span className="absolute h-full w-full bg-black/40 z-10"></span>
				{carouselImages.slice(0, 1).map(index => (
					<img
						src={index.image}
						key={index.id}
						className={'absolute h-full w-full object-cover -z-10'}
						alt="blog_image"
					/>
				))}
			</section>
		</div>
	);
};

export default Blog;

const BlogCard = ({index}) => {
	const {title, image, date} = index;
	const dateInstance = new Date(date);
	const formatDate = ` ${dateInstance.toLocaleString('en-US', {
		month: 'long',
	})} ${dateInstance.getDate()}, ${dateInstance.getFullYear()}`;

	return (
		<div className="w-1/4 h-96 text-center min-w-fit">
			<div className="h-80 flex justify-center">
				<Image
					src={image}
					width={308}
					height={407}
					alt={title}
					className="object-cover w-full h-full max-w-xs"
				/>
			</div>
			<h4 className="mt-3 font-semibold text-xl">{title}</h4>
			<p className="font-inter">{formatDate}</p>
		</div>
	);
};
