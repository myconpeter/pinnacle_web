import Demo from '../assets/Demo.jpg';
import DemoTwo from '../assets/DemoTwo.jpg';
import Mobile from '../assets/Mobile.jpg';
import useMediaQuery from '../hooks/useMediaQuery';
import { FaArrowRight } from 'react-icons/fa6';

// type Props = {}

const Headers = () => {
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

	return (
		<>
			<div
				id='home'
				className={` relative md:px-20 md:-mt-10 mt-12 items-center`}>
				{isAboveMediumScreen ? (
					<div className='relative'>
						<img
							src={Demo}
							alt='Demo'
							className='md:rounded-3xl '
						/>
						<div className='mr-10 absolute bottom-8 right-40'>
							<button className='flex items-center gap-1 rounded-4xl bg-white px-4 py-2 text-xl hover:bg-light-gray '>
								<p className='flex text-xl  font-medium'>Join&nbsp;our student</p>

								<FaArrowRight className='bg-light-tomato p-1 text-white rounded-full text-2xl' />
							</button>
						</div>
					</div>
				) : (
					<div className='relative'>
						<img
							src={Mobile}
							alt='Demo'
							className='md:rounded-3xl '
						/>
						<div className=' absolute bottom-7 right-3'>
							<button className='flex items-center gap-1 rounded-4xl bg-white px-0.5  py-0.5 text-xl hover:bg-light-gray text-dark-navy'>
								<p className='flex text-sm  font-medium'>Join&nbsp;Us</p>

								<FaArrowRight className='bg-light-tomato p-1 text-white rounded-full text-2xl' />
							</button>
						</div>
					</div>
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
