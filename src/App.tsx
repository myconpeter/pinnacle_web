import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import BasicRequirement from './pages/BasicRequirement';

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
					path='basic'
					element={<BasicRequirement />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
