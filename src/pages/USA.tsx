import NavBar from '../components/NavBar';
import UsFlag from '../assets/USflag.png';
import Usdeco from '../assets/USdeco.png';
import Uswoman from '../assets/USwoman.png';
import Footer from '../components/Footer';
import Person from '../assets/UsaFooter.jpg';
import ContactUs from '../components/ContactUs';

const USA = () => {
	return (
		<div>
			<NavBar />
			<div className={` relative w-full  md:px-20  mt-10 md:mt-16 items-center `}>
				<img
					src={UsFlag}
					alt='CanadaImage'
					className=' md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl md:text-4xl text-center text-purePink font-medium'>
					Study in the USA from Nigeria Pinnacle Education Uyo
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>
					Get expert help to study in the USA from Nigeria. Pinnacle Education Uyo offers
					SAT/TOEFL prep, top university selection, scholarships, and visa support.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>
					From the historic halls of Harvard to the high-tech labs of MIT, the United
					States remains the top study destination for international students. With
					world-class universities, cutting-edge research, and unmatched flexibility,
					studying in the USA isn{"'"}t just a goal—it{"'"}s a game-changer.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose font-light'>
					Whether you're aiming to pursue undergraduate or postgraduate studies, the U.S.
					offers endless opportunities for academic growth, career advancement, and
					personal transformation.
				</p>
			</div>

			<div className='relative w-full md:px-20 mt-5  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={Uswoman}
							alt='UkWoman'
						/>
					</div>
					<div className='md:w-3/6 mt-5'>
						<p className='md:text-2xl/loose text-xl/loose text-purePink text-center  font-semibold'>
							Why Choose the USA for Your Studies?{' '}
						</p>
					</div>
				</div>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-5  md:mt-16 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					1. Unmatched Academic Excellence
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					Home to over 50 of the world’s top 100 universities, the U.S. is known for its
					academic rigor and innovative teaching. Ivy League schools and renowned public
					institutions consistently lead global education rankings.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt- items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					2. The Widest Range of Programs and Majors
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					With thousands of accredited colleges and universities, students can explore
					diverse fields—medicine, business, engineering, arts, tech, and more.
					Interdisciplinary study and flexible course combinations make the U.S. education
					system truly personalized.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					3. Flexible, Student-Centric Learning
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					The U.S. system encourages independence, critical thinking, and exploration. You
					can design your curriculum, switch majors, and choose electives that align with
					your career path and passions.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					4. Research and Internship Opportunities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Get hands-on experience through internships, research assistantships, and
					collaborations with top companies like Google, Microsoft, NASA, and more. U.S.
					universities are global leaders in R&D, offering real-world exposure and career
					preparation.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					5. Scholarships and Financial Aid
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					The U.S. offers abundant scholarship options:
				</p>
			</div>
			<div className={` relative w-full flex justify-center px-2 md:px-20 items-center `}>
				<img
					src={Usdeco}
					alt='CanadaImage'
					className=''
				/>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-3  md:mt-10 items-center'>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Merit-based and need-based scholarships
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Assistantships for graduate students
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					Commonwealth Scholarships
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Sports/athletic scholarships
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					School-specific international grants
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					At Pinnacle, we help you apply for the best funding opportunities available.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					6. Work While You Study + Post-Graduation Opportunities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					International students can work 20 hours per week on-campus during study and
					apply for OPT (Optional Practical Training) after graduation—allowing them to
					work in their field for up to 3 years, especially in STEM courses. Many students
					transition from OPT to H1-B work visas, and later, permanent residency.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					7. Global Employability and Career Launchpad
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					A U.S. degree is a global passport to professional success. Employers worldwide
					recognize the value of an American education—its focus on leadership,
					innovation, and collaboration makes U.S. graduates stand out in a competitive
					world.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					8. Culturally Diverse and Inclusive Campuses
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					The U.S. hosts students from over 200 countries. Experience a rich blend of
					cultures, traditions, and worldviews while studying in inclusive,
					student-friendly communities.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					9. High-Tech Campuses and Student Life
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Enjoy top-tier infrastructure—advanced labs, innovation hubs, AI centers, and
					sports facilities—alongside vibrant campus life with clubs, sports, and social
					events.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-purePink font-medium'>
					10. English Mastery and Personal Growth
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Living and studying in the U.S. enhances your English fluency, confidence,
					independence, and adaptability—skills essential for a global career and a
					successful life.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-xl md:text-2xl text-purePink font-medium'>
					Begin Your U.S Education Journey with Pinnacle Education and Training Limited.
					Uyo
				</p>
				<p className='text-lg/loose mt-5 md:text-xl/loose font-light '>
					At Pinnacle Education, we offer expert support to make your study-in-the-USA
					dream a reality:
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Personalized university and course selection
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					SAT, TOEFL, and IELTS preparation
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Commonwealth Scholarships
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Scholarship and financial aid guidance
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					Visa counseling and application support
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					Pre-departure briefings and ongoing support
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					We make your path smoother, smarter, and more successful. Let{"'"}s help you
					study in the USA — from Nigeria to the world stage.
				</p>
			</div>

			<ContactUs />
			<div className={` absolute z-20 top w-full md:px-24  mt-8 md:-mt-20  items-center `}>
				<img
					src={Person}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default USA;
