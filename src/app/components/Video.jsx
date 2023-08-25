"use client";

import React from "react";
import { Title } from "@/app/components/Title";

// TODO: заменить ссылку на видео
export const Video = () => {
  return (
    <section className="video-container" id="video">
      <div className="video-container__content">
        <Title title="Фишка CSS" />
        <iframe
          className="video-container__video"
          src="https://www.youtube.com/embed/zjyx7Tlag7o?si=6zoKbC6h9_989uvG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
