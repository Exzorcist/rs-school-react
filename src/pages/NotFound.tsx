import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="mt-16 px-6 py-12 max-w-3xl mx-auto text-center border-2 border-green-900 rounded-2xl">
      <h2 className="mb-4 text-3xl font-semibold">Page not found</h2>
      <h3 className="mb-12 text-xl">Sorry, no other pages are provided by this test assignment.</h3>

      <NavLink
        to="/"
        className="inline-flex py-2 px-5 rounded-2xl transition-colors duration-300 
                 text-white bg-green-900 hover:bg-green-950"
      >
        Back to main page
      </NavLink>
    </div>
  );
}

export default NotFound;
