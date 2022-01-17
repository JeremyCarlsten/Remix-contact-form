import { Link } from 'remix';

const totalyLegitProjects = [
    { id: 1, name: 'Youtub' },
    { id: 2, name: 'Facespace' },
    { id: 3, name: 'Teller' },
    { id: 4, name: 'InstaPics' }
];

export default function ProjectsRoute() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <ul className="projects-list">
                {totalyLegitProjects.map((project) => {
                    return (
                        <li key={project.id}>
                            <Link to={`/projects/${project.name}`}>{project.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}