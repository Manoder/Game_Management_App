import HomeH from './components/HomeH.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginP from './components/LoginP.vue'
import AddGame from './components/AddGame.vue'
import UpdateGame from './components/UpdateGame.vue'

const routes = [
    {
        name: 'HomeH',
        component: HomeH,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'LoginP',
        component: LoginP,
        path: '/login'
    },
    {
        name: 'Add',
        component: AddGame,
        path: '/add'
    },
    {
        name: 'Update',
        component: UpdateGame,
        path: '/update/:id'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router