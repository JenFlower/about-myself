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
    <header className="header">
      <h1 className="header__title">&#128570;</h1>
      <ul className="header__menu">
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};
