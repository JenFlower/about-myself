import { Slider } from "@/app/components/Slider";
import { SLIDER_OPTIONS, SLIDES } from "@/app/utils/constants";

export const Main = () => {
  return (
    <main className="main" id="about-me">
      <Slider slides={SLIDES} options={SLIDER_OPTIONS} />
    </main>
  );
};
