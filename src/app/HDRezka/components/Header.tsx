import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='header-container'>
			<div className='header_wrap-1'>
				<div className='header-top'>
					<div className='socials'></div>
					<Link
						className='main-logo'
						to='#'
					/>
					<div className='user-options'></div>
				</div>
			</div>
			<div className='header_wrap-2'>
				<div className='header-bottom'>Header 2</div>
			</div>
		</div>
	);
}
