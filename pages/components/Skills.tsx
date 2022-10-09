import { Box, Flex, Heading, Tag, useColorModeValue } from "@chakra-ui/react";
import useThemeColor, { THEME_KEYS } from '../hooks/useThemeColor';

export const skills_list = [
    // Languages
    {
        type: 'Languages',
        list: [
            ['JavaScript', 5],
            ['TypeScript', 3],
            ['Java', 1],
            ['Kotlin', 1],
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
    const themeColor = useThemeColor(THEME_KEYS.COLOR);

    return (
        <Flex
            id='skills'
            data-testid='experience'
            as='section'
            minHeight='100vh'
            direction={['column', 'row']}
            bgGradient={useColorModeValue('linear(to-r, green.200, pink.500)', 'linear(to-r, blue.200, purple.500)')}
            justifyContent='flex-end'
            padding={['32px 0', '64px 0']}
        >
            <Box
                width={[null, '60vw']}
                margin={['auto 32px', 'auto 32px auto 0']}
                padding='32px'
                bgColor={useColorModeValue('white', 'gray.800')}
                borderRadius='6px'
            >
                <Heading as='h2' size='2xl' margin='24px 0'>Skills</Heading>
                <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={themeColor} />
                {
                    skills_list.map(category => (
                        <div key={ category.type }>
                            <Heading as='h3' fontSize='1.5em' margin='24px 0'>{ category.type }</Heading>
                            <Box>
                                {
                                    category.list.map(skill => (
                                        <Tag
                                            key={ skill[0]}
                                            size='lg'
                                            bgColor={themeColor}
                                            variant='solid'
                                            margin='0 4px 4px 0'
                                        >{ skill[0] }</Tag>
                                    ))
                                }
                            </Box>
                        </div>
                    ))
                }
            </Box>
        </Flex>
    );
};

export default Skills;
