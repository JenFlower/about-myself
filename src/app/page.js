import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";

export default function Home() {
  return (
    <>
      <div className="background" />
      <div className="background background_primary" />
      <div className="background background_secondary" />
      <Header />
      <Main />
    </>
  );
}
