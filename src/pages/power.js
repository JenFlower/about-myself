import { HeaderPower } from "@/app/components/HeaderPower";
import "../app/globals.css";
import Image from "next/image";
import example from "../../public/palindrome.png";

const Power = () => {
  return (
    <>
      <div className="background" />
      <div className="background background_primary" />
      <div className="background background_secondary" />
      <HeaderPower />
      <div className="power-content">
        <h3 className="power-content__title">
          Палиндром — это строка, которая одинаково читается слева направо и
          справа налево. У нас уже есть готовое решение, которое написано с
          помощью цикла for. Твоя задача переписать функцию с помощью методов
          массива
        </h3>
        <Image
          className="power-content__image"
          src={example}
          alt={"Решение палиндрома без методов массива"}
        />
      </div>
    </>
  );
};

export default Power;
