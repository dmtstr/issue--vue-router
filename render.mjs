import { build } from 'vite';
import { renderToString } from 'vue/server-renderer';

(async () => {

    await build({
        build: {
            ssr: 'index.js',
            outDir: 'dist',
        },
        ssr: {
            format: 'mjs'
        }
    });

    const { default: app } = await import('./dist/index.mjs');
    const router = app.config.globalProperties.$router;
    await router.push('/');
    const html = await renderToString(app);
    console.log(html)

})()

