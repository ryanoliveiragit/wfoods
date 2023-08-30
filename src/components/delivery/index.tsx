import { ContentSobre } from "./styles";
import { ContainerSobre, Container } from "./styles";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export function Delivery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="Entrega">
      <ContainerSobre>
        <ContentSobre>
          <img
            data-aos="fade-up"
            src="https://bdr.pt/wp-content/uploads/2017/10/bdr-servi%C3%A7o-entregas-urgente-300x174.png"
            alt="modelo"
            width={470}
          />
          <section data-aos="fade-up">
            <span>ENTREGA E PAGAMENTO!</span>
            <h1>Entrega em até <strong className="destaque">24 horas</strong> e <strong className="destaque">Pagamento facilitado</strong></h1>
            <p>
            Praticidade e facilidade ao seu alcance! Conte com nossa entrega expressa em até 24 horas e desfrute de opções de pagamento que tornam suas compras simples e convenientes, para que você possa aproveitar o que há de melhor.
            </p>
          </section>
        </ContentSobre>
      </ContainerSobre>
    </Container>
  );
}
