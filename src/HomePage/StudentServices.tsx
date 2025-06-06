import { FaCcVisa } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaFilePowerpoint } from 'react-icons/fa';
import { FaPersonShelter } from 'react-icons/fa6';
import { MdEditDocument } from 'react-icons/md';
import { PiAirplaneTiltFill } from 'react-icons/pi';

const StudentServices = () => {
	const allServices = [
		{
			title: 'Test Preparation',
			description: 'Intensive coaching for TOEFL, SAT, and IELTS.',
			image: FaFileSignature,
		},
		{
			title: 'University Admissions',
			description:
				'Assistance in selecting and applying to university that fits your profile',
			image: FaGraduationCap,
		},
		{
			title: 'Scholarship Application Assistance',
			description: 'Guidance to secure financial aid opportunities through SAT',
			image: FaFilePowerpoint,
		},
		{
			title: 'Visa Processing',
			description: 'Step-by-step support through the visa application process',
			image: FaCcVisa,
		},
		{
			title: 'Counseling Services ',
			description:
				'Free one-on-one sessions to align your goals with the right academic path',
			image: FaPersonShelter,
		},
		{
			title: 'Document Preparation ',
			description: 'Guidance and editing of document to ensure maximum operations',
			image: MdEditDocument,
		},
		{
			title: 'Pre-departure Briefing',
			description:
				'We are committed to providing the resources and support you need to succeed',
			image: PiAirplaneTiltFill,
		},
	];
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center'>
			<p className=' text-2xl font-bold md:text-5xl'>Our Services For Students</p>

			{allServices.map(({ title, description, image: Icon }) => (
				<div className='mt-10 md:mt-28 flex flex-col  md:px-36'>
					<div className='flex flex-col items-center justify-center shadow-lg shadow-gray-400 rounded-3xl md:rounded-4xl p-2 md:p-20'>
						<p className='font-bold text-xl md:text-4xl text-center'>{title}</p>
						<p className='mt-5 md:mt-10 md:text-2xl text'> {description}</p>
						<div className='shadow-xl shadow-gray-300 rounded-full px-2 py-1 md:py-5 md:px-5 mt-5 md:mt-10'>
							<Icon className='w-10 md:w-20 text-4xl' />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default StudentServices;
