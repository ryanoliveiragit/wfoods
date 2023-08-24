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
import { ModalEmbutidos } from "../modal/embutidos";
import { ModalPescados } from "../modal/pescados";
import { ModalConservas } from "../modal/conservas";
import { ModalCordeiro } from "../modal/cordeiro";
import { ModalOleosEGorduras } from "../modal/oleosEGorduras";
import { ModalMolhosECondimentos } from "../modal/molhosECondimentos";
import { ModalPaesEMassas } from "../modal/paesEMassas";
import { ModalPoupasEFrutas } from "../modal/poupasEFrutas";
import { ModalDocesESobremesas } from "../modal/docesESobremesas";
import { ModalBebidas } from "../modal/bebidas";
import { ModalEspetinhos } from "../modal/espetinhos";
import { ModalDescartaveis } from "../modal/descartaveis";
import { ModalTemperos } from "../modal/temperos";
import { ModalBatata } from "../modal/batata";
import { ModalComodites } from "../modal/comodites";

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

        <Cards data-aos="fade-up" className="imageProductsLast">
          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Frangos
            </h4>
            <img
              src="https://cdn.discordapp.com/attachments/566850308702208001/1136760128104837161/img5.png"
              alt=""
            />
            <ModalFrangos />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Batatas
            </h4>
            <img
              src="https://www.quer-cafe.com/wp-content/uploads/2023/01/38-9-1024x682.png"
              alt=""
            />
            <ModalBatata />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Comodites
            </h4>
            <img
              src="https://static.itdg.com.br/images/1200-675/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg"
              alt=""
            />
            <ModalComodites />
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

        </Cards>

        <Cards className="imageProductsLast">
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

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Embutidos
            </h4>
            <img
              src="https://wx.mlcdn.com.br/ponzi/production/portaldalu/86401_00.jpg"
              alt=""
            />
            <ModalEmbutidos />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Pescados
            </h4>
            <img
              src="https://media.istockphoto.com/id/520490716/pt/foto/frutos-do-mar-no-gelo.jpg?s=612x612&w=0&k=20&c=7u5g0NgW4VMDemvqCPxunQADlvC_x80gcfvrFIjpKtQ="
              alt=""
            />
            <ModalPescados />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Conservas
            </h4>
            <img
              src="https://www.diariodaregiao.com.br/image/policy:1.36917:1640057592/image.jpg?f=2x1"
              alt=""
            />
            <ModalConservas />
          </div>
        </Cards>

        <Cards data-aos="fade-up" className="imageProducts">

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Temperos
            </h4>
            <img
              src="https://media.istockphoto.com/id/938050806/pt/foto/variety-of-spices-and-herbs-on-kitchen-table.jpg?s=612x612&w=0&k=20&c=fUAeZRwr7NY9AKAdnjfTHY1xaDtgYlzGNJu9OpY0VzQ="
              alt=""
            />
            <ModalTemperos />
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
              <GoCheck /> Descartáveis
            </h4>
            <img
              src="https://cdn.awsli.com.br/600x450/446/446822/produto/18330068/1f277c8d38.jpg"
              alt=""
            />
            <ModalDescartaveis />
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

        <Cards className="imageProducts">
          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Cordeiros
            </h4>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <ModalCordeiro />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Óleos e gorduras
            </h4>
            <img
              src="https://nutrigiseledefaria.com.br/wp-content/uploads/2017/06/%C3%B3leos.jpg"
              alt=""
            />
            <ModalOleosEGorduras />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Pães e massas e farinhas
            </h4>
            <img
              src="https://www.marianapaludo.com.br/wp-content/uploads/2020/09/paes.jpg"
              alt=""
            />
            <ModalPaesEMassas />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Molhos e condimentos
            </h4>
            <img
              src="https://img.freepik.com/fotos-premium/condimentos-e-molhos-frescos-na-mesa-de-madeira-closeup_392895-14781.jpg"
              alt=""
            />
            <ModalMolhosECondimentos />
          </div>
        </Cards>

        <Cards data-aos="fade-up" className="imageProducts">
          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Poupas e frutas cong.
            </h4>
            <img
              src="https://www.deltafrio.com.br/img/gco-images/581-pt-br.jpg"
              alt=""
            />
            <ModalPoupasEFrutas />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Doces e sobremesas
            </h4>
            <img
              src="https://img.freepik.com/fotos-premium/varios-doces-e-sobremesas-na-cafeteria-sao-exibidos-de-perto_759575-6302.jpg?w=2000"
              alt=""
            />
            <ModalDocesESobremesas />
          </div>

          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Bebidas
            </h4>
            <img
              src="https://media-manager.noticiasaominuto.com.br/1920/naom_6479cc4433803.jpg"
              alt=""
            />
            <ModalBebidas />
          </div>


          <div data-aos="fade-up">
            <h4>
              <GoCheck /> Espetinhos/pratos Ind.
            </h4>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMYX3Y7bJ_7KpGkmyVE_n4Ka6JZXQlHCtgKgoUF=w1080-h608-p-no-v0"
              alt=""
            />
            <ModalEspetinhos />
          </div>


        </Cards>

      </Container>
    </>
  );
}
