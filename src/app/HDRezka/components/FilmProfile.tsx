import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../scss/filmProfile';
import films from '../dataset/last_films.json';
import { Film } from './interfaces';
import { months } from '../../common/utils/months';

export default function FilmProfile() {
    const filmId = Number(useLoaderData());
    const [film, setFilm] = useState<Film | null>(null);
    const [filmDate, setFilmDate] = useState<Date | null>(null);

    useEffect(() => {
        films.forEach(filmItem => {
            if (filmItem.id == filmId) {
                setFilm(filmItem);
            }
        });
    }, []);

    useEffect(() => {
        film?.date && setFilmDate(new Date(film?.date));
    }, [film]);

    return film && <div className="film-profile-container max-w960">
        <h1>{film.name}</h1>
        <h4>{film.name}</h4>
        <div className="main-film-desc">
            <div className="film-trailer">
                <a className="trailet_img">
                    <img src={`${require('../img/' + film.img)}`}></img>
                </a>
                <button className="trailer_btn">
                    <span className='trailer_btn_img'></span>
                    <span className='trailer_btn_txt'>Смотреть трейлер</span>
                </button>
            </div>
            <div className="film-info">
                <div className="film-info-item">
                    <div className="info-title">Дата выхода:</div>
                    <div className="info">
                        {filmDate && `${filmDate.getUTCDate()} ${months[filmDate.getMonth()]} `}
                        <a className='link'>{filmDate?.getFullYear()} года</a>
                    </div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">Страна:</div>
                    <div className="info">
                        {film.country.map((item, ind, arr) => {
                            return <span key={`film-info-country-${ind}`}>
                                <a className="link">
                                    {item}
                                </a>
                                {ind == arr.length - 1 ? '' : ', '}
                            </span>;
                        })}
                    </div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">Режиссёр:</div>
                    <div className="person-info">
                        <a className="link">
                            {film.director}
                        </a>
                    </div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">Жанр:</div>
                    <div>
                        {film.genre.map((gen, ind, arr) => {
                            return <span key={`film-info-gen-${ind}`}>
                                <a className="person-info">
                                    {gen}
                                </a>
                                {ind == arr.length - 1 ? '' : ', '}
                            </span>;

                        })}
                    </div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">В качестве:</div>
                    <div>{film.quality}</div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">Возраст:</div>
                    <div>{film.age}+</div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">Время:</div>
                    <div>{film.duration / 60000} мин.</div>
                </div>
                <div className="film-info-item">
                    <div className="info-title">Из серии:</div>
                    <div className="info link"></div>
                </div>
                <div className="film-info-item">
                    <div className="info-title" style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>В ролях актёры:</div>
                    {film.actors.map((name, ind, arr) => {
                        return <a className="person-info" key={`film-actors-name-${ind}`}>
                            {name}{ind == arr.length - 1 ? '' : ', '}
                        </a>;
                    })}
                </div>
            </div>
        </div>

        <div className="film-desc">
            <h2>Про что {film.name}:</h2>
            <p>{film.description}</p>
        </div>
    </div>;
}
