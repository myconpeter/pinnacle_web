import Demo from '../assets/Demo.jpg';
import DemoTwo from '../assets/DemoTwo.jpg';

// type Props = {}

const Headers = () => {
	return (
		<>
			<div
				id='home'
				className={` relative w-full md:px-6 md:-mt-10 mt-12  items-center`}>
				<img
					src={Demo}
					alt='Demo'
					className='md:rounded-3xl'
				/>
			</div>
			<div className={` relative w-full md:px-6  md:mt-5 mt-2 items-center`}>
				<img
					src={DemoTwo}
					alt='DemoTwo'
					className=''
				/>
			</div>
		</>
	);
};

export default Headers;
