import NavBar from '../components/NavBar';
import CanadaImage from '../assets/CanadaImage.png';
import CanadaGrowth from '../assets/CanadaGrowth.png';
import CanadaBoy from '../assets/CanadaBoy.png';
import CanadaApproved from '../assets/CanadaApproved.png';
import Footer from '../components/Footer';
import Person from '../assets/CanadaFooter.jpg';
import ContactUs from '../components/ContactUs';

const Canada = () => {
	return (
		<div>
			<NavBar />
			<div className='relative w-full px-3 md:px-20  mt-10 md:mt-0 items-center'>
				<div className='md:flex flex-row-reverse items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={CanadaImage}
							alt='satbig'
						/>
					</div>
					<div className='md:w-3/6'>
						<div className=' md:mt-24'>
							<p className='text-light-tomato text-xl  md:text-3xl text-center font-bold'>
								STUDY IN CANADA
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light '>
					Canada is more than just maple leaves and snowy peaks—it{"'"}s one of the world
					{"'"}s most welcoming, stable, and academically elite countries. With a deep
					respect for international students, a commitment to innovation, and a pathway to
					long-term settlement, Canada is where your academic goals and immigration dreams
					align.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={CanadaGrowth}
							alt='ToelfBig'
						/>
					</div>
					<div className='md:w-3/6'>
						<p className='md:text-2xl/loose text-lg/loose text-light-tomato font-medium'>
							Some of the Reasons Accounting for Increase in Number of International
							Students in Canada{' '}
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					1. Globally Recognized Degrees and Top-Tier Institutions
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					Canadian universities like University of Toronto, McGill, UBC, and Waterloo are
					consistently ranked among the top globally. Their degrees are recognized and
					respected worldwide, opening doors for employment and further study across
					continents.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					2. Affordable Tuition and High ROI
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Compared to the U.S., UK, or Australia, Canada offers relatively lower tuition
					fees and cost of living, while still delivering world-class education. It's one
					of the few countries where quality meets affordability without compromise.
				</p>
			</div>

			<div className='relative w-full md:px-20 mt-10  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={CanadaBoy}
							alt='CanadaBoy'
							className='md:h-[500px]'
						/>
					</div>
					<div className='md:w-3/6 px-2'>
						<p className='text-lg md:text-2xl text-light-tomato font-medium mt-5'>
							3. Study and Work Flexibility
						</p>
						<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
							International students can work up to 20 hours per week during school
							and full-time during scheduled breaks. After graduation, the
							Post-Graduation Work Permit (PGWP) allows students to work in Canada for
							up to 3 years, giving them critical job experience.
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					4. Pathway to Permanent Residency
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Canada isn{"'"}t just giving you a degree—it{"'"}s offering you a future. With
					immigration-friendly policies like the Express Entry System and Canadian
					Experience Class, international graduates have a clear and achievable route to
					permanent residency.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					5. Safe, Welcoming, and Inclusive Society
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Ranked among the safest and most peaceful countries in the world, Canada is a
					global model of multiculturalism. Students are welcomed, respected, and
					protected—regardless of background, faith, gender, or race.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					6. Cutting-Edge Research and Innovation
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Canada is a global leader in AI, healthcare, engineering, and environmental
					science. With billions in government and private funding, students have access
					to hands-on research opportunities, innovative labs, and collaborative industry
					projects.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					7. High Quality of Life
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					From universal healthcare to clean cities, efficient public transportation, and
					stunning natural beauty—Canada offers a balance between rigorous academics and
					exceptional living standards. You{"'"}re not just studying here; you{"'"}re
					thriving.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					8. Bilingual Advantage
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					With English and French as official languages, Canada offers the opportunity to
					become bilingual, enhancing your employability and cultural fluency.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					9. Post-Study Employment Opportunities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Graduates from Canadian institutions are in demand both locally and globally.
					With booming industries like IT, nursing, engineering, logistics, and education,
					Canada's job market is ready for skilled international talent.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-light-tomato font-medium'>
					10. Cultural Experience That Feels Like Home
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Whether you find yourself in Toronto{"'"}s urban buzz, Vancouver{"'"}s ocean
					breeze, Montreal{"'"}s artistic heart, or Calgary{"'"}s warm prairies, you{"'"}
					ll experience a rich blend of cultures, cuisines, traditions, and languages that
					makes every international student feel at home.
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					At Pinnacle Education and Training Limited, Uyo, we{"'"}re more than
					consultants—we're your Canada study-abroad dream team.
				</p>
			</div>

			<div className={` relative w-full  md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={CanadaApproved}
					alt='CanadaApproved'
					className=' md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					From finding the perfect program, preparing your study permit, securing
					scholarships, and acing your IELTS—we offer full-service guidance from
					application to arrival.
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Let Canada be your next academic adventure. Your future doesn{"'"}t just belong
					in a classroom—it belongs in a country that invites you to stay and succeed.
				</p>
			</div>
			<ContactUs />

			<div className={` absolute z-20 top w-full md:px-24  mt-8 md:-mt-20  items-center `}>
				<img
					src={Person}
					alt='Demo'
					className=' md:ml-5 '
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Canada;
