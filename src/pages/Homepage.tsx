

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ContactUs from '../HomePage/ContactUs';
import Countries from '../HomePage/Countries';
import Headers from '../HomePage/Headers';
import HowWeWork from '../HomePage/HowWeWork';
import InterExams from '../HomePage/InterExams';
import Picture from '../HomePage/Picture';
import StudentServices from '../HomePage/StudentServices';
import Testimonies from '../HomePage/Testimonies';
import WhoWeAre from '../HomePage/WhoWeAre';
import Why from '../HomePage/Why';
import HomeFooter from '../assets/HomeFooter.jpg';

const Homepage = () => {
	return (
		<div>
			<NavBar />
			<Headers />
			<WhoWeAre />
			<StudentServices />
			<HowWeWork />
			<Countries />
			<InterExams />
			<Why />
			<Testimonies />
			<Picture />
			<ContactUs />
			<div className={` absolute z-20 top w-full  md:px-24  mt-8 md:-mt-20 items-center `}>
				<img
					src={HomeFooter}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
