import React, { useEffect, useState } from 'react';
import '../scss/mainWindow';
import bg1 from '../img/main_backgd_1.jpg';
import bg2 from '../img/main_backgd_2.jpg';
import bg3 from '../img/main_backgd_3.jpg';
import bg4 from '../img/main_backgd_4.jpg';
import bg5 from '../img/main_backgd_5.jpg';
import bg6 from '../img/main_backgd_6.jpg';
import bg7 from '../img/main_backgd_7.jpg';

export default function MainWindow() {
	const arrBg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];
	const randomImg = arrBg[Math.round(Math.random() * (arrBg.length - 1))];
	const styleMainConfig = { backgroundImage: `url(${randomImg})` };

	return (
		<div
			id='mainWindow'
			style={styleMainConfig}>
			MainWindow
		</div>
	);
}
