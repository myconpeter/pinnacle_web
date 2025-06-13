import { motion } from 'framer-motion';
import Demo from '../assets/Demo.jpg';
import DemoTwo from '../assets/DemoTwo.jpg';
import Mobile from '../assets/Mobile.jpg';
import useMediaQuery from '../hooks/useMediaQuery';
import { FaArrowRight } from 'react-icons/fa6';

const Headers = () => {
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

	const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};


	const buttonVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.6,
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
			},
		},
	};

	const fadeInOnScroll = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
			},
		},
	};

	return (
		<>
			<div
				id='home'
				className='relative md:px-20 md:-mt-10 mt-12 items-center'>
				{isAboveMediumScreen ? (
					<motion.div
						className='relative'
						variants={imageVariant}
						initial='hidden'
						animate='visible'>
						<img
							src={Demo}
							alt='Demo'
							className='md:rounded-3xl'
						/>

						<motion.div
							className='mr-10 absolute bottom-8 right-40'
							variants={buttonVariant}
							initial='hidden'
							animate='visible'>
							<button className='flex items-center gap-1 rounded-4xl bg-white px-4 py-2 text-xl hover:bg-light-gray'>
								<p className='flex text-xl font-medium'>Join&nbsp;our student</p>
								<FaArrowRight className='bg-light-tomato p-1 text-white rounded-full text-2xl' />
							</button>
						</motion.div>
					</motion.div>
				) : (
					<motion.div
						className='relative'
						variants={imageVariant}
						initial='hidden'
						animate='visible'>
						<img
							src={Mobile}
							alt='Demo'
							className='md:rounded-3xl'
						/>
						<motion.div
							className='absolute bottom-7 right-3'
							variants={buttonVariant}
							initial='hidden'
							animate='visible'>
							<button className='flex items-center gap-1 rounded-4xl bg-white pl-2 pr-1 py-0.5 text-xl hover:bg-light-gray text-dark-navy'>
								<p className='flex text-sm font-light'>Join&nbsp;Us</p>
								<FaArrowRight className='bg-light-tomato p-1 text-white rounded-full text-2xl' />
							</button>
						</motion.div>
					</motion.div>
				)}
			</div>

			<motion.div
				className='relative w-full md:px-20 md:mt-5 items-center'
				variants={fadeInOnScroll}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				<img
					src={DemoTwo}
					alt='DemoTwo'
				/>
			</motion.div>
		</>
	);
};

export default Headers;
