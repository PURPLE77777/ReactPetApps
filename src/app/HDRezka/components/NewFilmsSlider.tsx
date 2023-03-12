import React, { useEffect, useRef, useState } from 'react';
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
		countCardsOnOneList: 8
	};
	const btnSliderStyle = {
		top: (sliderConfig.imgHeight + 8 - sliderConfig.sliderBtnHeight) / 2,
		height: sliderConfig.sliderBtnHeight,
		width: sliderConfig.sliderBtnWidth
	};

	const cardsContainer: React.RefObject<HTMLDivElement> = useRef(null);
	let currentPage = 0; // in current order by index
	let containerPage = sliderConfig.countLists; // in slider-cards-container order by index
	const prevFilmsPage = () => {
		let ctr = cardsContainer.current;
		if (ctr) {
			if (currentPage == 0) {
				if (containerPage == 0) {
					ctr.style.transition = 'none';
					ctr.style.marginLeft = `-${100 * sliderConfig.countLists + 0.55}%`;
					let containerChilds = ctr.childNodes;
					let mainPagesClones = [];
					for (let i = 0; i < sliderConfig.countLists; i++) {
						mainPagesClones.push(containerChilds[0].cloneNode(true));
						containerChilds[0].remove();
					}
					for (let i = mainPagesClones.length - 1; i >= 0; i--) {
						containerChilds[sliderConfig.countLists].before(mainPagesClones[i]);
					}
					containerPage = sliderConfig.countLists;
					showLastPage();
				} else {
					showLastPage();
				}
			} else {
				currentPage--;
			}
			containerPage--;
			setTimeout(() => {
				if (ctr) {
					ctr.style.transition = 'margin-left 0.5s linear';
					ctr.style.marginLeft = `calc(${ctr.style.marginLeft} + 100%)`;
				}
			}, 1);
		}
	};

	const showLastPage = () => {
		let pages = document.querySelectorAll('.slider-page');
		let lastPage = pages[pages.length - 1];
		let clonePage = lastPage.cloneNode(true);
		let prevSibl = pages[0].previousSibling;
		let prevSiblClone = prevSibl?.cloneNode();
		prevSibl?.remove();
		pages[0].before(clonePage);
		if (prevSiblClone) lastPage.before(prevSiblClone);
		lastPage.remove();
	};

	const showFirstPage = () => {
		let pages = document.querySelectorAll('.slider-page');
		let firstPage = pages[0];
		let clonePage = firstPage.cloneNode(true);
		let nextSibl = pages[pages.length - 1].nextSibling;
		let nextSiblClone = nextSibl?.cloneNode();
		nextSibl?.remove();
		pages[pages.length - 1].after(clonePage);
		if (nextSiblClone) firstPage.before(nextSiblClone);
		firstPage.remove();
	};

	const nextFilmsPage = () => {
		let ctr = cardsContainer.current;
		if (ctr) {
			if (currentPage == sliderConfig.countLists - 1) {
				if (containerPage == sliderConfig.countLists * 3 - 1) {
					ctr.style.marginLeft = `-${100 * (sliderConfig.countLists * 2 - 1) + 0.55}%`;
					ctr.style.transition = 'none';
					let containerChilds = ctr.childNodes;
					let mainPagesClones = [];
					for (let i = 0; i < sliderConfig.countLists; i++) {
						mainPagesClones.push(containerChilds[containerChilds.length - 1].cloneNode(true));
						containerChilds[containerChilds.length - 1].remove();
					}
					for (let i = 0; i < mainPagesClones.length; i++) {
						containerChilds[sliderConfig.countLists - 1].after(mainPagesClones[i]);
					}
					containerPage = sliderConfig.countLists * 2 - 1;
					showFirstPage();
				} else {
					showFirstPage();
				}
			} else {
				currentPage++;
			}
			containerPage++;
			setTimeout(() => {
				if (ctr) {
					ctr.style.transition = 'margin-left 0.5s linear';
					ctr.style.marginLeft = `calc(${ctr.style.marginLeft} - 100%)`;
				}
			}, 1);
		}
	};

	const createSliderPageClone = (num: number) => {
		return (
			<div
				style={{
					minWidth: (sliderConfig.imgWidth + 8 + 10) * sliderConfig.countCardsOnOneList
				}}
				key={`prev-page-${num}`}
			/>
		);
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
			<div className='slider-btns-wrap'>
				<button
					className='slider-btn-prev'
					style={btnSliderStyle}
					onClick={prevFilmsPage}>
					<span className='slider-btn-prev_arrow-left' />
				</button>
				<button
					className='slider-btn-next'
					style={btnSliderStyle}
					onClick={nextFilmsPage}>
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
					style={{
						marginLeft: '-300.55%',
						transition: 'margin-left 0.5s linear'
					}}
					ref={cardsContainer}>
					{Array.from({ length: sliderConfig.countLists }, (_, i) => i).map(num => {
						return createSliderPageClone(10 + num);
					})}
					{Array.from({ length: sliderConfig.countLists }, (_, i) => i).map(num => {
						return createSliderPage(num);
					})}
					{Array.from({ length: sliderConfig.countLists }, (_, i) => i).map(num => {
						return createSliderPageClone(20 + num);
					})}
				</div>
			</div>
		</div>
	);
}
