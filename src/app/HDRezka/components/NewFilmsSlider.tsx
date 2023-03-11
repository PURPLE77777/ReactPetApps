import React, { useEffect, useRef, useState } from 'react';
import '../scss/newFilmsSlider.scss';
import { Film } from './interfaces';
import lastFilms from '../dataset/last_films.json';

export default function NewFilmsSlider() {
	const [selectedChapter, setSelectedChapter] = useState<HTMLSpanElement | null>(null);
	const [newFilms, setNewFilms] = useState<Film[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const selectChapter = (e: React.SyntheticEvent) => {
		selectedChapter?.classList.remove('selected-chapter');
		setSelectedChapter(e.target as HTMLSpanElement);
	};

	const sliderConfig = {
		imgWidth: 92,
		imgHeight: 140,
		sliderBtnWidth: 35,
		sliderBtnHeight: 100,
		countLists: 3,
		countCardsOnOneList: 8
	};
	const btnSliderStyle = {
		top: (sliderConfig.imgHeight + 8 - sliderConfig.sliderBtnHeight) / 2,
		height: sliderConfig.sliderBtnHeight,
		width: sliderConfig.sliderBtnWidth
	};

	const cardsContainer: React.RefObject<HTMLDivElement> = useRef(null);
	const prevFilmCard = () => {
		if (cardsContainer.current) {
			if (currentPage == 1) {
				console.log(currentPage == 1);
				let lastCards = cardsContainer.current.childNodes;
				for (let i = 0; i == sliderConfig.countCardsOnOneList - 1; i++) {
					console.log(lastCards[lastCards.length - 1]);
					let node = lastCards[lastCards.length - 1].cloneNode(true);
					lastCards[lastCards.length - 1].remove();
					cardsContainer.current.prepend(node);
				}
				setCurrentPage(sliderConfig.countLists);
			} else {
				setCurrentPage(currentPage - 1);
			}
			cardsContainer.current.style.marginLeft = `calc(${cardsContainer.current.style.marginLeft} + 100%)`;
		}
	};

	const nextFilmCard = () => {
		if (cardsContainer.current) {
			if (currentPage == 4 && cardsContainer.current) {
				setCurrentPage(1);
			} else {
				setCurrentPage(currentPage + 1);
			}
			cardsContainer.current.style.marginLeft = `calc(${cardsContainer.current.style.marginLeft} - 100%)`;
		}
	};

	useEffect(() => {
		selectedChapter?.classList.add('selected-chapter');
	}, [selectedChapter]);

	useEffect(() => {
		setNewFilms(lastFilms);
	}, []);

	const createSliderFilmCard = (film: Film) => {
		return (
			<a
				className='film-card'
				style={{ width: sliderConfig.imgWidth + 8 }}
				key={`film-${film.id}`}>
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
					<span style={{ fontSize: 16, color: 'red' }}>{film.id}</span>
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
				className='slider-btns-wrap'
				style={{ padding: `0px ${sliderConfig.sliderBtnWidth + 10}px` }}>
				<button
					className='slider-btn-prev'
					style={btnSliderStyle}
					onClick={prevFilmCard}>
					<span className='slider-btn-prev_arrow-left' />
				</button>
				<button
					className='slider-btn-next'
					style={btnSliderStyle}
					onClick={nextFilmCard}>
					<span className='slider-btn-prev_arrow-right' />
				</button>
			</div>
			<div
				className='slider-cards-wrap'
				style={{
					width: (sliderConfig.imgWidth + 8 + 10) * sliderConfig.countCardsOnOneList
				}}>
				<div
					className='slider-cards-container'
					style={{ marginLeft: '-100%' }}
					ref={cardsContainer}>
					{newFilms.map(film => {
						return createSliderFilmCard(film);
					})}
				</div>
			</div>
		</div>
	);
}
