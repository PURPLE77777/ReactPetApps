import React from 'react';
import '../scss/newFilmsReceipts.scss';

export default function NewFilmsReceipts() {
	return (
		<div className='last-receipts-container'>
			<div className='last-receipts-wrap'>
				<div className='films-cards-container'>
					<div className='films-cards_header'>
						<div className='main-chapters'>
							<a
								className='chapter active-chapter'
								href='#'>
								Последние поступления
							</a>
							<a
								className='chapter'
								href='#'>
								Популярные
							</a>
							<a
								className='chapter'
								href='#'>
								В ожидании
							</a>
							<a
								className='chapter'
								href='#'>
								Сейчас смотрят
							</a>
						</div>
						<div className='films-types'>
							<span className='type-text'>Отображать:</span>
							<a
								className='type active-type'
								href='#'>
								Все
							</a>
							<a
								className='type'
								href='#'>
								Фильмы
							</a>
							<a
								className='type'
								href='#'>
								Сериалы
							</a>
							<a
								className='type'
								href='#'>
								Мультфильмы
							</a>
							<a
								className='type'
								href='#'>
								Аниме
							</a>
						</div>
					</div>

					<div className='films-cards'></div>
				</div>
				<div className='serials-last-series'></div>
			</div>
			<div className='lastword'></div>
		</div>
	);
}
