import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa6';
import Flag from 'react-world-flags';

const Countries = () => {
	const allCountries = [
		{
			country: 'United States Of America',
			code: 'US',
			link: '/usa',
		},
		{
			country: 'United Kingdom',
			code: 'GB',
			link: '/united-kingdom',
		},
		{
			country: 'Canada',
			code: 'CA',
			link: '/canada',
		},
		{
			country: 'New Zealand',
			code: 'NZ',
			link: '/new-zealand',
		},
		{
			country: 'Ireland',
			code: 'IE',
			link: '/ireland',
		},
		{
			country: 'Australia',
			code: 'AU',
			link: '/australia',
		},
		{
			country: 'Germany',
			code: 'DE',
			link: '/germany',
		},
		{
			country: 'Poland',
			code: 'PL',
			link: '/poland',
		},
		{
			country: 'France',
			code: 'FR',
			link: '/',
		},
		{
			country: 'Switzerland',
			code: 'CH',
			link: '/',
		},
		{
			country: 'Spain',
			code: 'ES',
			link: '/',
		},
		{
			country: 'Cyprus',
			code: 'CY',
			link: '/',
		},
	];
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center bg-light-pink rounded-3xl pb-20'>
			<p className='pt-10 text-2xl md:text-6xl font-bold'>Countries</p>
			<p className='mt-5 md:text-2xl'>
				Check out the basic requirements to study in the following countries
				<Link
					to='/basic-requirement'
					className='mt-10  md:text-2xl/loose font-light space-y-20 italic text-light-tomato'>
					{' '}
					here ..
				</Link>
			</p>

			{/* countries here */}

			<div className='mt-10 flex gap-4 md:gap-10 overflow-x-auto'>
				{allCountries.map(({ country, code, link }) => (
					<Link
						to={link}
						className='flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 md:w-96 md:h-96 bg-white rounded-4xl '>
						<p className='text-center  font-bold md:font-light md:text-5xl md:mb-10'>
							{country}
						</p>
						<Flag
							code={code}
							className='h-12 w-12 md:h-20 md:w-20'
						/>
					</Link>
				))}
			</div>

			<div className='mr-10 mt-10'>
				<button className='flex items-center gap-1 rounded-full bg-dark-navy px-8 py-3 text-xl hover:bg-light-gray text-white shadow-lg shadow-gray-300'>
					<p className='flex'>See&nbsp;More</p>

					<FaArrowRight className='bg-light-tomato p-1 rounded-full text-2xl' />
				</button>
			</div>
		</div>
	);
};

export default Countries;
