import { Box, Button, Flex, Grid, GridItem, Heading, useColorModeValue } from "@chakra-ui/react";
import useThemeColors from '../hooks/useThemeColors';
import TwitterIcon from '../../assets/icons/twitter.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import GithubIcon from '../../assets/icons/github.svg';
import { EmailIcon } from "@chakra-ui/icons";


export const connect_types = {
  LINKEDIN: 'LinkedIn',
  GITHUB: 'Github',
  TWITTER: 'Twitter',
  EMAIL: 'Email'
};

export const connect_list = [
  {
      type: connect_types.LINKEDIN,
      href: 'https://www.linkedin.com/in/jon-prell-web-dev/',
      icon: (color: string) => <LinkedinIcon fill={color} width='72px' />,
      bgColor: '#0072b1',
  },
  {
      type: connect_types.GITHUB,
      href: 'https://github.com/JTP709/',
      icon: (color: string) => <GithubIcon fill={color} width='72px' />,
      bgColor: '#6cc644',
  },
  {
      type: connect_types.TWITTER,
      href: 'https://twitter.com/JTP709',
      icon: (color: string) => <TwitterIcon fill={color} width='72px' />,
      bgColor: '#1DA1F2',
  },
  {
    type: connect_types.EMAIL,
    href: 'mailto:JTP709@gmail.com',
    icon: (color: string) => <EmailIcon color={color} boxSize='72px' />,
    bgColor: 'red.400',
},
];

const Connect = () => {
    const { primary, iconColor, gradient, btnHover } = useThemeColors();

    return (
        <Flex
            id='connect'
            data-testid='connect'
            as='section'
            minHeight='100vh'
            direction={['column', 'row']}
            bgGradient={gradient}
            alignContent='center'
        >
            <Box
                margin={['32px', 'auto']}
                padding='32px'
                bgColor={useColorModeValue('white', 'gray.800')}
                borderRadius='6px'
                width={[null, '100%']}
                maxWidth='1200px'
            >
                <Heading as='h2' size='2xl' margin='24px 0'>Connect</Heading>
                <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={primary} />
                <Heading as='h3' fontSize='1.5em' marginTop='24px'>Feel free to connect or contact me!</Heading>
                <Flex margin='4em 0' flexDir={['column', 'row']} justifyContent='space-evenly'>
                  {
                    connect_list.map(item => {
                      return (
                        <Button
                          key={item.type}
                          as='a'
                          href={item.href}
                          target="_blank"
                          bgColor={item.bgColor}
                          borderRadius='4px'
                          padding='1em'
                          margin='16px 0'
                          height='80px'
                          width={['100%', '160px']}
                          _hover={{ bg: btnHover }}
                        >
                          { item.icon(iconColor) }
                        </Button>
                      )
                    })
                  }
                </Flex>
            </Box>
        </Flex>
    )
};

export default Connect;
