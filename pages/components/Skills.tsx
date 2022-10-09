import { Box, Flex, Heading, List, ListItem, Progress, Tag, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import useThemeColors from '../hooks/useThemeColors';
import ChakraUiIcon from '../../assets/icons/chakraui.svg';
import ReactIcon from '../../assets/icons/react.svg';
import JavaScriptIcon from '../../assets/icons/javascript.svg';
import TypeScriptIcon from '../../assets/icons/typescript.svg';
import KotlinIcon from '../../assets/icons/kotlin.svg';
import NextIcon from '../../assets/icons/nextdotjs.svg';
import RubyIcon from '../../assets/icons/ruby.svg';
import RailsIcon from '../../assets/icons/rubyonrails.svg';
import StyledComponentsIcon from '../../assets/icons/styledcomponents.svg';

type ListItem = {
    type: string;
    list: [string, number][]
}

export const skills_list: ListItem[] = [
    // Languages
    {
        type: 'Languages',
        list: [
            ['JavaScript', 4],
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
            ['React.js', 4],
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
            ['Rest', 4],
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
    const { primary, iconColor } = useThemeColors();
    const iconWidth = useBreakpointValue(['96px', '128px'])

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
            <Flex
                margin={['auto 32px', 'auto 32px auto 0']}
                flexWrap='wrap'
                width={[null, '40vw']}
                justifyContent='space-evenly'
            >
                <Box margin={['16px','32px']}><TypeScriptIcon width={iconWidth} fill={iconColor} /></Box>
                <Box margin={['16px','32px']}><ReactIcon width={iconWidth} fill={iconColor} /></Box>
                <Box margin='32px' display={['none', 'block']}><JavaScriptIcon width='128px' fill={iconColor} /></Box>
                <Box margin={['16px','32px']}><NextIcon width={iconWidth} fill={iconColor} /></Box>
                <Box margin='32px' display={['none', 'block']}><KotlinIcon width='128px' fill={iconColor} /></Box>
                <Box margin='32px' display={['none', 'block']}><RubyIcon width='128px' fill={iconColor} /></Box>
                <Box margin='32px' display={['none', 'block']}><RailsIcon width='128px' fill={iconColor} /></Box>
                <Box margin='32px' display={['none', 'block']}><StyledComponentsIcon width='128px' fill={iconColor} /></Box>
                <Box margin='32px' display={['none', 'block']}><ChakraUiIcon width='128px' fill={iconColor} /></Box>
            </Flex>
            <Box
                width={[null, '60vw']}
                margin={['auto 32px', 'auto 32px auto 0']}
                padding='32px 32px 56px'
                bgColor={useColorModeValue('white', 'gray.800')}
                borderRadius='6px'
            >
                <Heading as='h2' size='2xl' margin='24px 0'>Skills</Heading>
                <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={primary} />
                {
                    skills_list.map(category => (
                        <div key={ category.type }>
                            <Heading as='h3' fontSize='1.5em' margin='24px 0'>{ category.type }</Heading>
                            <List>
                                {
                                    category.list.map(skill => (
                                        <ListItem key={ skill[0]} margin='16px 0' display='flex' flexDirection='row' justifyContent='space-between'>
                                            <Text>{ skill[0] }</Text>
                                            <Progress w={['50%', '75%']} marginLeft='16px' value={20*skill[1]} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                    ))
                }
            </Box>
        </Flex>
    );
};

export default Skills;
