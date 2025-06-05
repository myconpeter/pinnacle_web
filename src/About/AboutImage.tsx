import DemoTwo from '../assets/DemoTwo.png';
const AboutImage = () => {
	return (
		<>
			<div className={` relative w-full px-3 md:px-6 mt-5 items-center`}>
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
