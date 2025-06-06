import { Link } from 'react-router';
import Sat from '../assets/SAT.png';
import Itles from '../assets/IELTS.png';
import Toef from '../assets/TOEF.png';

const InterExams = () => {
	const allInt = [
		{
			title: 'SCHOLASTIC APTITUDE TEST (SAT)',
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
		<div id='exams' className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center mb-10'>
			<p className='text-center text-2xl font-bold md:text-6xl'>INTERNATIONAL EXAMS</p>
			<p className='mt-5 text-xs text-center'>
				Be a part of our students who excel in the following international exams
			</p>

			<div className='mt-10 flex gap-4 md:gap-10 overflow-x-auto'>
				{allInt.map(({ title, desc, link, image }) => (
					<div className='flex-shrink-0 flex flex-col items-center justify-center w-60 h-80 md:w-[500px] md:h-[470px] bg-white border border-light-tomato rounded-4xl '>
						<p className='text-center  font-bold md:font-light md:text-3xl md:mb-10 mt-2'>
							{title}
						</p>

						<p className='text-xs/loose mx-2 mt-4 text-center md:text-xl/loose'>
							{desc}
						</p>

						<Link
							to={link}
							className='text-light-tomato italic mt-4'>
							{' '}
							See more ..
						</Link>
						<img
							src={image}
							alt='sat'
							className='mt-4'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default InterExams;
