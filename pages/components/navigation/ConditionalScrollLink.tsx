import { Link as ScrollLink } from "react-scroll";

interface ConditionalScrollLinkProps {
    children: React.ReactNode | React.ReactNode[];
    to?: string;
};

const ConditionalScrollLink = ({
    children,
    to,
}: ConditionalScrollLinkProps) => {
    return to
        ? <ScrollLink
            activeClass="active"
            to={to ?? '#'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            { children }
        </ScrollLink>
        : <>{ children }</>
};

export default ConditionalScrollLink;
