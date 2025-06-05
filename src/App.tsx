import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
