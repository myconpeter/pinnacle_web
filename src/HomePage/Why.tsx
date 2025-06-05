import { FaCheckCircle } from 'react-icons/fa';

const allReasons = [
	{
		text: 'Experienced Tutors with a proven track record.',
	},
	{
		text: 'Personalized learning plans tailored to individual goals.',
	},
	{
		text: 'Flexible learning option (online and in-person).',
	},
	{
		text: 'Comprehensive study materials and resources.',
	},
	{
		text: 'Affordable registration and tuition fees.',
	},
	{
		text: 'Free academic counselling sessions.',
	},
];

const Why = () => {
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center bg-lighter-blue rounded-3xl pb-10'>
			<p className='pt-10 text-xl md:text-7xl font-bold text-darkBlue'>
				Why Pinnacle Education And Training Limited
			</p>
			<div className='mt-5 md:mt-16'>

                {allReasons.map(({text})=>(
                    <div className='flex items-center gap-2 mt-3 md:mt-12 md:gap-4'>
					<FaCheckCircle className='text-darkBlue md:text-6xl' />
					<p className='text-darkBlue text-sm md:text-4xl'>
						{text}
					</p>
				</div>
                ))}
				
			</div>
		</div>
	);
};

export default Why;
