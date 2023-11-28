import { Outlet, NavLink } from 'react-router-dom';

function Root() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="my-10 text-5xl text-center font-medium">React Forms</h2>
      <div className="flex gap-5 justify-center">
        <NavLink
          to="/uncontrolled-form"
          className={({ isActive }) =>
            `border border-green-900 py-2 px-5 rounded-2xl transition-colors duration-300 hover:text-white hover:bg-green-900 ${
              isActive ? 'bg-green-900 text-white' : ''
            }`
          }
        >
          Uncontrolled Form
        </NavLink>
        <NavLink
          to="/hook-form"
          className={({ isActive }) =>
            `border border-green-900 py-2 px-5 rounded-2xl transition-colors duration-300 hover:text-white hover:bg-green-900 ${
              isActive ? 'bg-green-900 text-white' : ''
            }`
          }
        >
          React Hook Form
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
}

export default Root;
