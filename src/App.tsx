import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import BasicRequirement from './pages/BasicRequirement';
import SATExams from './pages/SATExams';
import TOELFExams from './pages/TOELFExams';
import IELTSExams from './pages/IELTSExams';
import Canada from './pages/Canada';
import UnitedKingdom from './pages/UnitedKingdom';
import USA from './pages/USA';
import NewZealand from './pages/NewZealand';
import Ireland from './pages/Ireland';
import Australia from './pages/Australia';
import Germany from './pages/Germany';
import Poland from './pages/Poland';
import ScrollToTop from './components/ScrollToTop';
import France from './pages/France';
import Swiz from './pages/Swiz';
import Spain from './pages/Spain';
import Cry from './pages/Cry';


function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route
					index
					element={<Homepage />}
				/>

				<Route
					path='about'
					element={<AboutPage />}
				/>
				<Route
					path='basic-requirement'
					element={<BasicRequirement />}
				/>
				<Route
					path='sat-exams'
					element={<SATExams />}
				/>
				<Route
					path='toefl-exams'
					element={<TOELFExams />}
				/>
				<Route
					path='ielts-exams'
					element={<IELTSExams />}
				/>
				<Route
					path='canada'
					element={<Canada />}
				/>
				<Route
					path='united-kingdom'
					element={<UnitedKingdom />}
				/>
				<Route
					path='usa'
					element={<USA />}
				/>
				<Route
					path='new-zealand'
					element={<NewZealand />}
				/>
				<Route
					path='ireland'
					element={<Ireland />}
				/>
				<Route
					path='australia'
					element={<Australia />}
				/>
				<Route
					path='germany'
					element={<Germany />}
				/>
				<Route
					path='poland'
					element={<Poland />}
				/>
				<Route
					path='france'
					element={<France />}
				/>
				<Route
					path='switzerland'
					element={<Swiz />}
				/>
				<Route
					path='spain'
					element={<Spain />}
				/>
				<Route
					path='cyprus'
					element={<Cry />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
