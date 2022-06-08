import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

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
        <Flex data-testid='experience' as='section' minHeight='100vh' direction={['column', 'row']}>
            <Box height='20vh' bgGradient='linear(to-r, green.200, pink.500)' display={['block', 'none']}>
            </Box>
            <Box width='50vw' bgGradient='linear(to-r, green.200, pink.500)' display={['none', 'block']}>
            </Box>
            <Box width={['100vw', '50vw']}>
                <Heading as='h2' size='2xl'>Skills</Heading>
                {
                    skills_list.map(category => (
                        <div key={ category.type }>
                            <Heading as='h3' size='xl'>{ category.type }</Heading>
                            <UnorderedList>
                                {
                                    category.list.map(skill => (
                                        <ListItem key={ skill[0] }>{ skill[0] }</ListItem>
                                    ))
                                }
                            </UnorderedList>
                        </div>
                    ))
                }
            </Box>
        </Flex>
    );
};

export default Skills;
