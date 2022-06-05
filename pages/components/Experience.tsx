export const experience_list = [
    {
        employer: 'Coterie Insurance',
        date_from: 'December 2020',
        date_to: 'Present',
        description: 'Tech lead and senior engineer for the front-end horizontal.',
        projects: ['Quote Flow White Labelling', 'Shared Component Library', 'Billing Center', 'Hackathon'],
    },
    {
        employer: 'Launch Scout',
        date_from: 'February 2018',
        date_to: 'December 2020',
        description: 'Engineer consultant for a variety of clients, inlcuding Kroger.com, GIS Dynamics, and Coterie Insurance',
        projects: ['Kroger.com Seach and Product Experiences', 'Go iLawn application development', 'Quote Flow product enhancement'],
    },
];

const Experience = () => {
    return (
        <div data-testid='experience'>
            <h2>Experience</h2>
            <div>
                {
                    experience_list.map(experience => (
                        <div data-testid={ `${experience.employer}-exp` } key={ experience.employer }>
                            <h3>{ experience.employer }</h3>
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
