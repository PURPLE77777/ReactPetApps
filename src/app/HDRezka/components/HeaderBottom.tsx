import React, { useRef } from 'react';
import '../scss/headerBottom.scss';
import SearchIcon from '../img/search-icon.svg';
import DropDownIcon from '../img/arrow_down.svg';

export default function HeaderBottom() {
	const search: React.RefObject<HTMLInputElement> = useRef(null);
	const searchIcon: React.RefObject<HTMLImageElement> = useRef(null);
	const onSearchFocus = () => {
		search.current?.classList.add('search_input__onfocused');
		searchIcon.current?.classList.add('search_img__onfocused');
	};
	const onSearchBlur = () => {
		search.current?.classList.remove('search_input__onfocused');
		searchIcon.current?.classList.remove('search_img__onfocused');
	};

	return (
		<div className='header_wrap-bottom'>
			<div className='header-bottom'>
				<div className='header-bottom_menu'>
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
				<div className='search'>
					<img
						ref={searchIcon}
						className='search_img'
						src={`${SearchIcon}`}
					/>
					<input
						ref={search}
						onFocus={onSearchFocus}
						onBlur={onSearchBlur}
						placeholder='Поиск фильмов и сериалов'
						className='search_input'></input>
				</div>
			</div>
		</div>
	);
}
