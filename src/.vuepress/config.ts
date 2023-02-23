import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'Christophe Giacomel - Artisan Dév.Web JS et +',
            description: 'CV et portfolio de Christophe Giacomel',
        },
    },

    theme,

    shouldPrefetch: false,
});
