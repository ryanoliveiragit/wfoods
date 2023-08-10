import { GoCheck } from "react-icons/go";
import { Container, Content, Cards } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ModalFrangos } from "../modal/aves";
import { ModalSuinos } from "../modal/suinos";
import { ModalBovinos } from "../modal/bovinos";
import { ModalFeijoada } from "../modal/feijoada";
import { ModalLacticinios } from "../modal/lacticinios";

export function Servicos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Container id="Serviços">
        <Content data-aos="fade-up">
          <span>SERVIÇOS</span>
          <h1>Como podemos ajudá-lo</h1>
        </Content>
        <Cards data-aos="fade-up">
          <div data-aos="fade-up">
            <GoCheck />
            <h1>Escolha preferida</h1>
            <p>
              Desde 2022, a WFoods tem sido a escolha preferida de
              estabelecimentos como restaurantes, pizzarias, panificadoras,
              churrascarias, esfiharias, bares, casas noturnas e similares em
              toda a região da grande São Paulo e litoral. Somos uma rede
              atacadista de alimentos e bebidas especializados em fornecer
              soluções de qualidade, atendendo às necessidades específicas de
              cada cliente.
            </p>
          </div>

          <div data-aos="fade-up">
            <GoCheck />
            <h1>Atendimento excepcional</h1>
            <p>
              Na WFoods, acreditamos que o atendimento excepcional e o respeito
              total aos nossos clientes são os pilares do nosso sucesso.
              Trabalhamos incansavelmente para oferecer um serviço impecável e
              construir relacionamentos sólidos com nossos parceiros comerciais.
            </p>
          </div>

          <div data-aos="fade-up">
            <GoCheck />
            <h1>Parcerias estratégicas</h1>
            <p>
              Contamos com parcerias estratégicas com empresas de renome e
              especialistas em atendimento ao cliente, garantindo uma variedade
              de mais de 500 itens de produtos de alta qualidade. Nossa seleção
              cuidadosamente escolhida abrange uma ampla gama de categorias,
              desde alimentos frescos e congelados até bebidas e ingredientes
              essenciais para a culinária.
            </p>
          </div>
        </Cards>

        <Cards data-aos="fade-up">
          <div data-aos="fade-up">
            <GoCheck />
            <h1>Profissionais Qualificados</h1>
            <p>
              Nossa equipe é composta por profissionais de vendas externas e
              internas altamente qualificados, que estão prontos para oferecer a
              você não apenas preços imbatíveis, mas também conhecimento
              especializado e suporte personalizado. Entendemos que cada negócio
              é único, e nos esforçamos para fornecer soluções personalizadas
              que atendam às suas necessidades específicas.
            </p>
          </div>

          <div data-aos="fade-up">
            <GoCheck />
            <h1>Inovação e Diferenciação</h1>
            <p>
              Na WFoods, buscamos constantemente inovação e diferenciação.
              Estamos comprometidos em fornecer aos nossos clientes acesso aos
              melhores produtos do mercado, juntamente com um processo de
              entrega eficiente e confiável
            </p>
          </div>

          <div data-aos="fade-up">
            <GoCheck />
            <h1>Confiável</h1>
            <p>
              Se você está procurando um parceiro atacadista confiável, a WFoods
              está aqui para atendê-lo.
            </p>
          </div>
        </Cards>
      </Container>

      <Container id="Produtos" className="produtos">
        <Content data-aos="fade-up">
          <span>produtos</span>
          <h1>Nossos produtos</h1>
        </Content>

        <Cards data-aos="fade-up" className="imageProducts">
          <div data-aos="fade-up">
            <h4>
              <GoCheck /> AVES
            </h4>
            <img
              src="https://cdn.discordapp.com/attachments/566850308702208001/1136760128104837161/img5.png"
              alt=""
            />
            <ModalFrangos />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Suínos
            </h4>
            <img
              src="https://agroceresmultimix.com.br/blog/wp-content/uploads/2015/06/ergrtgbrtgb.jpg"
              alt=""
            />
            <ModalSuinos />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Bovinos
            </h4>
            <img
              src="https://assets.corteva.com/is/image/Corteva/IMG-Pasto-extraordinario-mercado-carne-europeu2?$articleHeader_desktop$"
              alt=""
            />
            <ModalBovinos />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Feijoada
            </h4>
            <img
              src="https://blog.biglar.com.br/wp-content/uploads/2021/10/typical-brazilian-dish-called-feijoada-made-with-black-beans-pork-sausage.jpg"
              alt=""
            />
            <ModalFeijoada />
          </div>
        </Cards>
        <Cards>
          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Lacticinios
            </h4>
            <img
              src="https://odyssey-international.co.za/wp-content/uploads/2022/06/artigo.jpg"
              alt=""
            />
            <ModalLacticinios />
          </div>
        </Cards>
      </Container>
    </>
  );
}
