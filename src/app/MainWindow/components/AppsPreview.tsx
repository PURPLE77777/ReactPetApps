import React from 'react';
import '../scss/appPreview.scss';

export default function AppsPreview() {
	return (
		<div className='app-preview_container'>
			<div className='app-preview_wrap'>
				<div className='app'>App1</div>
				<div className='app'>App2</div>
				<div className='app'>App3</div>
				<div className='app'>App4</div>
				<div className='app'>App5</div>
				<div className='app'>App6</div>
				<div className='app'>App7</div>
			</div>
		</div>
	);
}
