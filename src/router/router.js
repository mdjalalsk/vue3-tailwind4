import { createRouter,createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import Single from "../pages/Single.vue";


const routes=[
    {
            path:'/',
            name:'Home',
            component: Home
    },
    {
        path:'/about',
        name:'About',
        component: About
   },
   {
    path:'/blog',
    name:'Blog',
    component: Blog
  },
  {
    path:'/blog/:id',
    name:'single',

    component: Single,
  }
];

const router=createRouter({
    history: createWebHistory(),
    routes,
})

export default router;