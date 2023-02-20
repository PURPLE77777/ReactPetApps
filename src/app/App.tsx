import React, { useEffect, useState } from 'react';
import user from './MainWindow/dataset/users.json';
import MainWindow from './MainWindow/components/MainWindow';
import './main';
import mainBackgrounds from './MainWindow/dataset/main_backgds.json';

export default function App() {
	const [mainBgs, setMainBgs] = useState<string[]>([]);
	const [recBgImg, setRecBgImg] = useState<string>('');

	useEffect(() => {
		setMainBgs(mainBackgrounds.bg_imgs);
		const rand: number = Math.random() * (mainBgs.length - 1);
		setRecBgImg(mainBgs[rand]);
	}, []);

	return <MainWindow urlBgImg={recBgImg} />;
}
