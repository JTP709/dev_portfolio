export const skills_list = [
    // Languages
    {
        type: 'Languages',
        list: [
            ['JavaScript', 5],
            ['TypeScript', 3],
            ['Java', 1],
            ['Ruby', 1],
            ['Python', 2],
            ['Elixir', 1],
        ],
    },
    // Libraries/Frameworks
    {
        type: 'Libraries/Frameworks',
        list: [
            ['React.js', 5],
            ['Redux.js', 4],
            ['Next.js', 2],
            ['Node.js', 2],
            ['Kotlin', 1],
            ['Ruby on Rails', 1],
            ['Flask', 2],
            ['Pheonix', 1],
        ],
    },
    // Web Technologies
    {
        type: 'Web Technologies',
        list: [
            ['Rest', 5],
            ['WebSockets', 3],
            ['HTML5', 4],
            ['CSS3', 4],
        ],
    },
    // Data Storage
    {
        type: 'Data Storage',
        list: [
            ['PostgreSQL', 4],
            ['SQLite', 3],
            ['MongoDB', 3],
            ['Firebase', 2],
        ],
    }
];

const Skills = () => {
    return (
        <section data-testid='skills'>
            <h2>Skills</h2>
            {
                skills_list.map(category => (
                    <div key={ category.type }>
                        <h3>{ category.type }</h3>
                        <ul>
                            {
                                category.list.map(skill => (
                                    <li key={ skill[0] }>{ skill[0] }</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </section>
    );
};

export default Skills;
