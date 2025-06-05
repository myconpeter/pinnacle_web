import { Link } from 'react-router';

const WhoWeAre = () => {
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center'>
			<p className='text-center text-2xl font-bold md:text-6xl'>WHO ARE WE</p>
			<p className='mt-5 text-lg md:text-4xl/loose font-light space-y-20'>
				At Pinnacle Education and Training Limited, we specialize in preparing Nigerian
				students for international academic success. We are an Educational Consultancy
				Agency. With over 20 years of expertise, we have successfully trained, guided and
				placed students for admission into foreign universities.
			</p>

			<p className='mt-1 text-xl md:text-4xl/loose font-light space-y-20'>
				{' '}
				With a team of experienced professionals
				<Link
					to='/'
					className='mt-5 text-xl md:text-4xl/loose font-light space-y-20 italic text-light-tomato'>
					{' '}
					Learn more ..
				</Link>
			</p>
		</div>
	);
};

export default WhoWeAre;
