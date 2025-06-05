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

function App() {
	return (
		<BrowserRouter>
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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
