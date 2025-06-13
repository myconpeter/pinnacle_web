import { motion } from 'framer-motion';
import { Link } from 'react-router';

const WhoWeAre = () => {
	const slideInLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
			},
		},
	};

	return (
		<motion.div
			className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center'
			variants={slideInLeft}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.4 }}
		>
			<p className='text-center text-2xl font-bold md:text-5xl'>WHO ARE WE</p>
			<p className='mt-5 text-lg md:text-2xl/loose font-light space-y-20'>
				At Pinnacle Education and Training Limited, we specialize in preparing Nigerian
				students for international academic success. We are an Educational Consultancy
				Agency. With over 20 years of expertise, we have successfully trained, guided and
				placed students for admission into foreign universities. With a team of experienced
				professionals
				<Link
					to='/about'
					className='mt-5 text-lg md:text-2xl/loose font-light space-y-20 italic text-light-tomato'
				>
					{' '}
					Learn more ..
				</Link>
			</p>
		</motion.div>
	);
};

export default WhoWeAre;
