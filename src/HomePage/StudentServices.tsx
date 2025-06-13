import { motion } from 'framer-motion';
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

	const cardVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
			},
		},
	};

	return (
		<div className='relative w-full px-3 md:px-6 mt-10 md:mt-24 items-center bg-gray-50 py-10'>
			{/* Sticky Header */}
			<div className='sticky top-10 md:top-16 z-10 bg-gray-50 py-5'>
				<p className='text-2xl font-semibold md:text-5xl text-center'>
					Our Services For Students
				</p>
			</div>

			{/* Services List */}
			<div className='flex flex-col gap-10 mt-10'>
				{allServices.map(({ title, description, image }, index) => (
					<motion.div
						key={index}
						className='flex flex-col px-6 md:px-36'
						variants={cardVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}>
						<div className='flex flex-col items-center justify-center rounded-3xl md:rounded-4xl p-2 md:p-20 bg-white py-7 shadow-md'>
							<p className='font-semibold text-lg md:text-4xl text-center'>{title}</p>
							<p className='mt-3 md:mt-10 text-sm md:text-2xl text-center'>
								{description}
							</p>
							<div className='rounded-full shadow-lg shadow-gray-100 px-2 py-1 md:py-5 md:px-5 mt-2 md:mt-10'>
								<img
									src={image}
									alt={title}
									className='w-14'
								/>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default StudentServices;
