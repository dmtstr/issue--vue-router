const { build } = require('vite');
const { renderToString } = require('vue/server-renderer');

(async () => {

    await build({
        build: {
            ssr: 'index.js',
            outDir: 'dist',
        },
        ssr: {
            format: 'cjs'
        }
    });

    const { default: app } = require('./dist/index');
    const router = app.config.globalProperties.$router;
    await router.push('/');
    const html = await renderToString(app);
    console.log(html)

})()

