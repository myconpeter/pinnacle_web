

import ServiceTest from '../assets/ServiceTest.svg';
import ServiceAss from '../assets/ServiceAss.svg';
import ServiceDoc from '../assets/ServiceDoc.svg';
import ServiceFly from '../assets/ServiceFly.svg';
import ServiceUni from '../assets/ServiceUni.svg';
import ServiceCoun from '../assets/ServiceCoun.svg';
import ServiceVisa from '../assets/ServiceVisa.svg';

const allServices = [
	{
		title: 'Test Preparation',
		desc: 'Intensive coaching for TOEFL, SAT, and IELTS.',
		icon: ServiceTest,
	},
	{
		title: 'University Admissions',
		desc: 'Intensive coaching for TOEFL, SAT, and IELTS.',
		icon: ServiceUni,
	},
	{
		title: 'Scholarship Preparation',
		desc: 'Assistance in selecting and applying to universities that fit your profile',
		icon: ServiceAss,
	},
	{
		title: 'Visa Processing',
		desc: 'Step by step support through the visa application process',
		icon: ServiceVisa,
	},
	{
		title: 'Counseling Service',
		desc: 'Free one on one sessions to align your goals with the right academic paths',
		icon: ServiceCoun,
	},
	{
		title: 'Document Preparation',
		desc: 'Guidance and editing of documents to ensure maximum operations',
		icon: ServiceDoc,
	},
	{
		title: 'Pre-departure Briefing',
		desc: 'We are committed to providing the resources and support yu need to succeed',
		icon: ServiceFly,
	},
];

const AboutServices = () => {
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center'>
			<p className='text-center text-2xl font-bold md:text-6xl'>OUR SERVICES</p>
			<div className='md:mx-10 mt-5'>
				{allServices.map(({ title, desc, icon }, index) => (
					<div
						key={index}
						className='flex  mt-10'>
						<img src={icon} className='text-7xl w-14 md:w-20 rounded-full' />
						<div className='ml-4'>
							<p className='md:text-2xl  font-medium'>{title}</p>
							<p className='text-sm mt-1 font-light'>{desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutServices;
