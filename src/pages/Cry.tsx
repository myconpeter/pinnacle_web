import CryFlag from '../assets/CryFlag.png';
import CryFooter from '../assets/CryFooter.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Cry = () => {
	return (
		<div>
			<NavBar />
			{/* page heading */}

			<div className='relative w-full px-3 md:px-20  mt-10 md:mt-0 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={CryFlag}
							alt='satbig'
						/>
					</div>
					<div className='md:w-3/6'>
						<div className=' md:mt-24'>
							<p className='text-realYellow text-xl  md:text-3xl text-center font-bold'>
								STUDY IN CYPRUS
							</p>
						</div>
						<p className='md:text-2xl/loose mt-8  text-lg/loose'>
							In Cyprus, the pace is calm, the skies are blue, and the doors to
							international-quality education are wide open. Whether you’re aiming for
							a globally respected degree, an affordable pathway to Europe, or simply
							a safe space to grow, Cyprus ticks every box.{' '}
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl mt-5 text-realYellow font-semibold mb-2'>
					Some of the Reasons Accounting for Increase in Number of International Students
					in Cyprus
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					1. Affordable Tuition + Low Cost of Living
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Cyprus offers one of the lowest tuition fees in Europe, with undergraduate
					programs starting from €3,000 to €7,000 per year, and Master’s degrees often
					below €8,000 total. Living expenses are equally friendly, with students
					comfortably spending €300–€600 monthly depending on lifestyle and location.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					2. Study in English—No Language Barrier
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					All major programs at both public and private universities are taught in
					English, making Cyprus an excellent option for students from Nigeria and other
					English-speaking countries.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					3. Recognized and Transferable Degrees
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Universities in Cyprus follow the European Higher Education Area (EHEA)
					standards, meaning your degree is recognized across Europe and beyond. Some
					institutions are also affiliated with UK, US, or EU universities, allowing easy
					transfer options or dual degrees.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					4. Easy Admission, Simple Visa Process
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Cyprus offers less competitive entry requirements, making it ideal for students
					who may not have top grades or test scores but still deserve quality education.
					The visa process is straightforward, and we at Pinnacle will walk you through it
					step-by-step.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					5. Work Opportunities for Students
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					While part-time work is regulated, international students in Cyprus can work up
					to 20 hours per week during their studies, in sectors like hospitality, retail,
					or services—perfect for gaining experience and supporting your stay.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					6. Safe, Welcoming, and Peaceful
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					With one of the lowest crime rates in Europe, Cyprus is perfect for students who
					want a safe, stable, and supportive environment. Locals are warm, English is
					widely spoken, and the lifestyle is easygoing but inspiring.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					7. Beautiful Environment and Travel Opportunities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Cyprus is a stunning Mediterranean island with beaches, mountains, ancient
					ruins, and vibrant towns. And with a student visa, you gain access to Europe's
					Schengen zone for future travel and adventure.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center md:pb-24'>
				<p className='text-lg md:text-2xl text-realYellow font-semibold'>
					At Pinnacle Education and Training Limited, Uyo
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					We help you choose smart. From university selection to visa processing, tuition
					payment, scholarship support, and departure prep, our expert counselors ensure
					that studying in Cyprus is simple, strategic, and successful.
				</p>
				<p className='text-sm/loose mt-2 md:text-xl/loose '>
					Cyprus is where affordability meets opportunity.
				</p>
				<p className='text-sm/loose mt-2 md:text-xl/loose '>
					Let Pinnacle take you there—with purpose, with precision, and with passion.
				</p>
			</div>

            <div className={` absolute z-20 top w-full md:px-24 mt-10   md:-mt-18  items-center `}>
				<img
					src={CryFooter}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Cry;
