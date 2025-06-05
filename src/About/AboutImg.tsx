import AboutBoy from '../assets/AboutBoy.png';

const AboutImg = () => {
	return (
		<div className={` relative w-full px-3 md:px-24  mt-16 md:mt-24 items-center `}>
			<img
				src={AboutBoy}
				alt='Demo'
				className='rounded-3xl md:ml-5'
			/>
		</div>
	);
};

export default AboutImg;
