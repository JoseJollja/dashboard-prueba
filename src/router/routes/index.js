import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Dashboard'

// ** Default Route
const DefaultRoute = '/inicio'

// ** Merge Routes
const Routes = [
  {
    path: '/login',
    layout: 'BlankLayout',
    meta: { authRoute: true },
    component: lazy(() => import('../../views/Login'))
  },
  {
    path: '/inicio',
    component: lazy(() => import('../../views/Inicio'))
  },
  {
    path: '/registros',
    component: lazy(() => import('../../views/Mensajes'))
  },
  /* RUTAS SOLO ADMINISTRADOR */
  {
    path: '/error',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/Error'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
