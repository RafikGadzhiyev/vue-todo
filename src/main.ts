import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue';
import MainPage from './pages/main/MainPage.vue';
import TaskPage from './pages/task/TaskPage.vue';
import { store } from './stores/taskStore';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/tasks',
            component: TaskPage
        }
    ]
})

createApp(App).use(store).use(router).mount('#app')
