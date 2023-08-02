import { ContentSobre } from "./styles";
import { ContainerSobre, Container } from "./styles";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../assets/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

export function Sobre() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="Sobre">
      <ContainerSobre>
        <ContentSobre>
          <Image data-aos="fade-up" src={logo} alt="modelo" width={470} />
          <section id="Parceiros" data-aos="fade-up">
            <span>SOBRE NÓS</span>
            <h1>Juntos, vamos saborear o sucesso! </h1>
            <p>
              Não perca mais tempo! A WFoods está pronta para abrir as portas
              para o sucesso do seu negócio. Deixe-nos mostrar como nossos
              produtos, nossa equipe dedicada e nosso compromisso com a
              excelência podem apoiar sua empresa para novas alturas. Entre em
              contato conosco hoje mesmo e junte-se à família WFoods.
            </p>
          </section>
        </ContentSobre>
      </ContainerSobre>
      <ContainerSobre id="aboutPartness" className="containerParceiros">
        <ContentSobre className="parceiross">
          <section id="Contato" data-aos="fade-up">
            <span>Parceiros</span>
            <h1>Nossos parceiros</h1>
            <p>
              SADIA, PERDIGÃO, AURORA, SEARA, CATUPIRY, TIROLEZ, SCALA,VIGOR,
              QUATA, FRIMESA
            </p>
          </section>
        </ContentSobre>
      </ContainerSobre>
    </Container>
  );
}
