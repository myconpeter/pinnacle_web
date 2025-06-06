import NavBar from '../components/NavBar';
import IeltsBig from '../assets/IELTSbig.png';
import IeltsPencil from '../assets/IeltsPencil.png';
import IeltsGrad from '../assets/IeltsGrad.png';
import { GoDotFill } from 'react-icons/go';
import WorldMap from '../assets/WorldMap.jpg';
import Footer from '../components/Footer';
import IeltsFooter from '../assets/IeltsFooter.jpg';

const IELTSExams = () => {
	return (
		<div>
			<NavBar />
			{/* page heading */}
			<div className='mt-16 md:mt-24'>
				<p className='text-light-tomato text-xl md:text-3xl text-center font-semibold'>
					THE INTERNATIONAL ENGLISH LANGUAGE TESTING SYSTEM (IELTS)
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={IeltsBig}
							alt='IeltsBig'
							className='mb-10 mt-10'
						/>
					</div>
					<div className='md:w-3/6'>
						<p className='md:text-2xl/loose text-lg/loose'>
							The International English Language Testing System (IELTS) is a widely
							accepted English language proficiency test for students, professionals,
							and immigrants.{' '}
						</p>
					</div>
				</div>
				<p className='text-lg/loose md:text-2xl/loose '>
					Our IELTS preparation courses focus on improving students' English language
					skills and achieving their desired scores.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<div className=''>
					<p className='md:text-4xl/loose text-xl font-bold mt-10 text-light-tomato'>
						Who Takes the TOEFL
					</p>

					<div className='flex items-center gap-4 mt-10'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose '>
							Students applying to foreign universities{' '}
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose  '>
							{' '}
							Professionals seeking job opportunities abroad
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose '>
							Migrants applying for residency or work permits
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS Test Dates
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					IELTS tests are available multiple times a month. Specific dates can be found on
					the official IELTS website.
				</p>
			</div>

			<div className={` relative w-full px-2 md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={IeltsPencil}
					alt='Demo'
					className='rounded-3xl md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					Types of IELTS Tests
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					IELTS for UKVI Life Skills is a UK government-approved Secure English Language
					Test (SELT) that assesses only your English speaking and listening skills.
					Required for specific UK visa types.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS Academic
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					If you are planning to study in a country where English is spoken, it's likely
					that the IELTS Academic test is the right choice for you.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					The test assesses if you are ready to begin studying in English. It features
					vocabulary that is familiar within an academic setting. You can also take IELTS
					Academic for professional registration purposes.
				</p>

				<div className=''>
					<div className='flex items-center gap-4 mt-10'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							University{' '}
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose  text-light-tomato'>
							{' '}
							Higher education
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Professional registration
						</p>
					</div>
				</div>
			</div>
			<div className={` relative w-full px-2 md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={IeltsGrad}
					alt='Demo'
					className='rounded-3xl md:ml-5 md:h-[550px] md:w-full'
				/>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS General Training
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					The IELTS General Training test is suitable for those wishing to migrate to a
					country where English is spoken (Australia, Canada, New Zealand, UK), and for
					those wishing to train or study at below degree level.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					The test assesses everyday English language skills that you will need in social
					situations and in workplace environments.
				</p>

				<div className=''>
					<div className='flex items-center gap-4 mt-10'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Immigration{' '}
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose  text-light-tomato'>
							{' '}
							Work experience
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Training
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							School or college
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS for UKVI
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					IELTS tests are accepted by the UK Visas and Immigration (UKVI) as proof of
					English proficiency for those wishing to live, work, or study in the UK.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					This is the test to take if you are applying for the following types of UK visa:
				</p>

				<div className=''>
					<div className='flex items-center gap-4 mt-10'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							British citizenship{' '}
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose  text-light-tomato'>
							{' '}
							Family visa (extension)
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Health and Care Worker visa
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Indefinite leave to remain (UK family)
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Indefinite leave to remain
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Innovator Founder visa
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							International Sportsperson visa
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Minister of Religion visa
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Representative of an Overseas Business visa
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Skilled Worker visa
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<GoDotFill className='text-light-tomato' />
						<p className='text-lg/loose md:text-2xl/loose text-light-tomato'>
							Student visa
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS Eligibility
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					No specific eligibility criteria. Test-takers should ensure the test meets the
					requirements of their intended institutions.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS Test Dates
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					Available multiple times per month. Visit the{' '}
					<a
						className='underline text-darkBlue'
						href='https://www.ielts.org/'>
						www.ielts.org
					</a>{' '}
					for specific dates.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS Exam Structure
				</p>

				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Listening: 30 minutes</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Reading: 60 minutes</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Writing: 60 minutes</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Speaking: 11 - 14 minutes</p>
				<p className='text-lg/loose mt-5 md:text-xl/loose italic text-light-tomato'>
					Total duration: Approximately 2 hours and 45 minutes.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-light-tomato font-semibold'>
					IELTS Tests Centers in Nigeria
				</p>
				<p className='text-lg/loose mt-5 md:text-xl/loose '>
					IELTS tests are conducted in various Nigerian cities, including:
				</p>

				<p className='text-lg/loose mt-5 md:text-xl/loose '>Lagos</p>
				<p className='text-lg/loose mt-5 md:text-xl/loose '>Abuja</p>
				<p className='text-lg/loose mt-5 md:text-xl/loose '>Port Harcourt.</p>
			</div>

			<div className={` relative w-full px-2 md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={WorldMap}
					alt='Demo'
					className='rounded-3xl md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<div className={` absolute z-20 top w-full px-3 md:px-24  mt-8 md:mt-1  items-center `}>
				<img
					src={IeltsFooter}
					alt='IeltsFooter'
					className=' md:ml-5 h-36 md:h-60 w-screen'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default IELTSExams;
