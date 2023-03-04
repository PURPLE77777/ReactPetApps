import React from 'react';
import MainWindow from './MainWindow/components/MainWindow';
import './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HDRezkaMain from './HDRezka/components/HDRezkaMain';
import ErrorPage from './common/components/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainWindow />,
		errorElement: <ErrorPage />
	},
	{
		path: 'hdrezka',
		element: <HDRezkaMain />
	}
	// all incorrect urls will direct to MainWindow
	// {
	// 	path: '*',
	// 	element: <MainWindow />
	// }
	//////////////////////
]);

export default function App() {
	return <RouterProvider router={router} />;
}
