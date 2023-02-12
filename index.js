import { createSSRApp, h } from 'vue'
import { createRouter, RouterLink, RouterView, createMemoryHistory } from 'vue-router'



// ---------------------
// Components
// ---------------------

const App = {
    render () {
        return [
            h(RouterLink, { to: '/' }, () => 'Home'),
            h(RouterView),
        ]
    }
}

const Home = {
    render() {
        return h('p', 'Home')
    }
}



// ---------------------
// Router
// ---------------------

const router = createRouter({
    history: createMemoryHistory(),
    routes: [{
        path: '/',
        component: Home
    }]
})



// ---------------------
// Exports
// ---------------------

export default createSSRApp(App).use(router);
