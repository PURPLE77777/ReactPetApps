import React from 'react';
import '../scss/HDRezka.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { Outlet, useLocation } from 'react-router-dom';

export default function HDRezkaMain() {
	const { pathname } = useLocation();

	return (
		<div id='hdrezka-container'>
			<Header />
			{
				pathname.includes('/receipts/') ? <Outlet /> : <Main />
			}
			<Footer />
		</div>
	);
}
