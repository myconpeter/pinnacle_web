import NavBar from '../components/NavBar';
import SatBig from '../assets/SATbig.png';
import SatBoy from '../assets/SatBoy.png';
import SatGirl from '../assets/SatGirl.png';
import SatGrade from '../assets/SatGrade.png';
import { GoDotFill } from 'react-icons/go';
import WorldMap from '../assets/WorldMap.jpg';
import Footer from '../components/Footer';
import Satfooter from '../assets/SatFooter.jpg';

const SATExams = () => {
	return (
		<div>
			<NavBar />
			{/* page heading */}

			<div className='relative w-full px-3 md:px-20  mt-10 md:mt-0 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={SatBig}
							alt='satbig'
						/>
					</div>
					<div className='md:w-3/6'>
						<div className=' md:mt-24'>
							<p className='text-darkBlue text-xl  md:text-3xl text-center font-bold'>
								SCHOLASTIC APTITUDE TEST (SAT)
							</p>
						</div>
						<p className='md:text-2xl/loose mt-8  text-lg/loose'>
							The Scholastic Aptitude Test (SAT) is a college entrance exam that
							measures a student's readiness for higher education. Our SAT preparation
							courses are tailored to help students improve their scores{' '}
						</p>
					</div>
				</div>
				<p className='text-lg/loose md:text-2xl/loose '>
					and increase their chances of getting into their preferred colleges and
					universities. The SAT exam has been developed to evaluate the written, verbal
					and mathematical skills of the candidates.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					{' '}
					Applicants who aspire to pursue undergraduate courses, particularly in the US
					and Canada, are required to take the SAT exam. If the student is looking to get
					admission to a particular course, he/she can take the SAT subject tests to show
					his knowledge and understanding of that particular subject.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>
					Who Takes the SAT?
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					Primarily high school students aiming to pursue undergraduate studies in the
					U.S. However, individuals of any age can take the SAT, including those seeking
					to demonstrate academic proficiency for various purposes.
				</p>
			</div>

			<div className={` relative w-full md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={SatBoy}
					alt='Demo'
					className='md:rounded-3xl md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>Types Of SAT?</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					SAT General Test: Assesses reading, writing, and math skills.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					SAT Subject Tests: Previously offered in specific subjects but discontinued as
					of 2021.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10 py-10  md:mt-24 items-center bg-lighter-blue'>
				<p></p>
				<div className='relative w-full  items-center'>
					<div className='md:flex md:flex-row-reverse md:items-center md:justify-between'>
						<div className='md:w-3/6'>
							<img
								src={SatGirl}
								alt='satbig'
								className=''
							/>
						</div>
						<div className='md:mr-10'>
							<p className='md:text-2xl/loose text-xl font-bold mt-10'>
								SAT Exam Structure
							</p>

							<p className='text-lg/loose md:text-2xl/loose mt-5 '>
								The SAT comprises two main sections: Reading and Writing: 64 minutes
								Math: 70 minutes Total duration: 2 hours and 14 minutes.
							</p>
							<p className='text-lg/loose mt-5 md:text-2xl/loose  text-red-600'>
								{' '}
								A good SAT score ranges from 1200-1600.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  items-center'>
				<div className='relative w-full px-3 md:px-20   items-center '>
					<div className='md:flex items-center justify-between'>
						<div className='md:w-3/6'>
							<img
								src={SatGrade}
								alt='satbig'
								className='md:rounded-xl md:h-[500px] md:mt-10'
							/>
						</div>
						<div className='md:w-3/6 md:ml-5'>
							<p className='md:text-4xl/loose text-xl text-center font-bold mt-10'>
								SAT Test Dates (2025)
							</p>

							<div className='flex items-center gap-4 mt-10'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>Mar 8, 2025</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose  '> May 3, 2025</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>June 7, 2025</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>August 23, 2025</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>
									September 13, 2025
								</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>October 4, 2025</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>November 8, 2025</p>
							</div>
							<div className='flex items-center gap-4'>
								<GoDotFill />
								<p className='text-lg/loose md:text-2xl/loose '>December 6, 2025</p>
							</div>

							<p className='text-red-600 '>
								Registration deadlines typically fall about two weeks before the
								test date.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>SAT Age Limit</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					No official age limit exists. While most test-takers are between 17 and 19 years
					old, individuals of any age can register for the SAT.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>
					SAT Eligibility Criteria
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					There are no specific eligibility criteria regarding age or educational
					background. However, students under 13 require parental consent to register.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-darkBlue font-semibold'>
					SAT Test Centers in Nigeria
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					SAT exams are conducted in various locations across Nigeria, including:
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Abuja FCT</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Asaba</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Enugu</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Jos</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Lagos</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Owerri</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Port Harcourt</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Kaduna</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>Benin</p>
			</div>

			<div className={` relative w-full md:px-20  mt-16 md:mt-24 items-center md:pb-24  `}>
				<img
					src={WorldMap}
					alt='Demo'
					className='md:rounded-xl md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<div className={` absolute z-20 top w-full md:px-24  mt-8 md:-mt-14  items-center `}>
				<img
					src={Satfooter}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default SATExams;
