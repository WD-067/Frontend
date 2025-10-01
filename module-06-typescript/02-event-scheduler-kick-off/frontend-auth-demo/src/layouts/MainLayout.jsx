import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Navbar, Footer } from '../components';
import { DuckProvider, AuthProvider } from '../context';

const MainLayout = () => {
	return (
		<AuthProvider>
			<div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
				<Navbar />
				<DuckProvider>
					<main className='flex-grow flex flex-col'>
						<Outlet />
					</main>
				</DuckProvider>
				<Footer />
				<ToastContainer position='bottom-right' />
			</div>
		</AuthProvider>
	);
};

export default MainLayout;
