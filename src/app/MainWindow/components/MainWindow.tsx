import React, { useEffect, useState } from 'react';
import '../scss/mainWindow';
import mainBgs from '../dataset/mainBgs';
import AppsPreview from './AppsPreview';
import userData from '../dataset/users.json';

interface Project {
	id: number;
	name: string;
	imgPreview: string;
}

interface User {
	id: number;
	user: string;
	role: string;
	projects: Project[];
}

export default function MainWindow() {
	const [user, setUser] = useState<User | null>(null);

	const randomBgImg = mainBgs[Math.round(Math.random() * (mainBgs.length - 1))];
	const styleMainConfig = { backgroundImage: `url(${require('../img/' + randomBgImg)})` };

	useEffect(() => {
		setUser(userData);
	}, []);

	return (
		<div
			id='mainWindow'
			style={styleMainConfig}>
			<AppsPreview projects={user?.projects.length ? user.projects : null} />
		</div>
	);
}
