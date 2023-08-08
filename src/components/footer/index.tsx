import { ContainerFooter, IconsContainer, ContentFooter } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <h1>WFOODS</h1>
        <div>
          <div>
            <strong>CNPJ</strong> - 50.512.153/0001-96
          </div>
          <div>
            <strong>Email</strong> - contato@distribuidorawfoods.com.br
          </div>
        </div>
        <div>
          <div>
            <strong>Telefones</strong> - 011 99296-4453
          </div>
          <div>
            <strong>Endereço</strong> - Avenida Japão 1261 Sala 2, - Mogi das
            Cruzes
          </div>
        </div>
        <span>Made with by ❤️ <a className="made" target="_blank" href="https://www.ryanvs.dev/">ryanvs</a></span>
      </ContentFooter>
    </ContainerFooter>
  );
}
