'use client';
import {useEffect, useState} from 'react';

const Carousel = () => {
	const [carouselIndex, setCarouselIndex] = useState(1);

	const carouselImages = [
		{id: 1, image: '/images/carousel.png'},
		{id: 2, image: '/images/carousel2.png'},
		{id: 3, image: 'images/blog2.png'},
		{id: 4, image: '/images/blog.png'},
	];

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
		<section className="relative h-screen">
			<i
				className="fas fa-chevron-left absolute top-1/2 z-10 left-10 text-gray-50 text-4xl cursor-pointer"
				onClick={() =>
					setCarouselIndex(prev =>
						prev === carouselImages[0].id
							? carouselImages[carouselImages.length - 1].id
							: prev - 1
					)
				}
			></i>
			<i
				className="fas fa-chevron-right absolute top-1/2 z-10 right-10 text-gray-50 text-4xl cursor-pointer"
				onClick={() =>
					setCarouselIndex(prev =>
						prev < carouselImages.length ? prev + 1 : carouselImages[0].id
					)
				}
			></i>
			<h3 className="absolute bottom-52 text-gray-50 font-bold font-bai text-7xl text-center w-full">
				New This Week
			</h3>
			<span className="absolute bottom-40 text-gray-50 font-bold font-bai text-2xl text-center w-full">
				Discover Art You Love
			</span>
			{carouselImages.map(index => (
				<img
					src={index.image}
					key={index.id}
					className={`absolute h-full w-full object-cover ${
						carouselIndex === index.id ? '-z-10' : 'hidden -z-20'
					}`}
				/>
			))}
			<div className="absolute bottom-20 w-full flex justify-center gap-5">
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
	);
};

export default Carousel;
