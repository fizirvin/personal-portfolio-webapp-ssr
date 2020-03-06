import Home from '../components/Home.jsx'
import NotFound from '../containers/NotFound.jsx'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        name: 'Not Found',
        component: NotFound,
        exact: true
    }
]

export default routes;