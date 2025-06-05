import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import BasicRequirement from './pages/BasicRequirement';
import SATExams from './pages/SATExams';
import TOELFExams from './pages/TOELFExams';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
