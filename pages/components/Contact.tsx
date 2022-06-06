export const contact_types = {
    LINKEDIN: 'LinkedIn',
    GITHUB: 'Github',
    TWITTER: 'Twitter',
};

export const contact_list = [
    {
        type: contact_types.LINKEDIN,
        href: 'https://www.linkedin.com/in/jon-prell-web-dev/',
    },
    {
        type: contact_types.GITHUB,
        href: 'https://github.com/JTP709/',
    },
    {
        type: contact_types.TWITTER,
        href: 'https://twitter.com/JTP709',
    },
];

const Contact = () => {
    return (
        <div data-testid='contact'>
            <h2>Contact and Social</h2>
            <ul>
                {
                    contact_list.map(contact => (
                        <li key={ contact.type }>
                            <a href={ contact.href }>{ contact.type }</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Contact;
