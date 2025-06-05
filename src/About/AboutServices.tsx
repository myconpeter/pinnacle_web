import { FaCcVisa } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaFilePowerpoint } from 'react-icons/fa';
import { FaPersonShelter } from 'react-icons/fa6';
import { MdEditDocument } from 'react-icons/md';
import { PiAirplaneTiltFill } from 'react-icons/pi';

const allServices = [
	{
		title: 'Test Preparation',
		desc: 'Intensive coaching for TOEFL, SAT, and IELTS.',
		icon: FaFileSignature,
	},
	{
		title: 'University Admissions',
		desc: 'Intensive coaching for TOEFL, SAT, and IELTS.',
		icon: FaGraduationCap,
	},
	{
		title: 'Scholarship Preparation',
		desc: 'Assistance in selecting and applying to universities that fit your profile',
		icon: FaFilePowerpoint,
	},
	{
		title: 'Visa Processing',
		desc: 'Step by step support through the visa application process',
		icon: FaCcVisa,
	},
	{
		title: 'Counseling Service',
		desc: 'Free one on one sessions to align your goals with the right academic paths',
		icon: FaPersonShelter,
	},
	{
		title: 'Document Preparation',
		desc: 'Guidance and editing of documents to ensure maximum operations',
		icon: MdEditDocument,
	},
	{
		title: 'Pre-departure Briefing',
		desc: 'We are committed to providing the resources and support yu need to succeed',
		icon: PiAirplaneTiltFill,
	},
];

const AboutServices = () => {
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center'>
			<p className='text-center text-2xl font-bold md:text-6xl'>OUR SERVICES</p>
			<div className='md:mx-10 mt-5'>
				{allServices.map(({ title, desc, icon: Icon }, index) => (
					<div
						key={index}
						className='flex  mt-10'>
						<Icon className='text-7xl p-3 bg-gray-200 rounded-full shadow-2xl shadow-gray-500' />
						<div className='ml-4'>
							<p className='text-2xl font-bold'>{title}</p>
							<p className='text-sm mt-1'>{desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutServices;
