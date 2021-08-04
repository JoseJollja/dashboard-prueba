import { Home, FileText } from 'react-feather'

export default [
  {
    id: 'inicio',
    title: 'Inicio',
    navLink: '/inicio',
    icon: <Home size={20} />
  },
  {
    header: 'Administración'
  },
  {
    id: 'mensajes',
    title: 'Registros',
    navLink: '/registros',
    icon: <FileText size={20} />
  }
]
