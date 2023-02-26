import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/appPreview.scss';
import { AppsPreviewProps } from './interfaces';

export default function AppsPreview({ projects }: AppsPreviewProps) {
	return (
		<div className='app-preview_container'>
			<div className='app-preview_wrap'>
				<>
					{projects &&
						projects.map(project => {
							return (
								<div
									key={`app-${project.id}`}
									className='app'>
									{project.url ? (
										<Link
											to={project.url}
											className='app_inner'
											style={{
												backgroundImage: project.imgPreview
													? `url(${require('../img/' + project.imgPreview)})`
													: `url(${require('../img/cloud.png')})`,
												backgroundSize: project.imgPreview ? 'cover' : 'contain'
											}}
										/>
									) : (
										// remove later...
										<div
											className='app_inner'
											style={{
												backgroundImage: project.imgPreview
													? `url(${require('../img/' + project.imgPreview)})`
													: `url(${require('../img/cloud.png')})`,
												backgroundSize: project.imgPreview ? 'cover' : 'contain'
											}}
										/>
										//////////////////////////
									)}
								</div>
							);
						})}
					{!projects && <h4 className='no-apps_message'>У вас ещё нет проектов</h4>}
					<div className='app'>
						<div
							className='app_inner'
							style={{
								backgroundImage: `url(${require('../img/plus-svg.svg')})`,
								backgroundSize: 'contain'
							}}
						/>
					</div>
				</>
			</div>
		</div>
	);
}
