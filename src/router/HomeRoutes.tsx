import { Home } from 'components/pages/Home'
import { NotFound } from 'components/pages/NotFound'
import { Setting } from 'components/pages/Setting'
import { UserManagement } from 'components/pages/UserManagement'

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/user_management',
    children: <UserManagement />
  },
  {
    path: '/setting',
    children: <Setting />
  },
  {
    path: '*',
    children: <NotFound />
  }
]
