import Demo from '../assets/Demo.jpg';
import DemoTwo from '../assets/DemoTwo.jpg';
import Mobile from '../assets/Mobile.jpg';
import useMediaQuery from '../hooks/useMediaQuery';

// type Props = {}

const Headers = () => {
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

	return (
		<>
			<div
				id='home'
				className={` relative md:px-20 md:-mt-10 mt-12 items-center`}>
				{isAboveMediumScreen ? (
					<img
						src={Demo}
						alt='Demo'
						className='md:rounded-3xl '
					/>
				) : (
					<img
						src={Mobile}
						alt='Demo'
						className='md:rounded-3xl '
					/>
				)}
			</div>
			<div className={` relative w-full md:px-20  md:mt-5 mt-2 items-center`}>
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
