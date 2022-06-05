export const experience_list = [
    {
        title: 'Coterie Insurance',
        description: 'worked for ci',
        projects: ['Quote Flow White Labelling', 'Shared Component Library', 'Billing Center', 'Hackathon']
    },
    {
        title: 'Launch Scout',
        description: 'worked for ls',
        projects: ['Kroger', 'GIS Dynamics', 'Coterie Insurance']
    },
];

const Experience = () => {
    return (
        <div data-testid='experience'>
            <h2>Experience</h2>
            <div>
                {
                    experience_list.map(experience => (
                        <div data-testid={ `${experience.title}-exp` } key={ experience.title }>
                            <h3>{ experience.title }</h3>
                            <p>{ experience.description }</p>
                            <ul>
                                { experience.projects.map(project => (
                                    <li data-testid={ `${project}-proj` } key={ project }>{ project }</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Experience;
