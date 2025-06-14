import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa6';
import Flag from 'react-world-flags';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Countries = () => {
	const allCountries = [
		{ country: 'United States Of America', code: 'US', link: '/usa' },
		{ country: 'United Kingdom', code: 'GB', link: '/united-kingdom' },
		{ country: 'Canada', code: 'CA', link: '/canada' },
		{ country: 'New Zealand', code: 'NZ', link: '/new-zealand' },
		{ country: 'Ireland', code: 'IE', link: '/ireland' },
		{ country: 'Australia', code: 'AU', link: '/australia' },
		{ country: 'Germany', code: 'DE', link: '/germany' },
		{ country: 'Poland', code: 'PL', link: '/poland' },
		{ country: 'France', code: 'FR', link: '/france' },
		{ country: 'Switzerland', code: 'CH', link: '/switzerland' },
		{ country: 'Spain', code: 'ES', link: '/spain' },
		{ country: 'Cyprus', code: 'CY', link: '/cyprus' },
	];

	const scrollRef = useRef<HTMLDivElement | null>(null);

	const handleScrollToEnd = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				left: scrollRef.current.scrollWidth,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div
			id='country'
			className='relative w-full px-3 md:px-20 mt-16 md:mt-24 items-center bg-pink-200/40 md:rounded-3xl pb-10'>
			<p className='pt-10 text-2xl md:text-6xl font-medium'>Countries</p>
			<p className='mt-5 md:text-2xl text-sm font-light'>
				Check out the basic requirements to study in the following countries
				<Link
					to='/basic-requirement'
					className='mt-10 md:text-2xl/loose font-light italic text-light-tomato'>
					{' '}
					here ..
				</Link>
			</p>

			{/* Scrollable container with ref */}
			<div
				ref={scrollRef}
				className='mt-10 flex gap-4 md:gap-10 overflow-x-auto scroll-smooth'>
				{allCountries.map(({ country, code, link }, i) => (
					<motion.div
						key={country}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: i * 0.1,
							duration: 0.5,
							ease: [0.25, 0.1, 0.25, 1],
						}}
						viewport={{ once: true }}
						className='flex-shrink-0'>
						<Link
							to={link}
							className='flex flex-col items-center justify-center w-40 h-40 md:w-96 md:h-80 bg-white rounded-2xl md:rounded-4xl'>
							<p className='text-center font-medium md:text-3xl md:mb-10'>
								{country}
							</p>
							<Flag
								code={code}
								className='h-12 w-12 md:h-20 md:w-20'
							/>
						</Link>
					</motion.div>
				))}
			</div>

			{/* This stays in view */}
			<div className='mr-10 mt-10'>
				<button
					onClick={handleScrollToEnd}
					className='flex items-center gap-1 rounded-full bg-dark-navy px-4 py-3 text-xl hover:bg-light-gray text-white shadow-lg shadow-gray-300'>
					<p className='flex text-sm'>See&nbsp;More</p>
					<FaArrowRight className='bg-light-tomato p-1 rounded-full text-xl' />
				</button>
			</div>
		</div>
	);
};

export default Countries;
