export const socialLinks = {
    email: 'mailto:',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.twitter.com/',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: 'https://www.instagram.com/',
    github: 'https://github.com/',
    normal: 'https://',
};

export const createSocialLink = (
    key: string,
    value: string,
) => {
    return `${socialLinks[key as keyof typeof socialLinks]}${
        key !== 'email' ? value.replace('@', '') : value
    }`;
};