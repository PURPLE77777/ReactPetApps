import React, { useEffect, useState } from 'react';
import '../scss/newFilmsSlider.scss';
import { Film } from './interfaces';
import lastFilms from '../dataset/last_films.json';

export default function NewFilmsSlider() {
	const [selectedChapter, setSelectedChapter] = useState<HTMLSpanElement | null>(null);
	const [newFilms, setNewFilms] = useState<Film[]>([]);

	const selectChapter = (e: React.SyntheticEvent) => {
		selectedChapter?.classList.remove('selected-chapter');
		setSelectedChapter(e.target as HTMLSpanElement);
	};

	const sliderConfig = {
		imgWidth: 92,
		imgHeight: 140,
		sliderBtnWidth: 35,
		sliderBtnHeight: 100
	};
	const btnSliderStyle = {
		top: (sliderConfig.imgHeight + 8 - sliderConfig.sliderBtnHeight) / 2,
		height: sliderConfig.sliderBtnHeight,
		width: sliderConfig.sliderBtnWidth
	};

	useEffect(() => {
		selectedChapter?.classList.add('selected-chapter');
	}, [selectedChapter]);

	useEffect(() => {
		setNewFilms(lastFilms);
	}, []);

	const createSliderFilmCard = (film: Film, key: string) => {
		return (
			<a
				className='film-card'
				style={{ width: sliderConfig.imgWidth + 8 }}
				key={key}>
				<div
					className='film-pic'
					style={{ height: sliderConfig.imgHeight }}>
					<img
						className='film-pic_img'
						height={sliderConfig.imgHeight}
						width={sliderConfig.imgWidth}
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

	return (
		<div className='slider-wrap'>
			<div className='slider-container'>
				<div className='chapters'>
					Новые{' '}
					<span
						className='chapter'
						onClick={selectChapter}>
						фильмы
					</span>
					,{' '}
					<span
						className='chapter'
						onClick={selectChapter}>
						сериалы
					</span>
					,{' '}
					<span
						className='chapter'
						onClick={selectChapter}>
						мультфильмы
					</span>{' '}
					и{' '}
					<span
						className='chapter'
						onClick={selectChapter}>
						аниме
					</span>
					<span
						className='chapter-show-all'
						onClick={selectChapter}>
						{' '}
						(
						<span
							className='chapter-show-all_span'
							onClick={selectChapter}>
							отобразить все новинки
						</span>
						)
					</span>
				</div>
				<div
					className='slider'
					style={{ padding: `0px ${sliderConfig.sliderBtnWidth + 10}px` }}>
					<button
						className='slider-btn-prev'
						style={btnSliderStyle}>
						<span className='slider-btn-prev_arrow-left'></span>
					</button>
					<button
						className='slider-btn-next'
						style={btnSliderStyle}>
						<span className='slider-btn-prev_arrow-right'></span>
					</button>
					{newFilms.map(film => {
						return createSliderFilmCard(film, `film-${film.id}`);
					})}
				</div>
			</div>
		</div>
	);
}
