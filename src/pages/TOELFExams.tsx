import NavBar from '../components/NavBar';
import ToelfBig from '../assets/TOEFbig.png';
import ToplfEdu from '../assets/TopflEdu.png';
import { GoDotFill } from 'react-icons/go';
import WorldMap from '../assets/WorldMap.jpg';
import Footer from '../components/Footer';
import TofelFooter from '../assets/TOFLEfooter.jpg';
import ContactUs from '../components/ContactUs';

const TOELFExams = () => {
	return (
		<div>
			<NavBar />
			{/* page heading */}

			<div className='relative w-full px-3 mt-10 md:px-20  md:mt-10 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={ToelfBig}
							alt='ToelfBig'
						/>
					</div>
					<div className='md:w-3/6'>
						<div className='md:mt-16'>
							<p className='text-darkBlue text-xl md:text-3xl text-center font-semibold'>
								THE TEST OF ENGLISH AS A FOREIGN LANGUSE (TOEFL)
							</p>
						</div>
						<p className='md:text-2xl/loose mt-5 text-lg/loose font-light'>
							The Test of English as a Foreign Language (TOEFL) is a standardized test
							that measures the English language proficiency of non-native speakers.{' '}
						</p>
					</div>
				</div>
				<p className='text-lg/loose md:text-2xl/loose font-light'>
					The TOEFL is conducted by the Educational Testing Service (ETS). The Test of
					English as a Foreign Language (TOEFL) is a globally recognized English
					proficiency test, essential for non-native speakers who wish to study, work, or
					migrate to English-speaking countries.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>
					{' '}
					Our comprehensive TOEFL preparation courses are designed to help students
					improve their reading, listening, speaking, and writing skills.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>
					TOEFL Test Formats
				</p>
				<p className='text-lg md:text-2xl text-darkBlue  mt-5 font-light'>
					TOEFL IBT (Internet-based): Most widely accepted
				</p>
				<p className='text-lg md:text-2xl text-darkBlue mt-5 font-light'>
					TOEFL PBT (Paper-based): Not available in Nigeria
				</p>
			</div>
			<div
				className={` relative w-full flex  justify-center px-2 md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={ToplfEdu}
					alt='Demo'
					className='md:rounded-3xl md:ml-5 w-60 h-60 '
				/>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<div className=''>
					<p className='md:text-4xl/loose text-xl font-bold mt-10 text-darkBlue'>
						Who Takes the TOEFL
					</p>

					<div className='flex items-center gap-4 mt-5'>
						<GoDotFill className='text-darkBlue' />
						<p className='text-lg/loose md:text-2xl/loose font-light '>
							Students applying to foreign universities
						</p>
					</div>
					<div className='flex items-center gap-4 -mt-5'>
						<GoDotFill className='text-darkBlue' />
						<p className='text-lg  md:text-2xl/loose font-light mt-4'>
							Professionals seeking job opportunities abroad
						</p>
					</div>
					<div className='flex items-center gap-4 -mt-1'>
						<GoDotFill className='text-darkBlue' />
						<p className='text-lg/loose md:text-2xl/loose font-light'>
							Migrants applying for residency or work permits
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>TOEFL Test Dates</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light '>
					TOEFL iBT is available multiple times monthly. Visit the official ETS website
					<a
						className='underline text-darkBlue'
						href='https://www.ets.org/toefl/test-takers/ibt.html'>
						{' '}
						www.ets.org/toefl/test-takers/ibt.html
					</a>
					for updated dates.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>
					TOEFL Test Centers in Nigeria
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>
					Available in major cities such as:
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>Lagos</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>Abuja</p>

				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>Port Harcourt</p>
			</div>

			<div className={` relative w-full  md:px-20  mt-16 md:mt-24 items-center`}>
				<img
					src={WorldMap}
					alt='Demo'
					className='md:rounded-3xl md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<ContactUs />

			<div className={` absolute z-20 top w-full md:px-24  mt-8 md:-mt-20  items-center `}>
				<img
					src={TofelFooter}
					alt='TofelFooter'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default TOELFExams;
