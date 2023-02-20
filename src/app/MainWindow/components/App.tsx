import React, { useEffect, useState } from 'react';
import user from '../../dataset/users.json';
import '../scss/main';

export default function App() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		setUser(user);
	}, []);

	return <div className='mainWindow'></div>;
}
