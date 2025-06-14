import { Link } from 'react-router';
import PinnacleLogo from '../assets/PinnacleLogo.png';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa6';

const Footer = () => {
	return (
		<>
			<div className='relative w-full px-6 md:px-6 mt-28 md:mt-32 items-center bg-light-pink/35 pb-10'>
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

				<div className='flex flex-col md:flex-row-reverse md:justify-center md:w-[100%]'>
					<div className='mt-4 flex flex-col gap-3 md:w-[50%] md:pl-10 md:border-l-2 md:border-black'>
						<Link
							to='/about'
							className='text-[px] sm:text-xl md:text-xl lg:text-lg font-light'>
							About Us
						</Link>
						<Link
							to='/'
							className='text-[px] sm:text-xl md:text-xl lg:text-lg font-light'>
							International Exams
						</Link>
						<Link
							to='/'
							className='text-[px] sm:text-xl md:text-xs lg:text-lg font-light'>
							How we work
						</Link>
						<Link
							to='/terms'
							className='text-[px] sm:text-xl md:text-xs lg:text-lg font-light'>
							Privacy Policy
						</Link>
						<Link
							to='/terms'
							className='text-[px] sm:text-xl md:text-xs lg:text-lg font-light'>
							Terms & Conditions
						</Link>
					</div>

					<div className='mt-10 md:w-[50%]'>
						<p className='font-light text-sm'>
							Pinnacle Education Training Ltd is a leading provider of professional
							training and development programs. Learn. Grow. Succeed.
						</p>
						<div className='mt-6'>
							<p className='font-light text-sm'>Connect with Us</p>
							<div className='flex gap-2 px-2 mt-2'>
								<a
									href='https://www.instagram.com/pinnacle_educationuyo?igsh=NDU0b3h2N3V4MHl2'
									target='_blank'
									rel='noopener noreferrer'>
										<FaInstagramSquare className="text-[#C13584] text-xl cursor-pointer" />

								</a>

								<a
									href='https://www.facebook.com/profile.php?id=61569420754100'
									target='_blank'
									rel='noopener noreferrer'>
									<FaFacebook className='text-blue-600 text-xl cursor-pointer' />
								</a>
								<a
									href='https://www.facebook.com/profile.php?id=61569420754100'
									target='_blank'
									rel='noopener noreferrer'>
									<FaFacebookMessenger className='text-blue-600 text-xl cursor-pointer' />
								</a>
							</div>
						</div>
					</div>
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
