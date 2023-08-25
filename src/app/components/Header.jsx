import Link from "next/link";
import { HEADER_LINKS } from "@/app/utils/constants";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <span className="header__logo">&#128570;</span>
        <ul className="header__menu">
          {HEADER_LINKS.map((link) => (
            <li key={link.title}>
              <Link
                href={link.url}
                className="header__menu__link"
                target={link.target && link.target}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="header-container__title">
        Меня зовут Оля и я - фронтенд-разработчик.{" "}
        <span className="header-container__title_accent-main">Кодю</span> сайты
        и приложения. Мне нравится расти, обучаться и{" "}
        <span className="header-container__title_accent-secondary">
          помогать в этом коллегам
        </span>
      </div>
    </header>
  );
};
