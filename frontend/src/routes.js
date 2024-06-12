import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Events = React.lazy(() => import('./components/Events/Events'))
const CreateEvents = React.lazy(() => import('./components/Events/CreateEvent'))
const User = React.lazy(() => import('./components/profile/UserProfile'))
const MainDatabaseManager = React.lazy(() => import('./views/dataBaseManager/MainDatabaseManager'))
const CreateContact = React.lazy(() => import('./views/contacts/CreateContact'))
const Users = React.lazy(() => import('./views/users/users'))
const TaskValidation = React.lazy(() => import('./views/TaskValidation/TaskValidation'))
const StatisticsEntrepeneurs = React.lazy(() => import('./views/Statistics/EntrepreneurStat'))
const ProgramsStatistics = React.lazy(() => import('./views/Statistics/ProgramsStatistics'))
const CategoryMain = React.lazy(() => import('./views/category/categoryMain'))
const AddCategoryPage = React.lazy(() => import('./views/category/addCategory'))
const entrepeneurDetails = React.lazy(() => import('./views/entrepeneur/entrepeneurDetails'))
const EntrepreneursTable = React.lazy(() => import('./views/entrepeneur/entrepeneursTable'))
const AllContacts = React.lazy(() => './views/contacts/AllContacts')
const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/Dash', exact: true, name: 'Home', element: Dashboard },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },

  { path: '/user', exact: true, name: 'User', element: User },
  { path: '/Database', exact: true, name: 'Database Manager', element: MainDatabaseManager },

  { path: '/users', exact: true, name: 'Users', element: Users },
  { path: '/events', exact: true, name: 'All events', element: Events },
  { path: '/Validation', exact: true, name: 'Validation', element: TaskValidation },
  { path: '/CreateEvent', exact: true, name: 'Create Events', element: CreateEvents },
  { path: '/CreateContact', exact: true, name: 'Create Contact', element: CreateContact },
  { path: '/allContacts', name: 'All Contacts', element: AllContacts },
  {
    path: '/statistics/entrepreneurs',
    name: 'StatisticsEntrepeneurs',
    element: StatisticsEntrepeneurs,
    exact: true,
  },
  { path: '/statistics/programs', name: 'StatisticsPrograms', element: ProgramsStatistics },
  { path: '/entrepeneurs', name: 'Entrepeneurs', element: EntrepreneursTable },
  { path: '/entrepeneurs/:id', name: ' entrepeneur', element: entrepeneurDetails },
  { path: '/category', name: ' categories', element: CategoryMain },
  { path: '/addCategory', name: 'category', element: AddCategoryPage },
]

export default routes
