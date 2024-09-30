import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import ExaminerPerformanceOverviewComponent from "../ nursing/pages/examiner-performance-overview.component.vue";
import PageNotFound from "../public/pages/page-not-found.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', name: 'home', component: HomeComponent, meta: {title: 'Home'}},
        {path: '/nursing/examiner-performance-overview', name : 'examiner-performance-overview', component: ExaminerPerformanceOverviewComponent, meta: {title: 'Examiner Performance Overview'}},
        {path: '/', redirect: '/home'},
        {path: '/:pathMatch(.*)*', name: 'page-not-found', component: PageNotFound, meta: {title: 'Page Not Found'}}

    ]
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'Hartford Institute for Geriatric Nursing';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})
export default router;