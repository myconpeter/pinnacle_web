import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const allReasons = [
	{ text: 'Experienced Tutors with a proven track record.' },
	{ text: 'Personalized learning plans tailored to individual goals.' },
	{ text: 'Flexible learning option (online and in-person).' },
	{ text: 'Comprehensive study materials and resources.' },
	{ text: 'Affordable registration and tuition fees.' },
	{ text: 'Free academic counselling sessions.' },
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: 0 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
		},
	},
};

const Why = () => {
	return (
		<div className='relative w-full px-3 md:px-16 mt-16 md:mt-24 items-center bg-lighter-blue/40 md:rounded-3xl pb-10'>
			<p className='pt-10 text-xl md:text-4xl font-medium text-darkBlue'>
				Why Pinnacle Education And Training Limited
			</p>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='mt-5 md:mt-16'>
				{allReasons.map(({ text }, index) => (
					<motion.div
						variants={itemVariants}
						key={index}
						className='flex items-center gap-2 mt-4 md:mt-10 md:gap-4'>
						<FaCheckCircle className='text-darkBlue md:text-3xl' />
						<p className='text-darkBlue text-sm md:text-2xl font-light'>{text}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Why;
