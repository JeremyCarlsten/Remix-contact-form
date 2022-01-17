import { Link, useLoaderData } from 'remix';

const totalyLegitProjects = [
    { id: 1, name: 'Youtub' },
    { id: 2, name: 'Facespace' },
    { id: 3, name: 'Teller' },
    { id: 4, name: 'InstaPics' }
];

export function loader() {
    //go get stuff from db or whatever.
    return {data: totalyLegitProjects}
}

export default function ProjectsRoute() {
    const {data} = useLoaderData();

    const projectList = data.map((project) => {
        return (
            <li key={project.id}>
                <Link to={`/projects/${project.name}`}>{project.name}</Link>
            </li>
        )
    });

    return (
        <div className="projects">
            <h1>Projects</h1>
            <ul className="projects-list">
                {projectList}
            </ul>
        </div>
    );
}