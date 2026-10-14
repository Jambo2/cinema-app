import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-violet-400 ${
      isActive ? "text-violet-400" : "text-zinc-300"
    }`;

  return (
    <header className="w-full border-b border-violet-900/40 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          aria-label="KADR — главная"
          className="text-2xl font-extrabold tracking-[0.2em] transition-colors duration-200 hover:text-violet-400"
        >
          <span className="text-violet-500">K</span>ADR
        </Link>

        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Главная
              </NavLink>
            </li>

            <li>
              <NavLink to="/films" className={navLinkClass}>
                Фильмы
              </NavLink>
            </li>

            <li>
              <NavLink to="/search" className={navLinkClass}>
                Поиск
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
