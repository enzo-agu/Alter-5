import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import FirstTenProducts from '../components/SeparateProducts/FirstTenProducts';
import SecondTenProductos from '../components/SeparateProducts/SecondTenProducts';
import Products from '../components/Products/Products';
import UserData from '../components/UserData/UserData';
import ThirdTenProductos from '../components/SeparateProducts/ThirdTenProducts';

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true,
    permission: ['public', 'private'],
  },
  {
    path: '/login',
    component: <Login />,
    exact: true,
    permission: ['public', 'private'],
  },
  {
    path: '/userData',
    component: <UserData />,
    exact: true,
    permission: ['private'],
  },
  {
    path: '/products',
    component: <Products />,
    exact: true,
    permission: ['private', 'public'],
  },
  {
    path: '/FirstTenProducts',
    component: <FirstTenProducts />,
    exact: true,
    permission: ['private']
  },
  {
    path: '/SecondTenProducts',
    component: <SecondTenProductos />,
    exact: true,
    permission: ['private']
  },
  {
    path: '/ThirdTenProducts',
    component: <ThirdTenProductos />,
    exact: true,
    permission: ['private']
  }
];

export default routes;
