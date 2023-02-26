export interface AppsPreviewProps {
	projects?: Project[] | null;
}

export interface Project {
	id: number;
	name: string;
	imgPreview: string;
	url: string;
}

export interface User {
	id: number;
	user: string;
	role: string;
	projects: Project[];
}
