import React, { useRef } from 'react';
import '../scss/headerBottom.scss';
import SearchIcon from '../img/search-icon.svg';
import DropDownIcon from '../img/arrow_down.svg';

export default function HeaderBottom() {
	const searchInput: React.RefObject<HTMLInputElement> = useRef(null);
	const search: React.RefObject<HTMLInputElement> = useRef(null);
	const searchIcon: React.RefObject<HTMLImageElement> = useRef(null);
	const hbMenu: React.RefObject<HTMLDivElement> = useRef(null);

	const addSearchFocus = () => {
		searchInput.current?.focus();
		searchInput.current?.classList.add('search_input__onfocused');
		searchIcon.current?.classList.add('search_img__onfocused');
		searchInput.current?.classList.add('width-100-proc');
		search.current?.classList.add('width-100-proc');
		hbMenu.current?.classList.add('width-0-proc');
	};
	const onSearchFocus = () => {
		addSearchFocus();
	};
	const onSearchBlur = () => {
		searchInput.current?.classList.remove('search_input__onfocused');
		searchIcon.current?.classList.remove('search_img__onfocused');
		searchInput.current?.classList.remove('width-100-proc');
		search.current?.classList.remove('width-100-proc');
		hbMenu.current?.classList.remove('width-0-proc');
	};
	const onImgSearchClick = () => {
		addSearchFocus();
	};

	return (
		<div className='header_wrap-bottom'>
			<div className='header-bottom'>
				<div
					className='header-bottom_menu'
					ref={hbMenu}>
					<div className='menu_item'>
						<span className='menu-item_text with-dropdown'>Фильмы</span>
						<img
							src={DropDownIcon}
							className='dropdown-icon'
						/>
					</div>
					<div className='menu_item'>
						<span className='menu-item_text with-dropdown'>Сериалы</span>
						<img
							src={DropDownIcon}
							className='dropdown-icon'
						/>
					</div>
					<div className='menu_item'>
						<span className='menu-item_text with-dropdown'>Мультфильмы</span>
						<img
							src={DropDownIcon}
							className='dropdown-icon'
						/>
					</div>
					<div className='menu_item'>
						<span className='menu-item_text with-dropdown'>Аниме</span>
						<img
							src={DropDownIcon}
							className='dropdown-icon'
						/>
					</div>
					<div className='menu_item'>
						<span className='menu-item_text'>Новинки</span>
					</div>
					<div className='menu_item'>
						<span className='menu-item_text'>Анонсы</span>
					</div>
					<div className='menu_item'>
						<span className='menu-item_text'>Подборки</span>
					</div>
				</div>
				<div
					className='search'
					ref={search}>
					<img
						ref={searchIcon}
						onClick={onImgSearchClick}
						className='search_img'
						src={`${SearchIcon}`}
					/>
					<input
						ref={searchInput}
						onFocus={onSearchFocus}
						onBlur={onSearchBlur}
						placeholder='Поиск фильмов и сериалов'
						className='search_input'
					/>
				</div>
			</div>
		</div>
	);
}
