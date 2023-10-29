import Image from 'next/image';

/* eslint-disable @next/next/no-img-element */
const About = () => {
	return (
		<div className="flex mt flex-col gap-16">
			<img
				src={'/images/team.png'}
				className="h-screen w-screen object-cover"
				alt="team"
			/>
			<section className="flex max-w-screen-xl mt-10 m-auto items-center flex-col md:flex-row">
				<div className="flex-1">
					<Image
						src={'/images/story.png'}
						width={720}
						height={627}
						className="max-w-full"
						alt="story"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-10 justify-center p-4 md:p-10">
					<h4 className="text-2xl font-bold font-bai">Our Story</h4>
					<p className="font-inter text-lg font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum recusandae nam quaerat. Iusto ratione quidem
						fuga tempora laborum, veritatis consequatur quibusdam sequi veniam
						ex natus quaerat, officiis consectetur totam placeat. Fugit culpa at
						aperiam ratione officia molestias adipisci nesciunt, sapiente ea
						natus, voluptate iste minus asperiores? Incidunt, illo. Voluptatum,
						repellendus dolores facilis aliquid numquam doloremque debitis
						laudantium tenetur iure similique! Quisquam aliquam neque atque,
						ratione magnam voluptatibus dolor perferendis sint provident quidem
						porro ullam fugit cum! Totam eius, asperiores non repellendus eaque
						laborum illo tempore soluta voluptates at beatae enim est. Ex,
						corporis maxime. Qui error ipsum veniam blanditiis.
					</p>
				</div>
			</section>
			<section className="flex gap-5 max-w-screen-xl m-auto flex-col md:flex-row p-4">
				<div>
					<h4 className="text-2xl font-bold font-bai mb-5">What We Do</h4>
					<p className="font-inter text-lg font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum recusandae nam quaerat. Iusto ratione quidem
						fuga tempora laborum, veritatis consequatur quibusdam sequi veniam
						ex natus quaerat, officiis consectetur totam placeat. Fugit culpa at
						aperiam ratione officia molestias adipisci nesciunt, sapiente ea
						natus, voluptate iste minus asperiores?
					</p>
				</div>
				<div>
					<h4 className="text-2xl font-bold font-bai mb-5">Why We Do It</h4>
					<p className="font-inter text-lg font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum recusandae nam quaerat. Iusto ratione quidem
						fuga tempora laborum, veritatis consequatur quibusdam sequi veniam
						ex natus quaerat, officiis consectetur totam placeat. Fugit culpa at
						aperiam ratione officia molestias adipisci nesciunt, sapiente ea
						natus, voluptate iste minus asperiores?
					</p>
				</div>
				<div>
					<h4 className="text-2xl font-bold font-bai mb-5">How We Do It</h4>
					<p className="font-inter text-lg font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum recusandae nam quaerat. Iusto ratione quidem
						fuga tempora laborum, veritatis consequatur quibusdam sequi veniam
						ex natus quaerat, officiis consectetur totam placeat. Fugit culpa at
						aperiam ratione officia molestias adipisci nesciunt, sapiente ea
						natus, voluptate iste minus asperiores?
					</p>
				</div>
			</section>
			<section className="flex max-w-screen-xl mt-10 m-auto items-center flex-col md:flex-row">
				<div className="flex-1 flex flex-col gap-10 justify-center p-4 md:p-10">
					<h4 className="text-2xl font-bold font-bai">Become a Partner</h4>
					<p className="font-inter text-lg font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum recusandae nam quaerat. Iusto ratione quidem
						fuga tempora laborum, veritatis consequatur quibusdam sequi veniam
						ex natus quaerat, officiis consectetur totam placeat. Fugit culpa at
						aperiam ratione officia molestias adipisci nesciunt, sapiente ea
						natus, voluptate iste minus asperiores? Incidunt, illo. Voluptatum,
						repellendus dolores facilis aliquid numquam doloremque debitis
						laudantium tenetur iure similique! Quisquam aliquam neque atque,
						ratione magnam voluptatibus dolor perferendis sint provident quidem
						porro ullam fugit cum! Totam eius, asperiores non repellendus eaque
						laborum illo tempore soluta voluptates at beatae enim est. Ex,
						corporis maxime. Qui error ipsum veniam blanditiis.
					</p>
				</div>
				<div className="flex-1">
					<Image
						src={'/images/partner.png'}
						width={720}
						height={627}
						className="max-w-full"
						alt="story"
					/>
				</div>
			</section>
			<section className="flex max-w-screen-xl mt-10 m-auto items-center flex-col md:flex-row">
				<div className="flex-1">
					<Image
						src={'/images/donations.png'}
						width={720}
						height={627}
						className="max-w-full"
						alt="story"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-10 justify-center p-4 md:p-10">
					<h4 className="text-2xl font-bold font-bai">Donations</h4>
					<p className="font-inter text-lg font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum recusandae nam quaerat. Iusto ratione quidem
						fuga tempora laborum, veritatis consequatur quibusdam sequi veniam
						ex natus quaerat, officiis consectetur totam placeat. Fugit culpa at
						aperiam ratione officia molestias adipisci nesciunt, sapiente ea
						natus, voluptate iste minus asperiores? Incidunt, illo. Voluptatum,
						repellendus dolores facilis aliquid numquam doloremque debitis
						laudantium tenetur iure similique! Quisquam aliquam neque atque,
						ratione magnam voluptatibus dolor perferendis sint provident quidem
						porro ullam fugit cum! Totam eius, asperiores non repellendus eaque
						laborum illo tempore soluta voluptates at beatae enim est. Ex,
						corporis maxime. Qui error ipsum veniam blanditiis.
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
