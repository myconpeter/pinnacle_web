import { Link } from 'react-router';
import Sat from '../assets/SAT.png';
import Itles from '../assets/IELTS.png';
import Toef from '../assets/TOEF.png';
import { motion } from 'framer-motion';

const InterExams = () => {
	const allInt = [
		{
			title: `SCHOLASTIC APTITUDE TEST (SAT)`,
			desc: 'The Scholastic Aptitude Test (SAT) is a college entrance exam that measures a student readiness for higher education. The exam has been developed to evaluate the written, verbal and mathematical',
			link: '/sat-exams',
			image: Sat,
		},
		{
			title: 'TEST OF ENGLISH AS A FOREIGN LANGUAGE (TOEFL)',
			desc: 'The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language proficiency of non-native speakers. The TOEFL is conducted by',
			link: '/toefl-exams',
			image: Toef,
		},
		{
			title: 'INTERNATIONAL ENGLISH LANGUAGE TESTING SYSTEM (IELTS)',
			desc: 'The International English Language Testing System (IELTS) is a widely accepted English language proficiency test for students, professionals, and immigrants.',
			link: '/ielts-exams',
			image: Itles,
		},
	];

	return (
		<div
			id='exams'
			className='relative w-full px-3 md:px-10 mt-16 md:mt-24 items-center mb-10'>
			<p className='text-center text-2xl font-bold md:text-6xl'>INTERNATIONAL EXAMS</p>
			<p className='mt-5 text-xs text-center font-light'>
				Be a part of our students who excel in the following international exams
			</p>

			{/* Carousel */}
			<div className='mt-10 flex gap-4 md:gap-10 overflow-x-auto scroll-smooth pb-2'>
				{allInt.map(({ title, desc, link, image }, i) => (
					<motion.div
						key={title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: i * 0.2,
							duration: 0.7,
							ease: [0.25, 0.1, 0.25, 1],
						}}
						viewport={{ once: true }}
						className='flex-shrink-0 flex flex-col items-center justify-center w-72 h-80 md:w-[500px] md:h-[470px] bg-white border border-light-tomato rounded-4xl shadow-md hover:shadow-xl transition-shadow duration-300'>
						<p className='text-center font-medium md:text-2xl md:mb-6 mt-4 px-3'>
							{title}
						</p>

						<p className='text-[10px]/loose mx-4 mt-2 text-center font-light md:text-base/loose'>
							{desc}
						</p>

						<Link
							to={link}
							className='text-light-tomato italic mt-4 font-light'>
							See more ..
						</Link>
						<img
							src={image}
							alt={title}
							className='mt-4 md:w-20 w-14'
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default InterExams;
