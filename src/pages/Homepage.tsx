// type Props = {}


import NavBar from '../components/NavBar';
import Countries from '../HomePage/Countries';
import Headers from '../HomePage/Headers';
import HowWeWork from '../HomePage/HowWeWork';
import InterExams from '../HomePage/InterExams';
import StudentServices from '../HomePage/StudentServices';
import WhoWeAre from '../HomePage/WhoWeAre';

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



		
		</div>
	);
};

export default Homepage;
