import {Inter} from 'next/font/google';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/fontawesome-free-6.1.1-web/css/all.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'Slum Art',
	description: 'Slum art gallery app',
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
