import NavBar from '../components/NavBar';
import HandonComputer from '../assets/HandonComputer.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router';
import { IoMailOpen } from 'react-icons/io5';
import { IoCallSharp } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io';
import Footer from '../components/Footer';
import BasicFooter from '../assets/BasicFooter.jpg';
const allReasons = [
	{
		text: 'Academic Transcripts and Results from high school or university attended',
	},
	{
		text: 'Testimonials and Certificates',
	},
	{
		text: 'TOEFL score',
	},
	{
		text: 'SAT/GRE/GMAT score (Any, depending on the course/program of your interest)',
	},
	{
		text: 'Photocopy of Birth Certificate',
	},
	{
		text: 'International passport Photographs',
	},
	{
		text: 'Statement of account of sponsor and cover letter explaining the naira equivalent in dollars',
	},
	{
		text: 'Letters of recommendation',
	},
	{
		text: 'Medical Clearance (Where applicable)',
	},
	{
		text: 'Statement of Purpose/Personal Essay.',
	},
];

const BasicRequirement = () => {
	return (
		<div>
			<NavBar />

			{/* image section */}
			<div className={` relative w-full md:px-20  md:mt-16 items-center `}>
				<img
					src={HandonComputer}
					alt='Demo'
					className=' md:ml-5 md:h-96 md:w-full'
				/>
			</div>

			{/* Basic requirement */}

			<div className='relative w-full px-3 md:px-20  md:mt-24 items-center rounded-3xl pb-10'>
				<p className='pt-10 text-xl md:text-4xl font-medium text-light-tomato'>
					Basic requirements For admission processing
				</p>
				<div className='mt-5 md:mt-16'>
					{allReasons.map(({ text }) => (
						<div className='flex items-center gap-2 mt-3 md:mt-12 md:gap-4'>
							<MdKeyboardDoubleArrowRight className='text-light-tomato md:text-3xl' />
							<p className='text-black text-sm md:text-2xl font-light'>{text}</p>
						</div>
					))}
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20  md:mt-24 items-center rounded-3xl pb-10'>
				<div>
					<Link
						to='/'
						className='text-white p-4 bg-light-tomato rounded-3xl '>
						FEES APPLY
					</Link>
				</div>

				<div className='mt-5 md:mt-18'>
					<p className='md:text-2xl'>
						<a
							href='mailto:pinnacleeducationuyo@gmail.com'
							className='text-lighterBlue'>
							Reach out
						</a>{' '}
						to us for the breakdown of fees apply.
					</p>
				</div>
				<div className='mt-5 flex flex-col gap-3'>
					<div className='flex items-center gap-2'>
						<IoMailOpen className='md:text-2xl' />
						<a
							href='mailto:pinnacleeducationuyo@gmail.com'
							className='text-blue-500 underline md:text-2xl'>
							pinnacleeducationuyo@gmail.com
						</a>
					</div>
					<div className='flex items-center gap-2'>
						<IoCallSharp className='md:text-2xl' />
						<p className='text-black   md:text-2xl'>08036692720</p>
					</div>
					<div className='flex items-center gap-2 md:text-2xl'>
						<IoLogoWhatsapp className='text-green-500  md:text-2xl' />
						<p className='text-black  '>08029837117</p>
					</div>
				</div>

				<div className='flex items-center justify-center mt-5 md:mt-10'>
					<p className='text-xl md:text-3xl font-light'>Or</p>
				</div>
			</div>

			<div className='relative w-full md:px-6   items-center pb-20'>
				<div className='bg-lighterBlue p-3 flex justify-center items-center'>
					<p className='text-white font-bold text-3xl'>CONTACT US</p>
				</div>

				<div>
					<p className='mt-5 text-xl font-medium text-center'>HEAD OFFICE</p>
					<div className='flex flex-col md:flex md:flex-row  items-center justify-center md:justify-around'>
						<div className='text-center flex flex-col items-center gap-1'>
							<p className='text-white bg-lighterBlue p-2 text-xl font-bold w-fit'>
								Lagos
							</p>
							<p>5 Abdul Benson Street </p>
							<p> behind Eco bank, </p>
							<p>off Lagos road Ikorodu.</p>
							<p className='font-medium'> 08029837117</p>
							<p>
								Email:{' '}
								<a
									href='mailto:pinnacleeducationuyo@gmail.com'
									className='text-blue-500 underline'>
									pinnacleeducationuyo@gmail.com
								</a>
							</p>
						</div>

						<div className='text-center flex flex-col md:flex items-center gap-1 mt-10'>
							<p className='text-white bg-lighterBlue p-2 text-xl font-bold w-fit'>
								Akwa Ibom
							</p>
							<p>5 Udo Abasi street,</p>
							<p> off Abak road behind Pepperoni, Uyo. </p>
							<p className='font-medium'> 07088009511, 08036692720</p>
							<p>
								Email:{' '}
								<a
									href='mailto:pinnacleeducationuyo@gmail.com'
									className='text-blue-500 underline'>
									pinnacleeducationuyo@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={` absolute z-20 top w-full md:px-24  mt-8 md:-mt-18  items-center `}>
				<img
					src={BasicFooter}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default BasicRequirement;
