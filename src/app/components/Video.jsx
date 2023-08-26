"use client";
import React from "react";
import { Title } from "@/app/components/Title";

export const Video = () => {
  return (
    <section className="video-container" id="video">
      <div className="video-container__content">
        <Title title="Фишки CSS" />
        <iframe
          className="video-container__video"
          src="https://www.youtube.com/embed/TG62L4Ol2ck?si=IDPlz771DzrOILyv"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
