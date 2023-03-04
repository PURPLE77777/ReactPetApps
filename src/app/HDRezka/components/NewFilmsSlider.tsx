import React, { useEffect, useState } from 'react';
import '../scss/newFilmsSlider.scss';

export default function NewFilmsSlider() {
	const [selectedChapter, setSelectedChapter] = useState<HTMLSpanElement | null>(null);

	useEffect(() => {
		selectedChapter?.classList.add('selected-chapter');
	}, [selectedChapter]);

	const selectChapter = (e: React.SyntheticEvent) => {
		selectedChapter?.classList.remove('selected-chapter');
		setSelectedChapter(e.target as HTMLSpanElement);
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
				<div className='slider'>Slider</div>
			</div>
		</div>
	);
}
