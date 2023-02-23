import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
    '/',
    { text: 'A propos', icon: 'circle-info', link: '/about/' },
    { text: 'Articles', icon: 'newspaper', link: '/posts/' },
    {
        text: 'CV',
        icon: 'vcard',
        link: 'https://giak.gitlab.io/cv/',
    },
]);
