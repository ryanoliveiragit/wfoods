import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  ImageSlideFive,
  ImageSlideFor,
  ImageSlideOne,
  ImageSlideSix,
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
          <TextSlide>Aves</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide2">
          <ImageSlideTwo />
          <TextSlide>Carnes Bovinas</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide3">
          <ImageSlideTree />
          <TextSlide>Carnes Suinas</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide4">
          <ImageSlideFor />
          <TextSlide>Feijoada</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide5">
          <ImageSlideFive />
          <TextSlide>Laticínios</TextSlide>
        </div>
        <div className="keen-slider__slide number-slide5">
          <ImageSlideSix />
          <TextSlide>Embutidos</TextSlide>
        </div>
      </div>
    </>
  );
}
