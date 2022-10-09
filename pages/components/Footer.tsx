import { Flex, Text, Link as ChLink } from "@chakra-ui/react"
import Link from "next/link";
import useThemeColors from "../hooks/useThemeColors";

const Footer = () => {
  const { linkColor } = useThemeColors();
  return (
    <Flex alignItems='center' padding='32px 16px' flexDir='column'>
      <Text>&copy; { new Date().getFullYear() } Made with <Text as='span' color={'red.500'}>{'<3'}</Text> by Me</Text>
      <Text>Crafted with{' '}
        <Link href='https://www.typescriptlang.org/'><ChLink color={linkColor}>TypeScript</ChLink></Link>,{' '}
        <Link href='https://nextjs.org/'><ChLink color={linkColor}>Next.js</ChLink></Link>,{' '}
        <Link href='https://chakra-ui.com/'><ChLink color={linkColor}>Chakra-UI</ChLink></Link>,{' '}
        and hosted on <Link href='https://vercel.com/'><ChLink color={linkColor}>Vercel</ChLink></Link>.
      </Text>
    </Flex>
  )
};

export default Footer;
