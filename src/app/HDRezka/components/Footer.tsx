import React from 'react';
import '../scss/footer';

export default function Footer() {
	return <div className='footer'>
		<div className="footer-wrap max-w960">
			<div className="footer-menu">
				<div className="menu">
					<a href='#' className='menuitem'>Фильмы</a>
					<a href='#' className='menuitem'>Мультфильмы</a>
					<a href='#' className='menuitem'>Сериалы</a>
					<a href='#' className='menuitem'>Передачи и шоу</a>
					<a href='#' className='menuitem'>Правообладателям</a>
					<a href='#' className='menuitem'>Поддержка</a>
				</div>
				<div className="site">© 2023 HDrezka.me</div>

			</div>
			<div className="footer-socials">
				<div className="hdrezka-desc">
					HDrezka.me — мы лучшие в мире бесплатных онлайн фильмов и сериалов в хорошем HD качестве!
				</div>
				<div className="socials">
					<a href="#" className='social'></a>
					<a href="#" className='social'></a>
				</div>
			</div>
		</div>
	</div>;
}
