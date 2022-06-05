export const skills_list = [
    // Languages
    'JavaScript',
    'TypeScript',
    'React.js',
    'Redux.js',
    'Next.js',
    'Node.js',
    'Java',
    'Kotlin',
    'Ruby',
    'Ruby on Rails',
    'Python',
    'Flask',
    'Elixir',
    'Pheonix',
    // Web Technologies
    'Rest',
    'WebSockets',
    'HTML5',
    'CSS3',
    // Data Storage
    'PostgreSQL',
    'SQLite',
    'MongoDB',
    'Firebase'
];

const Skills = () => {
    return (
        <div data-testid='skills'>
            <h2>Skills</h2>
            <ul>
                {
                    skills_list.map((skill: string) => (
                        <li key={skill}>{ skill }</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Skills;
