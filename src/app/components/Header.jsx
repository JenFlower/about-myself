const links = [
  {
    title: "Кто я?",
    url: "#",
  },
  {
    title: "Почему веб?",
    url: "#",
  },
  {
    title: "Какие планы?",
    url: "#",
  },
  {
    title: "Портфолио",
    url: "#",
  },
];

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <span className="header__logo">&#128570;</span>
        <ul className="header__menu">
          {links.map((link) => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
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
