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

const AboutWay = () => {
    return (
        <div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center bg-lighter-blue/40 md:rounded-3xl pb-10'>
            <p className='pt-10 text-xl md:text-5xl font-bold text-black'>
               WHY CHOOSE US?
            </p>
            <p className='pt-2 text-sm md:text-3xl text-black'>
              Pinnacle Education and Training Limited
            </p>
            <div className='mt-5 md:mt-16'>

                {allReasons.map(({text})=>(
                    <div className='flex items-center gap-2 mt-3 md:mt-12 md:gap-4'>
                    <FaCheckCircle className='text-black md:text-4xl' />
                    <p className='text-black text-sm md:text-2xl'>
                        {text}
                    </p>
                </div>
                ))}
                
            </div>
        </div>
    );
};

export default AboutWay;
