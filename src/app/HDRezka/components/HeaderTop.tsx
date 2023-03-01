import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/headerTop';

export default function HeaderTop() {
	return (
		<div className='header_wrap-top'>
			<div className='header-top'>
				<div className='socials'>
					<button className='socials_button'>Подпишись</button>
					<div className='socials_theme-button'>
						<div className='toggle-button'></div>
					</div>
				</div>
				<Link
					className='main-logo'
					to='#'
				/>
				<div className='menu-buttons'>
					<div className='menu-buttons_button'>
						Досмотреть (<span className='count-films'>219</span>)
					</div>
					<div className='menu-buttons_button'>Мои закладки</div>
					<div className='menu-buttons_button'>Профиль</div>
				</div>
			</div>
		</div>
	);
}
