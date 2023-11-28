import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Root from './layout/Root.tsx';
import DataList from './pages/DataList.tsx';
import HookForm from './pages/HookForm.tsx';
import UncontrolledForm from './pages/UncontrolledForm.tsx';
import NotFound from './pages/NotFound.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<DataList />} />
      <Route path="/hook-form" element={<HookForm />} />
      <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
