import React, { useEffect, useRef, useState } from 'react';
import '../scss/newFilmsSlider.scss';
import { Film } from './interfaces';
import lastFilms from '../dataset/last_films.json';
import { Link } from 'react-router-dom';

export default function NewFilmsSlider() {
	const [selectedChapter, setSelectedChapter] = useState<HTMLSpanElement | null>(null);
	const [newFilms, setNewFilms] = useState<Film[]>([]);

	const selectChapter = (e: React.SyntheticEvent) => {
		selectedChapter?.classList.remove('selected-chapter');
		if ((e.target as HTMLSpanElement).classList.contains('show-all_span')) setSelectedChapter(null);
		else setSelectedChapter(e.target as HTMLSpanElement);
	};

	useEffect(() => {
		selectedChapter?.classList.add('selected-chapter');
	}, [selectedChapter]);

	useEffect(() => {
		setNewFilms(lastFilms);
	}, []);

	const sliderConfig = {
		imgWidth: 92,
		imgHeight: 140,
		sliderBtnWidth: 35,
		sliderBtnHeight: 100,
		countLists: 3,
		countCardsOnOneList: 8,
		titleBottomPadding: 12,
		titleLineHeight: 16
	};
	const btnSliderStyle = {
		top:
			(sliderConfig.imgHeight + 8 - sliderConfig.sliderBtnHeight) / 2 +
			sliderConfig.titleBottomPadding +
			sliderConfig.titleLineHeight,
		height: sliderConfig.sliderBtnHeight,
		width: sliderConfig.sliderBtnWidth
	};

	const cardsContainer: React.RefObject<HTMLDivElement> = useRef(null);
	let currentPage = 0;
	const pageWidth: number = (sliderConfig.imgWidth + 8 + 10) * sliderConfig.countCardsOnOneList;
	const removeLastPage = () => {
		const pages = document.querySelectorAll('.slider-page');
		const lastPage = pages[pages.length - 1];
		const clonePage = lastPage.cloneNode(true);
		pages[0].before(clonePage);
		lastPage.remove();
	};

	const removeFirstPage = () => {
		const pages = document.querySelectorAll('.slider-page');
		const firstPage = pages[0];
		const clonePage = firstPage.cloneNode(true);
		pages[pages.length - 1].after(clonePage);
		firstPage.remove();
	};

	const prevPage = () => {
		const ctr = cardsContainer.current;
		if (ctr && currentPage == 0) {
			ctr.style.transition = 'none';
			ctr.style.marginLeft = `calc(${ctr.style.marginLeft} - ${pageWidth}px)`;
			removeLastPage();
		} else {
			currentPage--;
		}
		setTimeout(() => {
			if (ctr) {
				ctr.style.transition = 'margin-left 0.5s linear';
				ctr.style.marginLeft = `calc(${ctr.style.marginLeft} + ${pageWidth}px)`;
			}
		}, 1);
	};

	const nextPage = () => {
		const ctr = cardsContainer.current;
		if (ctr && currentPage == sliderConfig.countLists - 1) {
			ctr.style.marginLeft = `calc(${ctr.style.marginLeft} + ${pageWidth}px)`;
			ctr.style.transition = 'none';
			removeFirstPage();
		} else {
			currentPage++;
		}
		setTimeout(() => {
			if (ctr) {
				ctr.style.transition = 'margin-left 0.5s linear';
				ctr.style.marginLeft = `calc(${ctr.style.marginLeft} - ${pageWidth}px)`;
			}
		}, 1);
	};

	const createSliderPage = (num: number) => {
		return (
			<div
				className='slider-page'
				key={`page-${num}`}>
				{newFilms.map((film, index) => {
					if (
						index >= num * sliderConfig.countCardsOnOneList &&
						index < (num + 1) * sliderConfig.countCardsOnOneList
					)
						return createSliderFilmCard(film);
				})}
			</div>
		);
	};

	const createSliderFilmCard = (film: Film) => {
		return (
			<Link
				to={`filmProfile/${film.id}`}
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
					<p className='film-short-info'>
						{new Date(film.date).getFullYear()}
						{film.country.length > 1 ? ` - ..., ` : `, `}
						{film.country[0] + ', ' + film.genre[0]}
					</p>
				</div>
			</Link>
		);
	};

	return (
		<div className='slider-container'>
			<div className='slider-btns-wrap max-w960'>
				<button
					className='slider-btn-prev'
					style={btnSliderStyle}
					onClick={prevPage}>
					<span className='slider-btn-prev_arrow-left' />
				</button>
				<button
					className='slider-btn-next'
					style={btnSliderStyle}
					onClick={nextPage}>
					<span className='slider-btn-prev_arrow-right' />
				</button>
			</div>
			<div
				className='slider-cards-wrap'
				style={{
					width: pageWidth - 10
				}}>
				<div
					className='chapters max-w960'
					style={{
						paddingBottom: sliderConfig.titleBottomPadding,
						lineHeight: `${sliderConfig.titleLineHeight}px`
					}}>
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
					{selectedChapter && (
						<>
							{' '}
							<small
								className='chapter'
								onClick={selectChapter}>
								(<span className='show-all_span'>отобразить все новинки</span>)
							</small>
						</>
					)}
				</div>
				<div
					className='slider-cards-container'
					style={{
						marginLeft: '-10px',
						transition: 'margin-left 0.5s linear'
					}}
					ref={cardsContainer}>
					{Array.from({ length: sliderConfig.countLists }, (_, i) => i).map(num => {
						return createSliderPage(num);
					})}
				</div>
			</div>
		</div>
	);
}
