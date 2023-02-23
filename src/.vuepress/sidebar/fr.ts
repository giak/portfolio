import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
    '/': [
        '',
        {
            icon: 'circle-info',
            text: 'A propos',
            prefix: 'about/',
            link: 'about/',
            children: 'structure',
        },
        {
            text: 'Articles',
            icon: 'newspaper',
            prefix: 'posts/',
            children: 'structure',
        },
    ],
});
