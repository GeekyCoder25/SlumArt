import Image from 'next/image';
import React from 'react';

const Featured = () => {
	const featured = [
		{
			id: 1,
			image: '/images/featured1.png',
			artName: 'Art Name',
			artist: 'Artist Name',
		},
		{
			id: 2,
			image: '/images/featured2.png',
			artName: 'Art Name',
			artist: 'Artist Name',
		},
		{
			id: 3,
			image: '/images/featured3.png',
			artName: 'Art Name',
			artist: 'Artist Name',
		},
		{
			id: 4,
			image: '/images/featured4.png',
			artName: 'Art Name',
			artist: 'Artist Name',
		},
		{
			id: 5,
			image: '/images/featured5.png',
			artName: 'Art Name',
			artist: 'Artist Name',
		},
		{
			id: 6,
			image: '/images/featured6.png',
			artName: 'Art Name',
			artist: 'Artist Name',
		},
	];
	return (
		<section>
			<h3 className="text-gray-900 font-bold font-bai text-4xl text-center w-full">
				Featured Collections
			</h3>
			<section className="flex flex-wrap justify-center gap-x-14 gap-y-6 mt-10 px-5">
				{featured.map(index => (
					<FeaturedImage key={index.id} index={index} />
				))}
			</section>
		</section>
	);
};

export default Featured;

const FeaturedImage = ({index}) => {
	const {image, artist, artName} = index;

	return (
		<div>
			<Image src={image} width={408} height={427} alt={artName} />
			<h4 className="mt-3 font-semibold">{artName}</h4>
			<p>{artist}</p>
		</div>
	);
};
