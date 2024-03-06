import About from './pages/About'
import Cool from './pages/Cool'
import Home from './Home';
import UserProfile from './UserProfile';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/cool',
        element: <Cool />
    },
    {
        path: '/profile/:id',
        element: <UserProfile />
    }

]

export default routes