import SwizFlag from '../assets/SwizFlag.png';
import NavBar from '../components/NavBar';
import SwizUp from '../assets/SwizUp.png';
import SwizTree from '../assets/SwizTree.png';
import SwizFooter from '../assets/SwizFooter.jpg';
import SwizMap from '../assets/SwizMap.png';
import SwizWorld from '../assets/SwizWorld.png';
import Footer from '../components/Footer';


const Swiz = () => {
	return (
		<div>
			<NavBar />
			{/* page heading */}

			<div className='relative w-full px-3 md:px-20  mt-10 md:mt-0 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={SwizFlag}
							alt='satbig'
						/>
					</div>
					<div className='md:w-3/6'>
						<div className=' md:mt-24'>
							<p className='text-black text-xl  md:text-3xl text-center font-medium mt-5'>
								STUDY IN SWITZERLAND
							</p>
						</div>
						<p className='md:text-2xl/loose mt-8  text-lg/loose font-light'>
							Switzerland isn’t just about chocolate, watches, and the Alps—it’s about
							intellectual excellence, cutting-edge research, and a life that’s as
							balanced as its famous neutrality.{' '}
						</p>
					</div>
				</div>
				<p className='text-lg/loose md:text-2xl/loose font-light'>
					A small country with a global impact, Switzerland consistently ranks among the
					top for quality of life, innovation, and education—making it one of the most
					attractive destinations for serious, future-focused students.
				</p>
			</div>

			<div className='relative w-full  md:px-20  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6 px-3'>
						<p className='md:text-2xl/loose text-lg/loose text-horseBlood text-center font-medium mt-4'>
							Some of the Reasons Accounting for Increase in Number of International
							Students in Switzerland{' '}
						</p>
					</div>

					<div className='md:w-3/6'>
						<img
							src={SwizUp}
							alt='AusTop'
						/>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-medium'>
					1. Academic Excellence & Global Recognition
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Switzerland is home to some of the world’s top universities, including: ETH
					Zurich – ranked among the top 10 globally for science and engineering University
					of Geneva, University of Lausanne, and University of Zurich Degrees from Swiss
					institutions are internationally respected, especially in STEM, finance,
					hospitality, international law, and diplomacy.
				</p>
			</div>
			<div className='relative w-full md:px-20  md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6'>
						<img
							src={SwizWorld}
							alt='UkWoman'
						/>
					</div>
					<div className='md:w-3/6 md:ml-4 px-3 mt-4'>
						<p className='text-lg md:text-2xl text-horseBlood font-semibold'>
							2. A Hub for Research and Innovation
						</p>
						<p className='md:text-2xl/loose text-sm/loose mt-5 font-light'>
							Switzerland invests heavily in R&D, housing major international research
							centers and labs. Students can participate in real-world research,
							connect with global thought leaders, and even collaborate with Nobel
							laureates.{' '}
						</p>
					</div>
				</div>
				<p className='md:text-2xl/loose text-sm/loose mt-5 px-3 font-light'>
					Want to be part of breakthroughs? This is your launchpad.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-medium'>
					3. Multilingual Advantage: English, French, German, Italian
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Switzerland’s unique multilingual culture (4 national languages!) makes it one
					of the most culturally diverse and flexible places to study. Many Master’s
					programs and increasing numbers of Bachelor’s programs are taught in English,
					especially in STEM and business.
				</p>
			</div>
			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-medium'>
					4. International Exposure and Career Opportunities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					Home to many international organizations, including the United Nations, WHO, Red
					Cross, and top banking firms, Switzerland is a global career gateway. Students
					often land internships and jobs in diplomacy, banking, pharmaceuticals, and
					hospitality, with favorable post-study work opportunities available for
					graduates with in-demand skills.
				</p>
			</div>

			<div className='relative w-full  md:px-20 mt-5 md:mt-24 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6 md:ml-4 px-3'>
						<p className='text-lg md:text-2xl text-horseBlood font-medium'>
							5. High Quality of Life
						</p>
						<p className='md:text-2xl/loose text-sm/loose mt-1 font-light'>
							Switzerland ranks consistently high in:{' '}
						</p>
						<p className='md:text-2xl/loose text-sm/loose mt-1 font-light'>Safety </p>
						<p className='md:text-2xl/loose text-sm/loose mt-1 font-light'>Cleanliness </p>
						<p className='md:text-2xl/loose text-sm/loose mt-1 font-light'>Healthcare </p>
						<p className='md:text-2xl/loose text-sm/loose mt-1 font-light'>Stability </p>
					</div>

					<div className='md:w-3/6'>
						<img
							src={SwizTree}
							alt='UkWoman'
						/>
					</div>
				</div>
				<p className='md:text-2xl/loose text-sm/loose mt-5 px-3 font-light'>
					It’s a country designed for focused, productive, and inspired living. While it’s
					more expensive than some European countries, students enjoy subsidies,
					discounts, and financial support.
				</p>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-lg md:text-2xl text-horseBlood font-medium'>
					6. Small Classes, Big Opportunities
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light '>
					Swiss universities emphasize interactive learning, small class sizes, and
					professor-student collaboration. You won’t just sit in a lecture hall—you’ll
					engage, innovate, and build a personal academic brand.
				</p>
			</div>

			<div className='relative w-full md:px-20  md:mt-24 mt-5 items-center'>
				<div className='md:flex items-center justify-between'>
					<div className='md:w-3/6 md:ml-4 px-3'>
						<p className='text-lg md:text-2xl text-horseBlood font-medium'>
							7. Central European Access
						</p>
						<p className='md:text-2xl/loose text-sm/loose mt-1 font-light'>
							Study in Switzerland, and you’re just hours away from Italy, France,
							Germany, and Austria. A weekend can take you from a Geneva debate to a
							Milan runway or a Vienna concert.{' '}
						</p>
					</div>

					<div className='md:w-3/6'>
						<img
							src={SwizMap}
							alt='UkWoman'
						/>
					</div>
				</div>
			</div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center md:pb-24'>
				<p className='text-lg md:text-2xl text-horseBlood font-medium'>
					At Pinnacle Education and Training Limited, Uyo.
				</p>
				<p className='text-sm/loose mt-5 md:text-xl/loose font-light'>
					We guide your journey into Swiss sophistication. From selecting the right
					university to visa processing, scholarship applications, accommodation support,
					and SOP writing, we walk you through every step—strategically and successfully.
					Switzerland is more than a destination—it’s a decision to rise. Let us help you
					make it.
				</p>
			</div>
            <div
				className={` absolute z-20 top w-full md:px-24 mt-10   md:-mt-14  items-center `}>
				<img
					src={SwizFooter}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Swiz;
