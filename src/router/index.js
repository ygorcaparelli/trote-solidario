import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Introducao from '../views/Introduction.vue'
import Objetivo from '../views/Objective.vue'
import Formato from '../views/Format.vue'
import Gincana from '../views/Competition.vue'
import Integracao from '../views/Integration.vue'
import Observacoes from '../views/Observation.vue'
import Calculadora from '../views/Calculators.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - Trote Solidário 2025' }
  },
  {
    path: '/introducao',
    name: 'Introducao',
    component: Introducao,
    meta: { title: 'Introdução - Trote Solidário 2025' }
  },
  {
    path: '/objetivo',
    name: 'Objetivo',
    component: Objetivo,
    meta: { title: 'Objetivo - Trote Solidário 2025' }
  },
  {
    path: '/formato',
    name: 'Formato',
    component: Formato,
    meta: { title: 'Formato - Trote Solidário 2025' }
  },
  {
    path: '/gincana',
    name: 'Gincana',
    component: Gincana,
    meta: { title: 'Gincana - Trote Solidário 2025' }
  },
  {
    path: '/integracao',
    name: 'Integracao',
    component: Integracao,
    meta: { title: 'Integração - Trote Solidário 2025' }
  },
  {
    path: '/observacoes',
    name: 'Observacoes',
    component: Observacoes,
    meta: { title: 'Observações - Trote Solidário 2025' }
  },
  {
    path: '/calculadoras',
    name: 'Calculadora',
    component: Calculadora,
    meta: { title: 'Calculadora - Trote Solidário 2025' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Atualize o título da página dinamicamente
router.afterEach((to) => {
  document.title = to.meta.title || 'Trote Solidário 2025' // Título padrão
})

export default router