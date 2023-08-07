import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  ImageSlideFor,
  ImageSlideOne,
  ImageSlideTree,
  ImageSlideTwo,
  TextSlide,
} from "./imgs";

export default function SliderDemo() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <ImageSlideOne />
          <TextSlide>CARNES BOVINAS</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide2">
          <ImageSlideTwo />
          <TextSlide>LATICÍNIOS EM GERAL</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide3">
          <ImageSlideTree />
          <TextSlide>CARNES SUINAS</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide3">
          <ImageSlideFor />
          <TextSlide>AVES, MERCEARIA</TextSlide>
        </div>
      </div>
    </>
  );
}
