import { ContainerParceiros, ContentParceiro, ContentSobre } from "./styles";
import { ContainerSobre, Container } from "./styles";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
import sadia from "../../assets/sadialogo.png";
import aurora from "../../assets/auroralogo.png";
import catupiru from "../../assets/catupirylogo.png";
import frimesa from "../../assets/frimesalogo.png";
import perdigao from "../../assets/perdigãologo.png";
import quata from "../../assets/quatalogo.png";
import seara from "../../assets/seara.png";
import tirolez from "../../assets/tirolezlogo.png";
import vigor from "../../assets/vigorlogo.png";
import Image from "next/image";

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
      <ContainerParceiros id="aboutPartness" className="containerParceiros">
        <ContentParceiro className="parceiross">
            <section>
            <span>Parceiros</span>
            <h1>Nossos parceiros</h1>
            </section>
          <div id="Contato" data-aos="fade-up">
            <Image width={80} src={sadia} alt="sadia" />
            <Image width={80} src={aurora} alt="aurora" />
            <Image width={80} src={catupiru} alt="catupiru" />
            <Image width={80} src={frimesa} alt="frimesa" />
            <Image width={80} src={quata} alt="quata" />
            <Image width={80} src={seara} alt="seara" />
            <Image width={80} src={perdigao} alt="perdigao" />
            <Image width={80} src={tirolez} alt="tirolez" />
            <Image width={80} src={vigor} alt="vigor" />
          </div>
        </ContentParceiro>
      </ContainerParceiros>
    </Container>
  );
}
