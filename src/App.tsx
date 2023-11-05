import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Root from './layout/Root.tsx';
import PokemonsList from './pages/PokemonsList.tsx';
import PokemonCurrent from './pages/PokemonCurrent.tsx';
import NotFound from './pages/NotFound.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate replace to="/page/1" />} />
      <Route path="/page" element={<Navigate replace to="/page/1" />} />
      <Route
        path="/page/:page"
        loader={({ params }): null => {
          if (params.page && !Number.isInteger(+params.page)) {
            throw new Error('Wrong page path. It can be only number value.');
          }

          return null;
        }}
        element={<PokemonsList />}
        errorElement={<NotFound />}
      >
        <Route path="pokemon/:name" element={<PokemonCurrent />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
