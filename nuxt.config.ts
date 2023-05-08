import transformerDirectives from '@unocss/transformer-directives';

export default defineNuxtConfig({
    css: [
        '~/assets/css/app.css',
        '~/assets/css/animation.css',
        '~/assets/css/fonts.css',
    ],
    modules: [
        // '@nuxtjs/google-fonts',
        '@pinia/nuxt',
        '@unocss/nuxt',
    ],
    pinia: {
        autoImports: [
            'defineStore',
        ],
    },
    unocss: {
        icons: true,
        preflight: true,
        attributify: true,
        transformers: [
            transformerDirectives(),
        ],
        safelist: [
            'text-red-500',
            'i-mdi-image-outline',
            'i-mdi-chart-box-outline',
            'i-mdi-file-outline',
            'i-mdi-gift-outline',
            'i-mdi-phone-outline',
            'i-mdi-bell-off-outline',
            'i-mdi-delete-outline',
            'i-mdi-check-circle-outline',
            'i-mdi-account-outline',
            'i-mdi-account-multiple-outline',
            'i-mdi-bookmark-outline',
            'i-mdi-help-circle-outline',
            'i-mdi-bug-outline',
            'i-mdi-settings-outline',
            'i-mdi-volume-low-outline',
        ],
        shortcuts: {
            'col': 'flex flex-col',
            'page': 'flex-1 col h-full',
            'container': 'fixed inset-0 z-2',
            'center': 'justify-center items-center',
        },
    },
    // googleFonts: {
    //     families: {
    //         'Albert Sans': [100,200,300,400,500,600,700,800,900],
    //     },
    //     base64: true,
    // },
});
