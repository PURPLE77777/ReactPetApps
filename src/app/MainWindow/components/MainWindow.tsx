import React, { useEffect, useState } from 'react';
import '../scss/mainWindow';
import bg from '../img/main_backgd_1.jpg';

interface MainWindowProps {
	urlBgImg: string;
}

export default function MainWindow({ urlBgImg }: MainWindowProps) {
	const styleMainConfig = { backgroundImage: 'url("../img/main_backgd_1.jpg")' };

	return <div id='mainWindow'>MainWindow</div>;
}
