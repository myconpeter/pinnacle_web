import AboutGirl from '../About/AboutGirl';
import AboutImage from '../About/AboutImage';
import AboutImg from '../About/AboutImg';
import AboutServices from '../About/AboutServices';
import AboutText from '../About/AboutText';
import AboutWay from '../About/AboutWhy';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import HomeFooter from '../assets/HomeFooter.jpg';


const AboutPage = () => {
	return (
		<div>
			<NavBar />
			<AboutImage />
			<AboutText />
			<AboutServices />
			<AboutImg />
			<AboutWay />
			<AboutGirl />
			<div className={` absolute z-20 top w-full px-3 md:px-24  mt-8 md:mt-1  items-center `}>
				<img
					src={HomeFooter}
					alt='Demo'
					className=' md:ml-5 h-36 md:h-60 w-screen'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default AboutPage;
