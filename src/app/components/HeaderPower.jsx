import Link from "next/link";

export const HeaderPower = () => {
  return (
    <header className="header-container">
      <div className="header">
        <span className="header__logo">&#128570;</span>
        <Link href="/" className="header__menu__link">
          На главную
        </Link>
      </div>
    </header>
  );
};
