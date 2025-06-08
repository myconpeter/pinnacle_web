// import { FaCcVisa } from 'react-icons/fa';
// import { FaFileSignature } from 'react-icons/fa';
// import { FaGraduationCap } from 'react-icons/fa6';
// import { FaFilePowerpoint } from 'react-icons/fa';
// import { FaPersonShelter } from 'react-icons/fa6';
// import { MdEditDocument } from 'react-icons/md';
// import { PiAirplaneTiltFill } from 'react-icons/pi';
import ServiceTest from '../assets/ServiceTest.svg';
import ServiceAss from '../assets/ServiceAss.svg';
import ServiceDoc from '../assets/ServiceDoc.svg';
import ServiceFly from '../assets/ServiceFly.svg';
import ServiceUni from '../assets/ServiceUni.svg';
import ServiceCoun from '../assets/ServiceCoun.svg';
import ServiceVisa from '../assets/ServiceVisa.svg';

const StudentServices = () => {
	const allServices = [
		{
			title: 'Test Preparation',
			description: 'Intensive coaching for TOEFL, SAT, and IELTS.',
			image: ServiceTest,
		},
		{
			title: 'University Admissions',
			description:
				'Assistance in selecting and applying to university that fits your profile',
			image: ServiceUni,
		},
		{
			title: 'Scholarship Application Assistance',
			description: 'Guidance to secure financial aid opportunities through SAT',
			image: ServiceAss,
		},
		{
			title: 'Visa Processing',
			description: 'Step-by-step support through the visa application process',
			image: ServiceVisa,
		},
		{
			title: 'Counseling Services ',
			description:
				'Free one-on-one sessions to align your goals with the right academic path',
			image: ServiceCoun,
		},
		{
			title: 'Document Preparation ',
			description: 'Guidance and editing of document to ensure maximum operations',
			image: ServiceDoc,
		},
		{
			title: 'Pre-departure Briefing',
			description:
				'We are committed to providing the resources and support you need to succeed',
			image: ServiceFly,
		},
	];
	return (
		<div className='relative w-full px-3 md:px-6 mt-10 md:mt-24 items-center bg-gray-50 py-10'>
			<p className=' text-2xl font-semibold md:text-5xl text-center md:mt-10'>Our Services For Students</p>

			{allServices.map(({ title, description, image }) => (
				<div className='mt-10 md:mt-28 flex flex-col px-6  md:px-36 '>
					<div className='flex flex-col items-center justify-center rounded-3xl md:rounded-4xl p-2 md:p-20 bg-white py-7'>
						<p className='font-semibold text-lg md:text-4xl text-center'>{title}</p>
						<p className='mt-3 md:mt-10 text-sm md:text-2xl text-center'>
							{' '}
							{description}
						</p>
						<div className=' rounded-full shadow-lg shadow-gray-100 px-2 py-1 md:py-5 md:px-5 mt-2 md:mt-10'>
							{/* <Icon className='w-10 md:w-20 text-lg md:text-4xl' /> */}
							<img
								src={image}
								alt='image'
								className='w-14'
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default StudentServices;
