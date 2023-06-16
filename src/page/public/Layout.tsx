import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="py-4">
      <Outlet />
    </main>
  );
}

export default Layout;
