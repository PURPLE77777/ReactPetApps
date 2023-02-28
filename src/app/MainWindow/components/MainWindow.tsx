import React, { useEffect, useState } from 'react';
import '../scss/mainWindow';
import mainBgs from '../dataset/mainBgs';
import AppsPreview from './AppsPreview';
import userData from '../dataset/users.json';
import { User } from './interfaces';

export default function MainWindow() {
	const [user, setUser] = useState<User | null>(null);

	const randomBgImg = mainBgs[Math.round(Math.random() * (mainBgs.length - 1))];
	const styleMainConfig = { backgroundImage: `url(${require('../img/' + randomBgImg)})` };

	useEffect(() => {
		setUser(userData);
	}, []);

	return (
		<div
			id='mainwindow-container'
			style={styleMainConfig}>
			<AppsPreview projects={user?.projects.length ? user.projects : null} />
		</div>
	);
}
