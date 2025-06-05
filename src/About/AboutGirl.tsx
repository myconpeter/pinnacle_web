import Aboutg from '../assets/AboutGirl.png';

const AboutGirl = () => {
	return (
		<div className={` relative w-full px-3 md:px-24  mt-16 md:mt-24 items-center `}>
			<img
				src={Aboutg}
				alt='Demo'
				className='rounded-3xl md:ml-5'
			/>
		</div>
	);
};

export default AboutGirl;
