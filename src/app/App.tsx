import React from 'react';
import MainWindow from './MainWindow/components/MainWindow';
import './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HDRezkaMain from './HDRezka/components/HDRezkaMain';
import ErrorPage from './common/components/ErrorPage';
import NewFilmsReceipts from './HDRezka/components/NewFilmsReceipts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainWindow />,
		errorElement: <ErrorPage />
	},
	{
		path: 'hdrezka',
		element: <HDRezkaMain />,
		children: [
			{
				path: 'receipts/:page',
				element: <NewFilmsReceipts />,
				loader: ({ params }) => {
					return params.page;
				}
			}
		]
	},
	// all incorrect urls will direct to MainWindow
	{
		path: '*',
		element: <MainWindow />
	}
	//////////////////////
]);

export default function App() {
	return <RouterProvider router={router} />;
}
