
const routes = [
  {
    path: '/',
    component: () => import('layouts/Preview.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/case1',
    component: () => import('layouts/Case1.vue'),
    children: [
      { path: '', component: () => import('pages/Case1.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
