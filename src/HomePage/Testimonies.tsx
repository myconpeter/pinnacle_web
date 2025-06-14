import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonies = [
	{
		initial: 'U',
		name: 'Udofa Michael',
		role: 'Student',
		text: 'PETL is the best for scholarship applications, and suitable for your international exams',
		stars: 5,
	},
	{
		initial: 'J',
		name: 'Jane Doe',
		role: 'Graduate',
		text: 'Thanks to PETL, I got a full scholarship in Canada!',
		stars: 5,
	},
	{
		initial: 'T',
		name: 'Tunde Olayinka',
		role: 'IELTS Candidate',
		text: 'My IELTS score improved drastically after joining PETL.',
		stars: 4,
	},
	{
		initial: 'A',
		name: 'Aisha Bello',
		role: 'Intern',
		text: 'The training was eye-opening and well-organized. Highly recommended.',
		stars: 5,
	},
];

const Testimonies = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % testimonies.length);
		}, 4000); // Change every 4s

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='w-full px-4 py-16 bg-white'>
			<h2 className='text-center text-3xl md:text-5xl font-bold mb-2'>TESTIMONIES</h2>
			<p className='text-center text-sm md:text-lg mb-10'>
				Some testimonies of students who have experienced our services
			</p>

			<div className='relative w-full max-w-xl mx-auto h-60 md:h-56'>
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-md px-6 py-4 text-center'
					>
						<div className='flex items-center gap-3 mb-2'>
							<div className='bg-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center'>
								{testimonies[index].initial}
							</div>
							<div className='text-left'>
								<p className='font-semibold'>{testimonies[index].name}</p>
								<p className='text-xs text-gray-500'>{testimonies[index].role}</p>
							</div>
						</div>
						<p className='text-sm text-gray-700 mb-3'>{testimonies[index].text}</p>
						<div className='flex justify-center'>
							{[...Array(testimonies[index].stars)].map((_, i) => (
								<FaStar key={i} className='text-yellow-500 text-sm' />
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Testimonies;
