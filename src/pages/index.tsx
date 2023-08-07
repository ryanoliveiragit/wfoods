import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { MenuMobile } from "../components/header/menuMobile";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ContainerBoasVindas,
  ContainerHome,
  ContainerImage,
  SectionNumbers,
  Container,
  Number,
  Divider,
} from "../styles/home/styles";
import { defaultTheme } from "../styles/themes/default";

import Image from "next/image";
import logo from "../assets/logo2.png";
import { Servicos } from "../components/serviços";
import { MyContext } from "../components/context/MyContext";
import { Sobre } from "../components/sobre";
import { Contato } from "../components/contato";
import { Footer } from "../components/footer";
import SliderDemo from "../components/swiper/swiper";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [open, setOpen] = useState(false);

  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511992964453&text&type=phone_number&app_absent=0"
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <MyContext.Provider value={{ open, setOpen }}>
        <Container id="Inicio" data-aos="fade-up">
          <ContainerHome>
              <SliderDemo />
          </ContainerHome>

          <SectionNumbers>
            <div>
              <Number>Entrega</Number>
              <span>Entrega em até 24 horas e pagamento facilitado</span>
              <Divider />
            </div>
            <div>
              <Number>+500</Number>
              <span>Produtos disponíveis</span>
              <Divider />
            </div>
            <div>
              <Number>+4</Number>
              <span>Anos na área</span>
            </div>
          </SectionNumbers>
        </Container>
        <Servicos />
        <Sobre />
        <Contato />
        <Footer />
      </MyContext.Provider>
    </ThemeProvider>
  );
}
