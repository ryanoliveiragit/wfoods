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
import entrega from "../assets/entrega.png";
import { Servicos } from "../components/serviços";
import { MyContext } from "../components/context/MyContext";
import { Sobre } from "../components/sobre";
import { Contato } from "../components/contato";
import { Footer } from "../components/footer";
import SliderDemo from "../components/swiper/swiper";
import { Delivery } from "../components/delivery";

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
              <Number>
                <img
                  src="https://cdn.discordapp.com/attachments/1026941177926275115/1138192974887526440/entrega.png"
                  alt=""
                />
              </Number>
              <span>
                Entrega em até 24 horas e <br /> pagamento facilitado
              </span>
              <Divider />
            </div>
            <div>
              <Number>
                <img
                  src="https://moveracessibilidade.com.br/wp-content/uploads/2017/10/icone-produtos.png"
                  alt=""
                />
              </Number>
              <h1>+500</h1>
              <span>Produtos disponíveis</span>
              <Divider />
            </div>
            <div>
              <Number>
                <img
                  src="https://cdn.discordapp.com/attachments/1128788400820977664/1146477244320063669/image.png"
                  alt=""
                />
              </Number>
              <h1>+5</h1>
              <span>Anos na área</span>
            </div>
          </SectionNumbers>
        </Container>
        <Delivery />
        <Servicos />
        <Sobre />
        <Contato />
        <Footer />
      </MyContext.Provider>
    </ThemeProvider>
  );
}
