import React from 'react';
import '../scss/filmsBySeries.scss';
import notEasyGender from '../img/dont_easy_gender.png';
import notEasyGender2 from '../img/dont_easy_gender_2.png';

export default function FilmsBySeries() {
	return (
		<div className='films-series-container'>
			<div className='films-series-content'>
				<a
					href='#'
					className='series'>
					<img
						className='series_img'
						src={notEasyGender}></img>
					<span className='series_quote'>Не слабый пол!</span>
				</a>
				<a
					href='#'
					className='series'>
					<img
						className='series_img'
						src={notEasyGender2}></img>
					<span className='series_quote'>Женщины, которые изменили мир</span>
				</a>
			</div>
		</div>
	);
}
