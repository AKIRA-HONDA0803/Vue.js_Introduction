import KbnBoardView from '@/components/template/KbnBoardView.vue'
import KbnLoginView from '@/components/template/KbnLogin.vue'
import KbnTaskdetailModal from '@/components/template/KbnTaskdetailModal.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requiresAuth: true }
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskdetailModal,
  meta: { requiresAuth: true }
}, {
  path: '*',
  redirect: '/'
}]
