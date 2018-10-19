import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myOrder from '@/components/myorder'
import myActive from '@/components/active'
import myIndex from '@/components/my'
import myFullPage from '@/components/fullpage'
import myBtn from '@/components/myBtn'
import myUser from '@/components/user'
import infiniteScroll from '@/components/infiniteScroll'
import loadMore from '@/page/loadMore'
import jsx from '@/page/jsx'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/myorder',
            name: 'myOrder',
            component: myOrder,
            meta: {
                title: '媒体',
                keepAlive: true
            }
        },
        {
            path: '/active',
            name: 'myActive',
            component: myActive,
            meta: {
                title: '发现',
                keepAlive: true
            }
        },
        {
            path: '/my/:id/post/:param',
            component: myBtn,
            meta: {
                title: '我的',
                keepAlive: true
            }
        },
        {
            path: '/infiniteScroll',
            component: infiniteScroll
        },
        {
            path: '/loadMore',
            component: loadMore
        },
        {
            path: '/jsx',
            component: jsx
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
        } else {
            const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
            if (to.hash) {
                position.selector = to.hash
            }
            // 如果meta中有scrollTop
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // cords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0
                position.y = 0
            }
            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return position
        }
    }
})

