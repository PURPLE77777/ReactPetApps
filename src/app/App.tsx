import React from 'react';
import MainWindow from './MainWindow/components/MainWindow';
import './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HDRezkaMain from './HDRezka/components/HDRezkaMain';
import ErrorPage from './common/components/ErrorPage';
import NewFilmsReceipts from './HDRezka/components/NewFilmsReceipts';
import FilmProfile from './HDRezka/components/FilmProfile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainWindow />,
		errorElement: <ErrorPage />
	},
	{
		path: 'hdrezka',
		element: <HDRezkaMain />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'receipts/:page',
				element: <NewFilmsReceipts />,
				loader: ({ params }) => {
					return params.page;
				}
			},
			{
				path: 'filmProfile/:filmId',
				element: <FilmProfile />,
				loader: ({ params }) => {
					return params.filmId;
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
