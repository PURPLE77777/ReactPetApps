import React, { useEffect, useState } from 'react';
import '../scss/newFilmsReceipts.scss';
import lastFilms from '../dataset/last_films.json';
import lastEpisodes from '../dataset/last_series.json';
import { Episode, Film } from './interfaces';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { months } from '../../common/utils/months';

export default function NewFilmsReceipts() {
	const [films, setFilms] = useState<Film[]>([]);
	const [serials, setSerials] = useState<Episode[]>([]);
	const page = Number(useLoaderData());
	const [currentPage, setCurrentPage] = useState<number>(page ? page : 1);
	if (page && page != currentPage) setCurrentPage(page);

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isPageSelected = pathname.includes('/receipts/');

	const cardConfig = {
		imgWidth: 166,
		imgHeight: 250
	};

	const cardsFilmsConfig = {
		countCardsOnPage: 9,
		countCenterBtns: 3
	};

	useEffect(() => {
		setFilms(lastFilms);
		setSerials(lastEpisodes);
	}, []);

	const arraySeriesHandler = (() => {
		let curTime: number = new Date().getTime();
		//curTime = 86_400_000 * Math.floor(curTime / 86_400_000) - 3 * 3_600_000; // 1_679_616_000_000

		// this delete and uncomment previous
		curTime = 1679616000000 - 3 * 3_600_000;
		/////////////

		return (order: number) => {
			return curTime - 86_400_000 * order;
		};
	})();
	const times = Array.from({ length: 6 }, (_, i) => arraySeriesHandler(i));

	const createFilmCard = (film: Film) => {
		return (
			<Link
				to={`filmProfile/${film.id}`}
				className={isPageSelected ? 'film-card margin-left-6' : 'film-card'}
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
			</Link>
		);
	};

	const createDayBlock = (time: number) => {
		const getDateString = () => {
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
		const serialsByTime = serials.filter((episode) => {
			return episode.date >= time && episode.date < time + 86_400_000;
		});

		const getSerialName = (episode: Episode) => {
			return <>
				<span className='serial-name_first-span'>{`${episode.name} `}</span>
				<span className='serial-name_second-span'>{`(${episode.season} сезон)`}</span>
			</>;
		};

		const getSerialEpisode = (episode: Episode) => {
			return <>
				<span>{`${episode.episode} серия`}</span>
				<span>{`(${episode.translater})`}</span>
			</>;
		};


		const headerHandler = (e: React.SyntheticEvent) => {
			const serialsContainer = e.currentTarget.nextElementSibling as HTMLDivElement;
			const spanExpand = e.currentTarget.childNodes[1] as HTMLSpanElement;
			serialsContainer.classList.toggle('collapse');
			spanExpand.classList.toggle('color-white');
			if (serialsContainer.classList.contains('collapse')) {
				spanExpand.innerHTML = 'развернуть';
			} else {
				spanExpand.innerHTML = 'свернуть';
			}
		};

		return (
			<div
				className='serials-in-day-block'
				key={time}>
				<div className='day-block-header' onClick={time == times[0] || time == times[1] ? undefined : headerHandler}>
					<span className='day-block-header_span-date'>{getDateString()}</span>
					<span className={time == times[0] || time == times[1] ? 'day-block-header_span-expand display-none' : 'day-block-header_span-expand'}>развернуть</span>
				</div>
				<div className={time == times[0] || time == times[1] ? 'serials-container' : 'serials-container collapse'}>
					{serialsByTime.map((episode) => {
						return <div className='serial-block' key={`serial_episode-${episode.id}`}>
							<div className="serial-name">{getSerialName(episode)}</div>
							<div className="serial-episode">{getSerialEpisode(episode)}</div>
						</div>;
					})}
				</div>
			</div>
		);
	};

	const createNavigationBtns = () => {
		const countBtns = Math.ceil(films.length / cardsFilmsConfig.countCardsOnPage);
		const difference = Math.floor(cardsFilmsConfig.countCenterBtns / 2);

		const btns = [];
		let countPaintedCenterBtns = 0,
			nTroit = false;
		for (let i = 1; i <= countBtns; i++) {
			if (i == 1) {
				if (currentPage !== 1) {
					btns.push('prev');
				}
				btns.push(i);
				if (currentPage - difference > 2) {
					btns.push('troit');
					i = countBtns - (currentPage + difference) > 1 ? currentPage - difference - 1 : countBtns - cardsFilmsConfig.countCenterBtns - 1;
				}
				continue;
			}
			btns.push(i);
			if (countPaintedCenterBtns + 1 == cardsFilmsConfig.countCenterBtns) {
				if (!nTroit && countBtns - (currentPage + difference) > 1) {
					nTroit = true;
					btns.push('troit');
					i = countBtns - 1;
					continue;
				}

			} else {
				countPaintedCenterBtns++;
			}
			if (i == countBtns && currentPage != countBtns) {
				btns.push('next');
			}
		}

		return <>
			{btns.map((btn, ind) => {
				return btn == 'next' || btn == 'prev' ?
					<button key={`btn-nav-${btn}-${ind}`}
						onClick={() => {
							btn == 'prev' ?
								navigate(isPageSelected ? `../receipts/${currentPage - 1}` : `receipts/${currentPage - 1}`) :
								navigate(isPageSelected ? `../receipts/${currentPage + 1}` : `receipts/${currentPage + 1}`);
						}}
						className='btn-navigation'>
						{btn == 'prev' ? '<' : '>'}
					</button> :
					btn == 'troit' ? <span className='navigation-page troit' key={`btn-nav-${btn}-${ind}`}>...</span> :
						<Link to={isPageSelected ? `../receipts/${btn}` : `receipts/${btn}`}
							key={`btn-nav-${btn}-${ind}`}
							className={btn == currentPage ?
								'navigation-page current-page' :
								'navigation-page'}>
							{btn}
						</Link>;
			})}
		</>;
	};

	return (
		<div className='last-receipts-container'>
			<div className='last-receipts-wrap max-w960'>
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
					<div className='films-cards-slider'>
						<div className={isPageSelected ? 'films-cards width-714' : 'films-cards'}>
							{films.map((film, ind) => {
								if (ind >= (currentPage - 1) * cardsFilmsConfig.countCardsOnPage && ind < currentPage * cardsFilmsConfig.countCardsOnPage) {
									return createFilmCard(film);
								}
							})}
						</div>
						<div className='pages-navigation-btns'>
							{createNavigationBtns()}
						</div>
					</div>

					{!isPageSelected && <div className='serials-last-series'>
						<h4 className='serials-title'>Горячие обновления сериалов:</h4>
						<div className='serials'>
							{times.map(time => {
								return createDayBlock(time);
							})}
						</div>
					</div>}

				</div>
			</div>

			{!isPageSelected && <div className='lastword max-w960'>
				<h2>Смотреть фильмы в HD онлайн</h2>
				<p>
					Чем себя занять после тяжелых трудовых будней? Повседневная жизнь предлагает массу вариантов, но практически каждый человек на нашей планете любит просматривать любимые кинокартины. Мы создали удобный и уникальный в своем роде кинотеатр для просмотра видео в комфортных для тебя условиях. Тебе больше никогда не придется искать какую-то свободную минутку, чтобы найти подходящие кинотеатры, успеть купить в кассе или забронировать через интернет билеты на любимые места. Все это осталось позади больших перспектив смотреть фильмы онлайн в хорошем HD качестве на нашем сайте. Дорогой гость ресурса, предлагаем тебе прямо сейчас погрузиться в удивительно увлекательный мир - <strong>новинки кинопроката</strong> доступны всем пользователям круглосуточно!
				</p>
				<h2>Сериалы онлайн</h2>
				<p>
					Что же касается предлагаемого списка фильмов и сериалов, которые ты можешь здесь смотреть в HD качестве, то он постоянно расширяется и дополняется картинами популярнейших хитов Голливуда. Словом, каждый поклонник высококачественного мирового кинематографа обязательно найдет на нашем сайте то, что ему доставит море удовольствия от просмотра онлайн в домашних условиях! Зови друзей, и ты замечательно проведешь время вместе с близкими и родными людьми - наш ресурс станет прекрасным аккомпанементом для твоего расслабленного и веселого отдыха!
				</p>
				<h2>Фильмы и сериалы на iPhone, iPad и Android онлайн</h2>
				<p>
					К счастью наших посетителей, наш кинотеатр предлагает смотреть любимые фильмы и сериалы на мобильных устройствах - прямо со своего смартфона либо планшета под управлением iPhone, iPad или Android, находясь в любой точке мира! И прямо сейчас мы готовы предложить тебе воспользоваться всеми широкими возможностями сайта и перейти к сеансу онлайн просмотра лучших картин в привлекательном для глаз в HD качестве. Желаем тебе получить море удовольствий от самого массового и популярного вида искусства!
				</p>
			</div>}
		</div>
	);
}
