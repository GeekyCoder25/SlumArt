import Image from 'next/image';
import Carousel from './components/Carousel';
import Featured from './components/Featured';

export default function Home() {
	return (
		<main className="flex flex-col gap-16">
			<Carousel />
			<Featured />
			<section className="flex bg-gray-100 max-w-screen-xl mt-10 m-auto ">
				<div className="flex-1">
					<Image
						src={'/images/explore.png'}
						width={720}
						height={627}
						className="max-w-full"
						alt="explore"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-10 justify-center p-10">
					<h4 className="text-2xl font-bold font-bai">
						Explore Our Art Gallery Services
					</h4>
					<p className="font-inter text-lg font-medium">
						Transform your surroundings with the allure of fine art through our
						art rental services. No matter if you&apos;re a corporate business
						or an interior designer, renting art will allow you to refresh your
						space with new and dynamic beauty. Let&apos;s chat about the
						flexibility and ease of art rental today.
					</p>
					<span>
						<button className="border-gray-700 border-2 py-2 px-4 rounded-3xl font-semibold">
							Explore now
						</button>
					</span>
				</div>
			</section>
			<section className="flex bg-gray-100 max-w-screen-xl mt-10 m-auto ">
				<div className="flex-1 flex flex-col gap-10 justify-center p-10">
					<h4 className="text-2xl font-bold font-bai">Our Story</h4>
					<p className="font-inter text-lg font-medium">
						Transform your surroundings with the allure of fine art through our
						art rental services. No matter if you&apos;re a corporate business
						or an interior designer, renting art will allow you to refresh your
						space with new and dynamic beauty. Let&apos;s chat about the
						flexibility and ease of art rental today.
					</p>
					<span>
						<button className="border-gray-700 border-2 py-2 px-4 rounded-3xl font-semibold">
							Learn more
						</button>
					</span>
				</div>
				<div className="flex-1">
					<Image
						src={'/images/team.png'}
						width={720}
						height={627}
						className="max-w-full"
						alt="explore"
					/>
				</div>
			</section>
		</main>
	);
}
