import DemoTwo from '../assets/DemoTwo.jpg';
const AboutImage = () => {
	return (
		<>
			<div className={` relative w-full	 md:px-24 mt-5 items-center`}>
				<img
					src={DemoTwo}
					alt='DemoTwo'
					className=''
				/>
			</div>
		</>
	);
};

export default AboutImage;
