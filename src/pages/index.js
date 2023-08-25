import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";
import { Video } from "@/app/components/Video";
import "../app/globals.css";

const Home = () => {
  return (
    <>
      <div className="background" />
      <div className="background background_primary" />
      <div className="background background_secondary" />
      <Header />
      <Main />
      <Video />
    </>
  );
};

export default Home;
