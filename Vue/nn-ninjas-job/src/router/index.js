import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetail,
      props: true,
    },
    // redirect
    {
      path: '/all-jobs',
      redirect: '/jobs',
    },
    // catch all 404
    {
      path: '/:catchAll(.*)',
      name: '404 Not found',
      component: NotFound,
    }
  ]
})

export default router
