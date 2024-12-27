import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/ContextProvider.jsx';
import routes from './Routes.jsx';

export default function Router() {
  const { token } = useContext(AppContext);

  const publicRoutes = routes.filter((route) =>
    route.permission.includes('public')
  );
  const privateRoutes = routes.filter((route) =>
    route.permission.includes('private')
  );

  return (
    <Routes>
      {(token ? privateRoutes : publicRoutes).map((route, index) => (
        <Route
          element={route.component}
          exact={route.exact}
          index={route.index}
          key={index}
          path={route.path}
        />
      ))}
    </Routes>
  );
}
