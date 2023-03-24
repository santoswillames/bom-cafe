import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import coffee1 from "../assets/1.jpg";
import coffee2 from "../assets/2.jpg";
import coffee3 from "../assets/3.jpg";
import coffee4 from "../assets/4.jpg";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={coffee1} width={520} height={480} alt="" />
        <footer>
          <strong>Café Arábica</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={coffee2} width={520} height={480} alt="" />
        <footer>
          <strong>Café Arábica</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={coffee3} width={520} height={480} alt="" />
        <footer>
          <strong>Café Arábica</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={coffee4} width={520} height={480} alt="" />
        <footer>
          <strong>Café Arábica</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
