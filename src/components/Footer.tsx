import { Link } from 'react-router';
import PinnacleLogo from '../assets/PinnacleLogo.png';

const Footer = () => {
	return (
		<>
			<div className='relative w-full px-6 md:px-6 mt-28 md:mt-32 items-center bg-light-pink pb-10'>
				<div className='flex items-center  gap-2 pt-28 md:pt-56 md:gap-5'>
					<img
						src={PinnacleLogo}
						alt='pinnacleLogo'
						className='w-9 md:w-14'
					/>

					<p className='text-[px] sm:text-xl md:text-xl font-semibold'>
						PINNACLE EDUCATION TRAINING LTD
					</p>
				</div>
				<div className='mt-4 flex flex-col gap-3'>
					<Link
						to='/about'
						className='text-[px] sm:text-xl md:text-xl lg:text-lg'>
						About Us
					</Link>
					<Link
						to='/'
						className='text-[px] sm:text-xl md:text-xl lg:text-lg'>
						International Exams
					</Link>
					<Link
						to='/'
						className='text-[px] sm:text-xl md:text-xs lg:text-lg'>
						How we work
					</Link>
					<Link
						to='/terms'
						className='text-[px] sm:text-xl md:text-xs lg:text-lg'>
						Privacy Policy
					</Link>
					<Link
						to='/terms'
						className='text-[px] sm:text-xl md:text-xs lg:text-lg'>
						Terms & Conditions
					</Link>
				</div>
			</div>

			<div className='bg-dark-navy h-10 flex items-center justify-center '>
				<p className='text-white  text-center  font-light text-[10px] md:text-xs '>
					&copy; {new Date().getFullYear()} All copyright reserved
				</p>
			</div>
		</>
	);
};

export default Footer;
