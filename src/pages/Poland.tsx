import PolandFlag from '../assets/PolandFlag.png';
import PolandCity from '../assets/PolandCity.png';
import PolandShake from '../assets/PolandShake.png';
import PolandUp from '../assets/PolandUp.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PolandFooter from '../assets/PolandFooter.jpg'

const Poland = () => {
	return (
		<div>
			<NavBar />
			<div className={` relative w-full px-2 md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={PolandFlag}
					alt='ZealandFlag'
					className=' md:h-[500px] md:w-full'
				/>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-xl md:text-3xl text-center text-horseBlood font-semibold '>
					STUDY IN POLAND
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					Poland is Europe’s best-kept academic secret—a place where history meets
					innovation, where quality meets affordability, and where international students
					are warmly welcomed into a fast-growing educational ecosystem.
				</p>
				<p className='text-lg/loose mt-5 md:text-2xl/loose '>
					If you’re looking for a European degree that won’t drain your wallet, a
					multicultural lifestyle, and a solid post-graduation path, then Poland deserves
					your attention.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={PolandUp}
							alt='AusTop'
						/>
					</div>
					<div className='md:w-3/6'>
						<p className='md:text-2xl/loose text-lg/loose text-horseBlood text-center font-semibold'>
							Some of the Reasons Accounting For Increase in number of International
							Students in Poland{' '}
						</p>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					1. Affordable Tuition and Low Living Costs
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Poland offers high-quality education at a fraction of the cost. Tuition fees
					range between €2,000 and €4,000 per year for most courses—a bargain compared to
					countries like the UK or USA. Living expenses are also low, with most students
					spending just €300 - €600 monthly on accommodation, transport, and food.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					2. English-Taught Programs Across All Fields
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					You don’t need to speak Polish to earn your degree here. With over 800
					English-taught programs, Poland caters to international students in fields like
					medicine, engineering, business, IT, arts, and social sciences. No language
					barrier. No compromise.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					3. Globally Respected Degrees
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Polish universities follow the Bologna process, meaning your degree is
					recognized across all EU and EHEA countries. Institutions like Jagiellonian
					University, Warsaw University of Technology, and University of Warsaw have
					strong reputations and attract students from over 100 countries.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					4. Work While You Study
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					International students in Poland are allowed to work up to 20 hours per week
					during the semester, and full-time during holidays—perfect for building skills
					and supplementing your income while studying.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					5. Stay and Work After Graduation
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Poland’s friendly post-study immigration policy allows graduates to apply for a
					temporary residence permit to stay back and seek work. Once employed, this can
					lead to long-term residence or permanent residency—a pathway not many countries
					offer so generously.
				</p>
			</div>

			<div className={` relative w-full px-2 md:px-20  mt-16 md:mt-24 items-center `}>
				<img
					src={PolandCity}
					alt='CanadaApproved'
					className=' md:ml-5 md:h-[500px] md:w-full'
				/>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					6. Safe, Friendly, and Student-Focused Cities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Cities like Warsaw, Kraków, Wrocław, and Gdańsk are safe, culturally rich, and
					alive with youthful energy. With strong public transport, vibrant nightlife, and
					supportive academic communities, you’ll feel right at home.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					7. Strategic Location in the Heart of Europe
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Poland is centrally located in Europe—meaning you can travel easily to Germany,
					France, Italy, or the UK on student-friendly budgets. Weekend trips to Paris or
					Prague? Absolutely.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
					8. A Country with Culture and Soul
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose '>
					Poland offers a deep cultural experience—from its medieval towns and majestic
					castles to lively festivals and historic landmarks. You’ll not only study in
					Poland—you’ll grow, explore, and evolve.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-5  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={PolandShake}
							alt='UkWoman'
						/>
					</div>
					<div className='md:w-3/6 md:ml-4'>
						<p className='md:text-2xl/loose text-sm/loose '>
							At Pinnacle Education and Training Limited, Uyo, we make your Polish
							study dreams real. From choosing the right university, to visa
							processing, IELTS prep, scholarship{' '}
						</p>
					</div>
				</div>
				<p className='text-sm/loose md:text-2xl/loose '>
					guidance, and post-arrival support, our expert team is with you at every stage.
					Poland offers more than a degree—it offers a doorway. Let us help you walk
					through it.
				</p>
			</div>

            <div
				className={` absolute z-20 top w-full px-3 md:px-24 mt-10   md:mt-10  items-center `}>
				<img
					src={PolandFooter}
					alt='Demo'
					className=' md:ml-5 h-36 md:h-60 w-screen'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Poland;
