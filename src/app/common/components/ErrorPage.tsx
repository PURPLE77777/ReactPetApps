import React from 'react';
import { useRouteError } from 'react-router-dom';
import '../scss/errorPage.scss';

export default function ErrorPage() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const error: any = useRouteError();
	console.error(error);

	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred. &#128546;</p>
			<p>
				<i>{error.data || error.statusText}</i>
			</p>
		</div>
	);
}
