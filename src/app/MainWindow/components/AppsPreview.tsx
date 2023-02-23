import React from 'react';
import '../scss/appPreview.scss';
import ProjectPreview from './ProjectPreview';

interface Project {
	id: number;
	name: string;
	imgPreview: string;
}

interface AppsPreviewProps {
	projects?: Project[] | null;
}

export default function AppsPreview({ projects }: AppsPreviewProps) {
	return (
		<div className='app-preview_container'>
			<div className='app-preview_wrap'>
				{!projects ? (
					<div className='no-apps'>
						<h4>У вас ещё нет проектов</h4>
					</div>
				) : (
					// <div
					// 	className='app'
					// 	style={{ backgroundImage: 'url(../img/cloud.png)' }} />
					<>
						{projects.map(project => {
							return (
								<div
									key={`app-${project.id}`}
									className='app'
									style={{
										backgroundImage: project.imgPreview
											? `url(${require('../img/' + project.imgPreview)})`
											: `url(${require('../img/cloud.png')})`
									}}></div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
}
