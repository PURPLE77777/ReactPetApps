import React from 'react';
import FilmsBySeries from './FilmsBySeries';
import NewFilmsReceipts from './NewFilmsReceipts';
import NewFilmsSlider from './NewFilmsSlider';

export default function Main() {
	return (
		<div className='main'>
			<NewFilmsSlider />
			<FilmsBySeries />
			<NewFilmsReceipts />
		</div>
	);
}
