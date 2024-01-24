import { Outlet, NavLink, useLocation } from "react-router-dom";

export default function Layout() {
  const currentRoute = useLocation().pathname;

  return (
    <>
      <nav className="h-12 bg-gray-800 text-gray-400 flex items-center justify-center gap-4">
        <NavLink className={`${currentRoute === "/" && "text-white"}`} to="/">
          Főoldal
        </NavLink>
        <NavLink
          className={`${currentRoute === "/ertekelesek" && "text-white"}`}
          to="/ertekelesek"
        >
          Értékelések
        </NavLink>
        <NavLink
          className={`${currentRoute === "/uj-ertekeles" && "text-white"}`}
          to="/uj-ertekeles"
        >
          Új értékelés
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
