
import { motion } from 'framer-motion';
import Person from '../assets/Person.png';

const Picture = () => {
	return (
		<div className='relative w-full md:px-24 mt-16 md:mt-24 flex justify-center items-center'>
			<motion.img
				src={Person}
				alt='Demo'
				className='md:ml-5'
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			/>
		</div>
	);
};

export default Picture;

