import { FaArrowRight } from 'react-icons/fa6';
import useMediaQuery from '../hooks/useMediaQuery';
import { MdMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import PinnacleLogo from '../assets/PinnacleLogo.png';
import { Link } from 'react-router';

// type Props = {}

const NavBar = () => {
	const flexBetween = 'flex items-center justify-between';
	const navbarBackground = 'bg-white drop-shadow';
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	return (
		<nav
			className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full px-3 md:px-6 mb-10`}>
			<div className={`${flexBetween} mx-auto w-full`}>
				<div
					className={`flex items-center justify-between  w-full md:gap-28 md:shadow-lg md:shadow-gray-400 rounded-4xl px-2 py-2`}>
					<Link
						to='/'
						className='flex items-center justify-center gap-2 md:gap-5 md:ml-10'>
						<img
							src={PinnacleLogo}
							alt='pinnacleLogo'
							className='w-9 md:w-14'
						/>

						<p className='text-[12px] sm:text-xl md:text-xs lg:text-lg font-semibold'>
							PINNACLE EDUCATION TRAINING LTD
						</p>
					</Link>

					{isAboveMediumScreen ? (
						<>
							<div className='flex items-center '>
								<div className={`${flexBetween} gap-5 text-sm`}>
									<Link
										to='/about'
										className='border-r border-light-tomato pr-1'>
										<p className='text-xl hover:bg-light-tomato/15 p-2 rounded-2xl border-light-tomato'>
											About
										</p>
									</Link>
									<Link
										to='/'
										className='border-r border-light-tomato pr-1'>
										<p className='text-xl hover:bg-light-tomato/15 p-2 rounded-2xl border-light-tomato'>
											Exams
										</p>
									</Link>
									<Link
										to='/'
										className='border-r border-light-tomato pr-1'>
										<p className='text-xl hover:bg-light-tomato/15 p-2 rounded-2xl border-light-tomato'>
											Countries
										</p>
									</Link>
									<Link
										to='/'
										className='border-r border-light-tomato pr-1'>
										<p className='text-xl hover:bg-light-tomato/15 p-2 rounded-2xl border-light-tomato'>
											Contact
										</p>
									</Link>
								</div>
							</div>

							<div className='mr-10'>
								<button className='flex items-center gap-1 rounded-full bg-dark-navy px-8 py-3 text-xl hover:bg-light-gray text-white shadow-lg shadow-gray-300'>
									<p className='flex'>Reach&nbsp;Us</p>

									<FaArrowRight className='bg-light-tomato p-1 rounded-full text-2xl' />
								</button>
							</div>
						</>
					) : (
						<div>
							<button
								className='rounded-full'
								onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<MdMenu className='h-6 w-6 text-black text-9xl z-50' />
							</button>
						</div>
					)}
				</div>
			</div>

			{!isAboveMediumScreen && isMenuToggled && (
				<div className='fixed right-0 bottom-0 h-full w-[300px]'>
					{/* close icon */}

					<div className='ml-20 flex flex-col gap-10 text-2xl bg-dark-navy h-screen items-center pt-20 text-white'>
						<div className='fixed top-4 right-4 justify-end '>
							<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<IoClose className='h-6 w-6 text-white font-bold' />
							</button>
						</div>
						<Link to='/about'>
							<p className='text-xl'>About</p>
						</Link>
						<Link to='/'>
							<p className='text-xl'>Exams</p>
						</Link>
						<Link to='/'>
							<p className='text-xl'>Countries</p>
						</Link>
						<Link to='/'>
							<p className='text-xl'>Contact</p>
						</Link>

						

						<div className=''>
							<button className='flex items-center gap-1 rounded-full bg-pureBlue px-8 py-3 text-xl hover:bg-light-gray text-white'>
								<p className='flex'>Reach&nbsp;Us</p>

								<FaArrowRight className='bg-light-tomato p-1 rounded-full text-2xl' />
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
