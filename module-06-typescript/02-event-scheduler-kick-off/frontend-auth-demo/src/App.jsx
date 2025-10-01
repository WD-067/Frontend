import { BrowserRouter, Routes, Route } from 'react-router';
import { MainLayout, AuthLayout } from './layouts';
import { Home, MyPond, DuckPage, SignIn, NotFound } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='signin' element={<SignIn />} />
					<Route path='ducks/:id' element={<DuckPage />} />
					<Route path='mypond' element={<AuthLayout />}>
						<Route index element={<MyPond />} />
					</Route>
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
