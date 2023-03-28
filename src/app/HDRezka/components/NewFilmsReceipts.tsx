import React, { useEffect, useState } from 'react';
import '../scss/newFilmsReceipts.scss';
import lastFilms from '../dataset/last_films.json';
import lastEpisodes from '../dataset/last_series.json';
import { Episode, Film } from './interfaces';

export default function NewFilmsReceipts() {
	const [films, setFilms] = useState<Film[]>([]);
	const [serials, setSerials] = useState<Episode[]>([]);
	const date = new Date();
	// test

	const cardConfig = {
		imgWidth: 166,
		imgHeight: 250
	};

	useEffect(() => {
		setFilms(lastFilms);
		setSerials(lastEpisodes);
	}, []);

	const arraySeriesHandler = (() => {
		let curTime: number = new Date().getTime();
		curTime = 86_400_000 * Math.floor(curTime / 86_400_000); // 1_679_616_000_000
		return (order: number) => {
			return curTime - 3 * 3_600_000 - 86_400_000 * order;
		};
	})();
	const times = Array.from({ length: 6 }, (_, i) => arraySeriesHandler(i));

	const createFilmCard = (film: Film) => {
		return (
			<a
				className='film-card'
				style={{ width: cardConfig.imgWidth + 8 }}
				key={`film-${film.id}`}>
				<div
					className='film-pic'
					style={{ height: cardConfig.imgHeight }}>
					<img
						className='film-pic_img'
						height={cardConfig.imgHeight}
						width={cardConfig.imgWidth}
						src={require('../img/' + film.img)}></img>
				</div>
				<div className='short-desc'>
					<p className='film-title'>{film.name}</p>
					<p className='film-short-info'>
						{new Date(film.date).getFullYear()}
						{film.country.length > 1 ? ` - ..., ` : `, `}
						{film.country[0] + ', ' + film.genre[0]}
					</p>
				</div>
			</a>
		);
	};

	const createDayBlock = (time: number) => {
		const getDateString = (time: number) => {
			const months = [
				'января',
				'февраля',
				'марта',
				'апреля',
				'мая',
				'июня',
				'июля',
				'августа',
				'сентября',
				'октября',
				'ноября',
				'декабря'
			];
			const tm = new Date(time);
			const timeString = `${tm.getDate()} ${months[tm.getMonth()]} ${tm.getFullYear()}`;
			const dateString: string =
				time == times[0]
					? `Сегодня (${timeString})`
					: time == times[1]
						? `Вчера (${timeString})`
						: `${timeString}`;
			return dateString;
		};

		return (
			<div
				className='serials-in-day-block'
				key={time}>
				<div>{getDateString(time)}</div>
				<div>serials</div>
			</div>
		);
	};

	return (
		<div className='last-receipts-container'>
			<div className='last-receipts-wrap'>
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

				<div className='films-container'>
					<div className='films-cards'>
						{films.map(film => {
							return createFilmCard(film);
						})}
					</div>

					<div className='serials-last-series'>
						<h4 className='serials-title'>Горячие обновления сериалов:</h4>
						<div className='serials'>
							{times.map(time => {
								return createDayBlock(time);
							})}
						</div>
					</div>
				</div>
			</div>

			<div className='lastword'></div>
		</div>
	);
}
