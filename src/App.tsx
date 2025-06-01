import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import About from './pages/About';

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
					element={<About />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
