import {createRouter, createWebHistory} from 'vue-router' ;
import HomePage from './pages/Home.vue';
import PostsList from './pages/Posts.vue'

const routes =[{path:"/", name :"Home-Page" , component: HomePage},
{path:"/posts", name :"Posts-Page" , component: PostsList}];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;

