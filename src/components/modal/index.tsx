import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalBovinos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Bovinos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ACEM BOV RESF FRIALTO</p>
        <p className="m-0">ACEM EM CUBOS BOV CONG JORDANESIA</p>
        <p className="m-0">ALCATRA COM MAMINHA BOV RESF FRIALTO</p>
        <p className="m-0">ALCATRA COMPLETA GRILL +- 6,5KG BOV RESF FRIALTO</p>
        <p className="m-0">ALCATRA COMPLETA GRILL 7,5 KG UP BOV RESF FRIALTO</p>
        <p className="m-0">ALMONDEGA BOV ANGUS CONG 18 X 500GR BRASA</p>
        <p className="m-0">ALMONDEGA BOV CONG BRASIL BURGUER</p>
        <p className="m-0">ALMONDEGA BOV CONG CXA 9X1KG BRASA</p>
        <p className="m-0">ARANHA (RECORTE DE ALCATRA) BOV CONG FRIALTO</p>
        <p className="m-0">
          BIFE CHORIZO (CONTRA FILE) GRILL BOV CONG SUPERCHEF
        </p>
        <p className="m-0">BIFE DO VAZIO (PACU) BOV CONG PLENA</p>
        <p className="m-0">BIFE DO VAZIO (PACU) BOV CONG FRIALTO</p>
        <p className="m-0">CAPA DE COXAO MOLE BOV RESF MONTANA</p>
        <p className="m-0">CAPA DE COXAO MOLE BOV RESF ESTRELA</p>
        <p className="m-0">CAPA DE COXAO MOLE BOV RESF MATABOI</p>
        <p className="m-0">CAPA DE FILE BOV RESF MATABOI</p>
        <p className="m-0">CARNE DE SANGRIA BOV CONG FRIALTO</p>
        <p className="m-0">CARNE EM CUBOS (PATINHO) BOV CONG PCT 2KG MEZATO</p>
        <p className="m-0">CARNE INDUSTRIAL BOV CONG BOI BAIO</p>
        <p className="m-0">CARNE MOIDA BOV CONG TUBETE 500G VALE</p>
        <p className="m-0">CARNE MOIDA DO DIANTEIRO BOV CONG PROVASI</p>
        <p className="m-0">CARNE MOIDA DO PATINHO BOV CONG PLENA</p>
        <p className="m-0">CARNE MOIDA DO PATINHO BOV CONG 12X1KG BOI FORTE</p>
        <p className="m-0">CARNE MOIDA TIPO A BOV CONG RED MEAT</p>
        <p className="m-0">CHULETA GRILL BOV CONG CAMPO NOBRE</p>
        <p className="m-0">CONTRA FILE COM NOIX BOV CONG JORDANESIA</p>
        <p className="m-0">CONTRA FILE COM NOIX BOV CONG FRIALTO</p>
        <p className="m-0">CONTRA FILE COM NOIX BOV CONG TF MONTANA</p>
        <p className="m-0">CONTRA FILE COM NOIX BOV RESF FRIBAL</p>
        <p className="m-0">
          CONTRA FILE EM BIFES 200GR UP (BIFE DE TIRA) GRILL BOV CONG BASSI
        </p>
        <p className="m-0">
          CONTRA FILE EM BIFES 200GR UP (STEAK) GRILL BOV CONG BASSI
        </p>
        <p className="m-0">
          CONTRA FILE GRILL 4KG UP SEM NOIX BOV RESF MONTANA STEAKHOUSE
        </p>
        <p className="m-0">CONTRA FILE GRILL BOV RESF JORDANESIA</p>
        <p className="m-0">CONTRA FILE SEM NOIX BOV RESF MATABOI</p>
        <p className="m-0">CONTRA FILE SEM NOIX BOV RESF QUALITY BEEF</p>
        <p className="m-0">CORAÇAO BOV CONG ASTRA</p>
        <p className="m-0">CORAÇAO BOV CONG BOI BAIO</p>
        <p className="m-0">CORAÇAO BOV CONG MATABOI</p>
        <p className="m-0">
          CORAÇAO DA ALCATRA (BABY BEEF) GRILL BOV RESF MONTANA STEAKHOUSE
        </p>
        <p className="m-0">CORDAO DO FILE MIGNON BOV CONG ARROBA</p>
        <p className="m-0">
          COSTELA DO TRASEIRO EM TIRAS COM OSSO 4D BOV CONG PROVASI
        </p>
        <p className="m-0">
          COSTELA DO TRASEIRO EM TIRAS COM OSSO BOV CONG FRIALTO
        </p>
        <p className="m-0">
          COSTELA DO TRASEIRO EM TIRAS COM OSSO BOV CONG MATABOI
        </p>
        <p className="m-0">
          COSTELA DO TRASEIRO EM TIRAS COM OSSO BOV CONG TF MONTANA
        </p>
        <p className="m-0">
          COSTELA DO TRASEIRO JANELA BOV CONG 6KG A 9,5 KG MONTANA STEAKHOUSE
        </p>
        <p className="m-0">
          COSTELA DO TRASEIRO JANELA PORCIONADA COM OSSO BOV CONG ESTANCIA
        </p>
        <p className="m-0">
          COSTELA DO TRASEIRO MINGA 6,5 KG A 9,5KG BOV CONG MONTANA STEAKHOUSE
        </p>
        <p className="m-0">COXAO DURO BOV RESF MATABOI</p>
        <p className="m-0">COXAO MOLE BOV RESF FRIALTO</p>
        <p className="m-0">COXAO MOLE BOV RESF ARROBA</p>
        <p className="m-0">CUPIM A BOV CONG BOIBOM</p>
        <p className="m-0">CUPIM A IMPORTADO BOV RESF FRIGOMERC</p>
        <p className="m-0">CUPIM B BOV RESF FRIALTO</p>
        <p className="m-0">FIGADO BOV CONG BOI BAIO</p>
        <p className="m-0">FIGADO BOV CONG MATABOI</p>
        <p className="m-0">FIGADO BOV CONG FRIALTO</p>
        <p className="m-0">FILE DE COSTELA (BIFE ANCHO) BOV RESF MATABOI</p>
        <p className="m-0">
          FILE DE COSTELA (BIFE ANCHO) BOV RESF QUALITY BEEF
        </p>
        <p className="m-0">
          FILE DE COSTELA (BIFE ANCHO) FATIADO BOV CONG DI PRIMA
        </p>
        <p className="m-0">
          FILE DE COSTELA BIFE ANCHO GRILL BOV RESF MONTANA STEAKHOUSE
        </p>
        <p className="m-0">
          FILE DE COSTELA EM BIFES 200GR UP (STEAK) GRILL BOV CONG BASSI
        </p>
        <p className="m-0">FILE MIGNON 3/4 SEM CORDÃO BOV RESF FRIALTO</p>
        <p className="m-0">FILE MIGNON 4/5 SEM CORDAO BOV RESF FRIALTO</p>
        <p className="m-0">FILE MIGNON 4/5 SEM CORDAO BOV RESF MAXXY GRILL</p>
        <p className="m-0">FRALDA 0,6/1,6KG BOV RESF MONTANA</p>
        <p className="m-0">FRALDA BOV CORTADA AO MEIO RESF</p>
        <p className="m-0">
          HAMBURGUER BOV CONG 36X90G BRASIL BURGUER 97 CX 2 KG R$ 15,89 KG
        </p>
        <p className="m-0">
          HAMBURGUER BOV CONG CXA 36X56G BRASA 6 CX 2 KG R$ 18,90 KG
        </p>
        <p className="m-0">
          HAMBURGUER BOV CONG CXA 36X90G BRASA 3 CX 3 KG R$ 18,90 KG
        </p>
        <p className="m-0">
          HAMBURGUER DE PICANHA BOV CONG CXA 12X56G CXA 672GR BRASA 4 CX 8 KG R$
          20,49 KG
        </p>
        <p className="m-0">
          HAMBURGUER DE PICANHA BOV CONG CXA 30X120G BRASA 40 CX 4 KG R$ 19,90
          KG
        </p>
        <p className="m-0">
          ROLHA DA ALCATRA (RECORTE) BOV RESF MATABOI 83 CX 23 KG R$ 22,90 KG
        </p>
        <p className="m-0">SALSA BOV CONG BOI BAIO 7 CX 26 KG R$ 4,90 KG</p>
        <p className="m-0">
          TIRINHA DE CONTRA FILE BOV RESF FRIALTO 90 CX 23 KG R$ 21,99 KG
        </p>
        <p className="m-0">
          TIRINHA DE CONTRA FILE BOV RESF MONTANA 32 CX 21 KG R$ 22,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE CONTRA FILE BOV RESF MATABOI 1 CX 21 KG R$ 23,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE CONTRA FILE BOV RESF JORDANESIA 92 CX 24 KG R$ 21,99 KG
        </p>
        <p className="m-0">
          TIRINHA DE CONTRA FILE BOV RESF FRIBAL 72 CX 21 KG R$ 22,49 KG
        </p>
        <p className="m-0">
          TIRINHA DE CONTRA FILE BOV RESF FRIGOMERC 12 CX 21 KG R$ 22,49 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF MONTANA 89 CX 25 KG R$ 34,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF FRIBAL 99 CX 27 KG R$ 35,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF MATABOI 98 CX 25 KG R$ 36,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF PLENA 49 CX 23 KG R$ 37,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF FRIGOMERC 10 CX 23 KG R$ 38,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF FRIBAL 79 CX 25 KG R$ 38,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF MONTANA 36 CX 25 KG R$ 39,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF PLENA 98 CX 25 KG R$ 40,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF FRIGOMERC 2 CX 23 KG R$ 42,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FILE MIGNON BOV RESF MONTANA 3 CX 27 KG R$ 43,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDA BOV RESF FRIALTO 32 CX 25 KG R$ 25,99 KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDA BOV RESF MATABOI 208 CX 27 KG R$ 27,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDAO BOV CONG TF MONTANA 60 CX 20 KG R$ 27,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDAO BOV RESF BOI BRASIL 28 CX 26 KG R$ 27,49 KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDINHA DIAFRAGMA BOV CONG FRIALTO 88 CX 25 KG R$ 18,99
          KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDINHA DIAFRAGMA BOV CONG BARRA MANSA 202 CX 24 KG R$
          19,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE FRALDINHA DIAFRAGMA BOV CONG MATABOI 1 CX 28 KG R$ 20,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER ANGUS BOV CONG CXA 16X200G BRASA 25 CX 3 KG R$
          35,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER ANGUS BOV CONG CXA 30X120GR BRASA 5 CX 4 KG R$
          31,49 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER ANGUS GOURMET BOV CONG CXA12X400G CXTA2X200G
          BASSI 1 CX 5 KG R$ 36,99 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER BOV CONG 36X90G BRASIL BURGUER 225 CX 3 KG R$
          15,89 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER BOV CONG CXA 12X56GR CXA 672GR BRASA 11 CX 8 KG
          R$ 20,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER BOV CONG CXA 30X120G BRASA 20 CX 4 KG R$ 18,90
          KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER BOV CONG CXA 36X56G BRASIL BURGUER 97 CX 2 KG R$
          15,89 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER BOV CONG CXA 36X56G BRASA 6 CX 2 KG R$ 18,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER BOV CONG CXA 36X90G BRASA 3 CX 3 KG R$ 18,90 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER DE PICANHA BOV CONG CXA 12X56G CXA 672GR BRASA 4
          CX 8 KG R$ 20,49 KG
        </p>
        <p className="m-0">
          TIRINHA DE HAMBURGUER DE PICANHA BOV CONG CXA 30X120G BRASA 40 CX 4 KG
          R$ 19,90 KG
        </p>
      </Dialog>
    </div>
  );
};

export const ModalSuinos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Lista de Produtos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          ALMONDEGA SUINA CONG 10X400GR TOP X 114 CX 4 KG R$ 22,99 KG
        </p>
        <p className="m-0">
          BARRIGA SUINA COM PELE CONG PALMALI 52 CX 21 KG R$ 15,99 KG
        </p>
        <p className="m-0">
          BARRIGA SUINA CONG FRIVATTI 124 CX 23 KG R$ 17,99 KG
        </p>
        <p className="m-0">
          CARRE SUINO COM OSSO CONG DALIA 5 CX 20 KG R$ 11,89 KG
        </p>
        <p className="m-0">
          CARRE SUINO COM OSSO CONG PALMALI 26 CX 18 KG R$ 12,29 KG
        </p>
        <p className="m-0">
          COPA LOMBO (SOBREPALETA) COM OSSO SUINO CONG FRIVATTI 46 CX 22 KG R$
          12,49 KG
        </p>
        <p className="m-0">
          COPA LOMBO (SOBREPALETA) SEM OSSO SUINO CONG FRIELLA 4 CX 20 KG R$
          16,90 KG
        </p>
        <p className="m-0">
          COPA LOMBO (SOBREPALETA) SEM OSSO SUINO CONG SULITA 134 CX 11 KG R$
          15,49 KG
        </p>
        <p className="m-0">
          COPA LOMBO (SOBREPALETA) SEM OSSO/PELE SUINO CONG MY PORK 42 CX 24 KG
          R$ 14,89 KG
        </p>
        <p className="m-0">
          COPA LOMBO (SOBREPALETA) COM OSSO SUINO CONG FRIELLA 1 CX 21 KG R$
          13,90 KG
        </p>
        <p className="m-0">
          COSTELA SUINA DEFUMADA COM OSSO RESF SULITA 44 CX 7 KG R$ 24,90 KG
        </p>
        <p className="m-0">
          COSTELA SUINA EM TIRAS CHURRASCO COM OSSO CONG RAINHA DA PAZ 44 CX 19
          KG R$ 21,99 KG
        </p>
        <p className="m-0">
          COSTELA SUINA EM TIRAS GRILL COM OSSO CONG PALMALI 17 CX 18 KG R$
          17,90 KG
        </p>
        <p className="m-0">
          FILEZINHO SUINO CONG DALIA 59 CX 21 KG R$ 15,49 KG
        </p>
        <p className="m-0">
          FILEZINHO SUINO CONG MY PORK 53 CX 17 KG R$ 15,90 KG
        </p>
        <p className="m-0">
          HAMBURGUER DE COSTELA SUINA GOURMET CONG 30X150GR TOP X 49 CX 5 KG R$
          28,90 KG
        </p>
        <p className="m-0">
          JOELHO SUINO TRASEIRO TEMPERADO CONG ESTRELA 26 CX 15 KG R$ 12,90 KG
        </p>
        <p className="m-0">
          LOMBO SUINO CORTADO AO MEIO CONG SAUDALI 41 CX 20 KG R$ 15,90 KG
        </p>
        <p className="m-0">
          LOMBO SUINO INGLES TEMPERADO GOURMET CONG SULITA 484 CX 11 KG R$ 15,90
          KG
        </p>
        <p className="m-0">
          LOMBO SUINO SEM OSSO CONG FRIVATTI 54 CX 23 KG R$ 16,49 KG
        </p>
        <p className="m-0">
          LOMBO SUÍNO SEM OSSO TEMP CONG SULITA 11 CX 11 KG R$ 14,90 KG
        </p>
        <p className="m-0">
          PALETA SUINA EM CUBOS CONG FRIGBRASIL 51 CX 10 KG R$ 15,90 KG
        </p>
        <p className="m-0">
          PALETA SUINA SEM OSSO CONG MY PORK 25 CX 21 KG R$ 12,69 KG
        </p>
        <p className="m-0">
          PALETA SUINA SEM OSSO TEMP CONG SULITA 805 CX 11 KG R$ 14,90 KG
        </p>
        <p className="m-0">
          PANCETA SUINA COM PELE TEMPERADA CONG MY PORK 31 CX 12 KG R$ 19,90 KG
        </p>
        <p className="m-0">
          PANCETA SUINA TEMPERADA CONG FRICASA 1 CX 15 KG R$ 19,90 KG
        </p>
        <p className="m-0">
          PERNIL SUINO COM OSSO COM PELE CONG FRIGOL 1 CX 14 KG R$ 12,99 KG
        </p>
        <p className="m-0">
          PERNIL SUINO COM OSSO COM PELE CONG DALIA 4 CX 13 KG R$ 13,89 KG
        </p>
        <p className="m-0">
          PERNIL SUINO EM CUBOS CONG 2 X 5KG FRIGBRASIL 36 CX 10 KG R$ 15,90 KG
        </p>
        <p className="m-0">
          PERNIL SUINO SEM OSSO SEM PELE +-11KG CONG FRIELLA 44 CX 20 KG R$
          13,90 KG
        </p>
        <p className="m-0">
          PERNIL SUINO SEM OSSO SEM PELE CONG MY PORK 19 CX 26 KG R$ 12,90 KG
        </p>
        <p className="m-0">
          PICANHA SUINA IN NATURA CONG FRIELLA 60 CX 12 KG R$ 20,79 KG
        </p>
        <p className="m-0">
          TOUCINHO DE LOMBO COM PELE CONG DALIA 1 CX 20 KG R$ 12,99 KG
        </p>
        <p className="m-0">
          TOUCINHO SUINO COM PELE CONG SAUDALI 55 CX 20 KG R$ 12,90 KG
        </p>
        <p className="m-0">
          TOUCINHO SUINO COM PELE EM TIRAS CONG BJP 66 CX 18 KG R$ 13,90 KG
        </p>
        <p className="m-0">TOUCINHO SUINO COM PELE EM TIRAS CONG</p>
      </Dialog>
    </div>
  );
};

export const ModalLaticinio = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Laticínios em geral"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">CHEDDAR CLUBE DO MOLHO BISNAGA CXA 4X1,5KG</p>
        <p className="m-0">CREAM CHEESE BISNAGA CXA 8X1,2KG</p>
        <p className="m-0">CREAM CHEESE FORNEAVEL BISNAGA CXA 12X1,2KG</p>
        <p className="m-0">CREME DE LEITE CXA 12X1,03KG</p>
        <p className="m-0">ESPETINHO DE QUEIJO COALHO +-350G RESF</p>
        <p className="m-0">LEITE CONDENSADO BAG CXA 4X2,5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMI DESNATADO BAG CXA 4X5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMIDESNATADO CXA 27X395G</p>
        <p className="m-0">LEITE EM PO INTEGRAL INSTANTANEO FDO 10X1KG</p>
        <p className="m-0">LEITE LONGA VIDA INTEGRAL UHT CXA 12X1L</p>
        <p className="m-0">LEITE LONGA VIDA INTEGRAL UHT CXA 12X1L</p>
        <p className="m-0">LEITE SEMI DESNATADO CXA 12X1L</p>
        <p className="m-0">QUEIJO COALHO BARRA +-2KG RESF</p>
        <p className="m-0">QUEIJO COALHO BARRA +-2KG RESF</p>
        <p className="m-0">QUEIJO COALHO BARRA +-3KG RESF</p>
        <p className="m-0">QUEIJO GORGONZOLA +-3KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">
          QUEIJO MUSSARELA NOZAO PARA CHURRASCO RESF FDO 10 X 2KG
        </p>
        <p className="m-0">QUEIJO MUSSARELA NOZINHO RESF FDO 10 X 2KG</p>
        <p className="m-0">QUEIJO PARMESAO +-6KG RESF</p>
        <p className="m-0">
          QUEIJO PARMESAO MONTANHES PEÇA FARDO 3 X +- 6KG RESF
        </p>
        <p className="m-0">QUEIJO PARMESAO RALADO MEDIO PCT 20 X 1KG</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF</p>
        <p className="m-0">QUEIJO PROVOLONE DEFUMADO PEÇA 3 X +- 5 KG</p>
        <p className="m-0">QUEIJO PROVOLONE FRESCO DEFUMADO +-5KG RESF</p>
        <p className="m-0">QUEIJO SABOR CHEDDAR FATIADO RESF CXA 8 X 2,27KG</p>
        <p className="m-0">
          QUEIJO SABOR MUSSARELA FATIADO RESF CXA 8 X 2,27KG
        </p>
        <p className="m-0">QUEIJO SABOR PRATO FATIADO RESF CXA 8X2,27KG</p>
        <p className="m-0">
          REQUEIJAO (MISTURA LACTEA COM AMIDO) BISNAGA CXA 8X1,8KG
        </p>
        <p className="m-0">REQUEIJAO (REQ/AMIDO) CHEDDAR BISNAGA CXA 8X1,8KG</p>
        <p className="m-0">REQUEIJAO CREMOSO CHEDDAR BISNAGA CXA 12X1,5KG</p>
        <p className="m-0">
          REQUEIJAO CREMOSO ORIG CULINÁRIO CATUPIRY TRAD BNG 12X1,5 KG
        </p>
        <p className="m-0">
          REQUEIJAO CREMOSO TIPO CHEDDAR BISNAGA CXA 6X1,01KG
        </p>
        <p className="m-0">REQUEIJAO CREMOSO TRAD BISNAGA RESF 8X1,8KG</p>
        <p className="m-0">
          REQUEIJAO CREMOSO TRADICIONAL BISNAGA CXA 12 X 1,5KG
        </p>
        <p className="m-0">REQUEIJAO TRADICIONAL BISNAGA CXA 8X1,8KG</p>
      </Dialog>
    </div>
  );
};

export const ModalAves = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Aves"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">CHEDDAR CLUBE DO MOLHO BISNAGA CXA 4X1,5KG</p>
        <p className="m-0">CREAM CHEESE BISNAGA CXA 8X1,2KG</p>
        <p className="m-0">CREAM CHEESE FORNEAVEL BISNAGA CXA 12X1,2KG</p>
        <p className="m-0">CREME DE LEITE CXA 12X1,03KG</p>
        <p className="m-0">ESPETINHO DE QUEIJO COALHO +-350G RESF</p>
        <p className="m-0">LEITE CONDENSADO BAG CXA 4X2,5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMI DESNATADO BAG CXA 4X5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMIDESNATADO CXA 27X395G</p>
        <p className="m-0">LEITE EM PO INTEGRAL INSTANTANEO FDO 10X1KG</p>
        <p className="m-0">LEITE LONGA VIDA INTEGRAL UHT CXA 12X1L</p>
        <p className="m-0">LEITE LONGA VIDA INTEGRAL UHT CXA 12X1L</p>
        <p className="m-0">LEITE SEMI DESNATADO CXA 12X1L</p>
        <p className="m-0">QUEIJO COALHO BARRA +-2KG RESF</p>
        <p className="m-0">QUEIJO COALHO BARRA +-2KG RESF</p>
        <p className="m-0">QUEIJO COALHO BARRA +-3KG RESF</p>
        <p className="m-0">QUEIJO GORGONZOLA +-3KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF</p>
        <p className="m-0">
          QUEIJO MUSSARELA NOZAO PARA CHURRASCO RESF FDO 10 X 2KG
        </p>
        <p className="m-0">QUEIJO MUSSARELA NOZINHO RESF FDO 10 X 2KG</p>
        <p className="m-0">QUEIJO PARMESAO +-6KG RESF</p>
        <p className="m-0">
          QUEIJO PARMESAO MONTANHES PEÇA FARDO 3 X +- 6KG RESF
        </p>
        <p className="m-0">QUEIJO PARMESAO RALADO MEDIO PCT 20 X 1KG</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF</p>
        <p className="m-0">QUEIJO PROVOLONE DEFUMADO PEÇA 3 X +- 5 KG</p>
        <p className="m-0">QUEIJO PROVOLONE FRESCO DEFUMADO +-5KG RESF</p>
        <p className="m-0">QUEIJO SABOR CHEDDAR FATIADO RESF CXA 8 X 2,27KG</p>
        <p className="m-0">
          QUEIJO SABOR MUSSARELA FATIADO RESF CXA 8 X 2,27KG
        </p>
        <p className="m-0">QUEIJO SABOR PRATO FATIADO RESF CXA 8X2,27KG</p>
        <p className="m-0">
          REQUEIJAO (MISTURA LACTEA COM AMIDO) BISNAGA CXA 8X1,8KG
        </p>
        <p className="m-0">REQUEIJAO (REQ/AMIDO) CHEDDAR BISNAGA CXA 8X1,8KG</p>
        <p className="m-0">REQUEIJAO CREMOSO CHEDDAR BISNAGA CXA 12X1,5KG</p>
        <p className="m-0">
          REQUEIJAO CREMOSO ORIG CULINÁRIO CATUPIRY TRAD BNG 12X1,5 KG
        </p>
        <p className="m-0">
          REQUEIJAO CREMOSO TIPO CHEDDAR BISNAGA CXA 6X1,01KG
        </p>
        <p className="m-0">REQUEIJAO CREMOSO TRAD BISNAGA RESF 8X1,8KG</p>
        <p className="m-0">
          REQUEIJAO CREMOSO TRADICIONAL BISNAGA CXA 12 X 1,5KG
        </p>
        <p className="m-0">REQUEIJAO TRADICIONAL BISNAGA CXA 8X1,8KG</p>
      </Dialog>
    </div>
  );
};

export const ModalEmbutidos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Embutidos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">APRESUNTADO LANCHE RESF</p>
        <p className="m-0">BACON EM CUBOS DEFUMADO PCT 1KG</p>
        <p className="m-0">BACON EXTRA DE PALETA DEFUMADO</p>
        <p className="m-0">BACON FATIADO BARRIGA RESF PCT 1KG</p>
        <p className="m-0">BACON FATIADO DA PALETA DEFUMADO RESF PCT 1KG</p>
        <p className="m-0">BACON MANTA DEFUMADO RESF</p>
        <p className="m-0">BACON MANTA DEFUMADO RESF REZENDE</p>
        <p className="m-0">BACON MANTA ESPECIAL EXTRA DEF RESF</p>
        <p className="m-0">
          BIFE DE LINGUIÇA AO VINHO BRANCO CONG CXA 10 X +-600GR
        </p>
        <p className="m-0">BIFE DE LINGUIÇA APIMENTADO CONG CXA 10X+-600G</p>
        <p className="m-0">BIFE DE LINGUIÇA C/SOJA INTERF CONG CXA 52X100GR</p>
        <p className="m-0">BIFE DE LINGUIÇA COM AZEITONA CONG CXA 10X+-600G</p>
        <p className="m-0">BIFE DE LINGUIÇA COM BACON CONG CXA 10X+-600G</p>
        <p className="m-0">
          BIFE DE LINGUIÇA COM ERVAS DE PROVENCE CONG 10 X +- 600GR
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA COM PIMENTA BIQUINHO CONG CXA 10 +- 600GR
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA TOMATE SECO C/MANJERICÃO CONG CXA 10X+-600G
        </p>
        <p className="m-0">BIFE DE LINGUIÇA TRADICIONAL CONG CXA 10X+-600G</p>
        <p className="m-0">CHICKEN EMPANADO COM QUEIJO CONG CXA 10X1KG</p>
        <p className="m-0">
          CHICKEN EMPANADO DE FRANGO SUPREME CONG CXA 2X2,5 KG
        </p>
        <p className="m-0">FILEZINHO DE FRANGO EMPANADO CONG</p>
        <p className="m-0">
          ISCA DE SUINO FORMATO PORKITOS EMPANADO CONG PCT 14 X 700GR
        </p>
        <p className="m-0">
          LINGUIÇA CALABRESA CURVA DEFUMADA RESF CXA 8 X 2 KG
        </p>
        <p className="m-0">LINGUIÇA CALABRESA DEFUMADA PCT 5 X 5KG</p>
        <p className="m-0">LINGUIÇA CALABRESA DEFUMADA RETA 5 X 3KG</p>
        <p className="m-0">LINGUIÇA CALABRESA MISTA COZIDA PCT 3 X 5KG RESF</p>
        <p className="m-0">LINGUIÇA CUIABANA BOV/QJO CONG PCT 9 X 600GR</p>
        <p className="m-0">LINGUIÇA CUIABANA SUINA/QJO CONG PCT 9 X 600GR</p>
        <p className="m-0">LINGUIÇA DE FRANGO FINA CONG</p>
        <p className="m-0">LINGUIÇA DE FRANGO GROSSA CONG</p>
        <p className="m-0">
          LINGUIÇA DE PERNIL COM PIMENTA BIQUINHO CONG.CXA 9X600G
        </p>
        <p className="m-0">LINGUIÇA TOSCANA APIMENTADA FINA RESF 2 X 5KG</p>
        <p className="m-0">
          LINGUIÇA TOSCANA APIMENTADA NA BRASA CONG PCT 1 KG
        </p>
        <p className="m-0">LINGUIÇA TOSCANA APIMENTADA PCT 1KG</p>
        <p className="m-0">LINGUIÇA TOSCANA APIMENTADA PCT 5KG CONG</p>
        <p className="m-0">LINGUIÇA TOSCANA CHURRASCO CONG CXA 15 X 1 KG</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG 20 X 800GR</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG CXA 2 X 5KG</p>
        <p className="m-0">LINGUICA TOSCANA CONG CXA 4X4 KG</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG PCT 4 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG PCT 5 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG PCT 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NA BRASA CONG PCT 5KG </p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG 5 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG CXA 2 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG PCT 4 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG PCT 5KG</p>
        <p className="m-0">LOMBO SUINO EMPANADO CONG 12 X 700GR</p>
        <p className="m-0">
          MINI CHICKEN DE FRANGO EMPANADO COM QUEIJO CONG 15 X 275 GR
        </p>
        <p className="m-0">MORTADELA DEFUMADA RESF</p>
        <p className="m-0">MORTADELA TRADICIONAL RESF</p>
        <p className="m-0">MORTADELA TRADICIONAL RESF</p>
        <p className="m-0">PEPPERONI FATIADO RESF CXA 12 X 800GR</p>
        <p className="m-0">PRESUNTO COZIDO OVAL S/CAPA GORD +-3,5KG</p>
        <p className="m-0">PRESUNTO COZIDO RETANGULAR</p>
        <p className="m-0">PRESUNTO COZIDO SEM CAPA DE GORDURA +- 3,5KG RESF</p>
        <p className="m-0">
          PRESUNTO DO LOMBO LEVISSIMO SEARA RESF PEÇA +- 3,5KG
        </p>
        <p className="m-0">
          ROCAMBOLE DE LINGUIÇA C/ QUEIJO PROVOLONE CONG 16 X 650GR
        </p>
        <p className="m-0">SALAME TIPO ITALIANO</p>
        <p className="m-0">SALSICHA HOT DOG CONG 6 X 3KG</p>
        <p className="m-0">SALSICHA HOT DOG CONG PCT 6 X 3KG</p>
        <p className="m-0">STEAK DE FRANGO EMPANADO CONG PCT 10 X 960GR</p>
        <p className="m-0">TIRAS DE FRANGO EMPANADO CONG</p>
      </Dialog>
    </div>
  );
};

export const ModalPescados = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Pescados"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ATUM SOLIDO NATURAL CXA 24X170G</p>
        <p className="m-0">CAMARAO 7 BARBAS DESCASCADO CONG CXA 8 X 2KG </p>
        <p className="m-0">CAMARAO EMPANADO PRE FRITO CONG CXA 15X300G</p>
        <p className="m-0">CASQUINHA DE SIRI DESFIADA CONG CXA 18X1KG</p>
        <p className="m-0">FILE DE MERLUZAO 200G UP CONG</p>
        <p className="m-0">FILE DE SAITHE 1KG UP CONG</p>
        <p className="m-0">FILE DE SAITHE C/PELE 1KG UP CONG</p>
        <p className="m-0">FILE DE SALMAO 500GR CONG</p>
        <p className="m-0">FILE DE SALMAO PREMIUM COHO CHILENO CONG</p>
        <p className="m-0">FILE DE TILAPIA 30% GLAZING CONG CXA 3X5KG</p>
        <p className="m-0">FILE DE TILAPIA EMPANADO CONG PCT 14 X 700GR</p>
        <p className="m-0">ISCA DE TILAPIA EMPANADO CONG PCT 14 X 700G</p>
        <p className="m-0">LOMBO DE CAÇÃO CONG</p>
        <p className="m-0">LULA EM ANEIS A GRANEL CONG</p>
        <p className="m-0">MERLUZA EVISCERADA S/CABECA CONG</p>
        <p className="m-0">PEIXE CORVINA INTEIRA CONG</p>
        <p className="m-0">PEIXE DOURADO EVISCERADO CONG</p>
        <p className="m-0">PEIXE PORQUINHO PEROA ESVICERADO IQF CONG</p>
        <p className="m-0">PEIXE PORQUINHO PEROA ESVICERADO IQF CONG</p>
        <p className="m-0">POLACA DO ALASKA SALG DESFIADA CONG 500G</p>
        <p className="m-0">SARDINHA INTEIRA CONG PCT 800GR</p>
      </Dialog>
    </div>
  );
};

export const ModalTemperos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Temperos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ALHO FRITO FDO 20X500G</p>
        <p className="m-0">CAMARAO 7 BARBAS DESCASCADO CONG CXA 8 X 2KG</p>
        <p className="m-0">ALHO INTEIRO DESCASCADO CONG 15X1,02KG</p>
        <p className="m-0">ALHO INTEIRO DESCASCADO IMPORTADO CONG CXA 5X2KG</p>
        <p className="m-0">ALHO TRITURADO 36 X 200G</p>
        <p className="m-0">ALHO TRITURADO BALDE 4 X 3KG</p>
        <p className="m-0">AMACIANTE DE CARNES CXA 10X1,01KG</p>
        <p className="m-0">AMACIANTE DE CARNES CXA 10X1,05KG</p>
        <p className="m-0">AMACIANTE DE CARNES CXA 6X1,01KG</p>
        <p className="m-0">CALDO DE BACON CXA 10X1,01KG</p>
        <p className="m-0">CALDO DE BACON CXA 10X1,05KG</p>
        <p className="m-0">CALDO DE CARNE CXA 10X1,01KG</p>
        <p className="m-0">CALDO DE CARNE CXA 10X1,05KG</p>
        <p className="m-0">CALDO DE CARNE CXA 6X1,01KG </p>
        <p className="m-0">CALDO DE GALINHA CXA 10X1,01KG</p>
        <p className="m-0">CALDO DE GALINHA CXA 6X1,01KG</p>
        <p className="m-0">CALDO DE PEIXE CXA 10X1,01KG</p>
        <p className="m-0">CREME DE CEBOLA CXA 10X1,01KG</p>
        <p className="m-0">CREME DE CEBOLA CXA 6X1KG</p>
        <p className="m-0">TEMPERO FONDOR CXA 6 X 1,1KG</p>
        <p className="m-0">TEMPERO REALCE DE SABOR PARA CARNES/LEGUMES/ARROZ</p>
      </Dialog>
    </div>
  );
};

export const ModalConservas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Conservas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ALCAPARRA 12/13 CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA PRETA COM CAROÇO CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA PRETA SEM CAROÇO CONSERVA BD 2KG </p>
        <p className="m-0">AZEITONA PRETA FATIADA CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA VERDE COM CAROÇO 28/32 CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA VERDE FATIADA CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA VERDE SEM CAROÇO MEDIA CONSERVA BD 2KG</p>
        <p className="m-0">CEBOLINHA CRISTAL CONSERVA BD 2KG</p>
        <p className="m-0">CHAMPIGNON FATIADO CONSERVA BD 2KG</p>
        <p className="m-0">CHAMPIGNON INTEIRO CONSERVA BD 2KG </p>
        <p className="m-0">DUETO (ERV/MILHO) CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">
          1 DUETO CROCRANTE (ERV/MILHO) AO VAPOR LATA CXA 30X170G
        </p>
        <p className="m-0">ERVILHA CONSERVA SACHET CXA 6X1,7KG</p>
        <p className="m-0">ERVILHA EM CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">ERVILHA TIPO 1 FOOD SERVICE FDO 5X2KG</p>
        <p className="m-0">ERVILHA/MILHO EM CONSERVA SACHET CXA 24 X 170GR</p>
        <p className="m-0">MILHO VERDE EM CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">MILHO VERDE EM CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">OVOS DE CODORNA 2</p>
        <p className="m-0">OVOS DE CODORNA CONSERVA</p>
        <p className="m-0">PALMITO DE PUPUNHA PICADO VIDRO 6 X 1,8KG</p>
        <p className="m-0">PALMITO DE PUPUNHA TOLETE VIDRO 15 X 300GR</p>
        <p className="m-0">PEPINO FATIADO (PICKLES) CONSERVA BD 2KG</p>
        <p className="m-0">PEPINO INTEIRO CONSERVA BD 2KG</p>
        <p className="m-0">
          PICKLES MISTO (CENOURA,NABO,COUVEFLOR,PEPIN)CONSERVA BD 2KG
        </p>
        <p className="m-0">PIMENTA BIQUINHO CONSERVA BD 2KG</p>
        <p className="m-0">SELETA DE LEGUMES EM CONSERVA LATA CXA 24 X 170G</p>
        <p className="m-0">TOMATE SECO CONSERVA BD 1,4KG</p>
        <p className="m-0">TOMATES PELADOS INTEIROS LATA CXA 6X1,5KG</p>
      </Dialog>
    </div>
  );
};

export const ModalBatatas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Conservas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ANEIS DE CEBOLA EMPANADAS CONG CXA 6X1,05KG</p>
        <p className="m-0">ANEIS DE CEBOLA EMPANADOS CONG 10 X 1,1 KG</p>
        <p className="m-0">ANEIS DE CEBOLA EMPANADOS CONG 16 X 400GR</p>
        <p className="m-0">ANEIS DE CEBOLA EMPANADOS CONG CXA 10X1,05KG</p>
        <p className="m-0">BATATA CANOA (RUSTICA C/ CASCA) CONG CXA 5X2KG</p>
        <p className="m-0">BATATA CANOA CONG CXA 6 X 2,5KG</p>
        <p className="m-0">BATATA CANOA CONG CXA7X2KG</p>
        <p className="m-0">BATATA CARINHAS CONG CXA 10X1,05KG</p>
        <p className="m-0">
          BATATA CORTE ESPECIAL STEAKHOUSE 9X18 CONG CXA 6X2,5KG
        </p>
        <p className="m-0">
          BATATA CORTE ESPECIAL STEAKHOUSE 9X18MM CONG CXA 5X2,5KG
        </p>
        <p className="m-0">BATATA CRINKLE CONG CXA 12X1,05KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 5 X 2,5KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 5X2,5KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 6 X 2KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 6X2KG</p>
        <p className="m-0">BATATA CRINKLE WEDGES TEMPERADA CONG 6 X 2KG</p>
        <p className="m-0">BATATA CROSSTRAX (XADREZ) CONG CXA 6 X 2,04 K</p>
        <p className="m-0">BATATA DIPSTERS SKIN ON CONG 4 X 2,5KG</p>
        <p className="m-0">
          BATATA HASH BROWN TRADICIONAL CONG CXA 10 X 1,1 KG
        </p>
        <p className="m-0">BATATA HASH BROWN TRIANGULO CONG CXA 8 X 1,06 KG</p>
        <p className="m-0">
          BATATA MINI HASH BROWN TRIANGULO CONG CXA 8 X 1,06 KG
        </p>
        <p className="m-0">BATATA NOISETTES CONG CXA 4 X 2,5 KG</p>
        <p className="m-0">BATATA ONDULADA COM CASCA 9X18 CONG 14X1,05KG</p>
        <p className="m-0">BATATA PALHA CXA 15X400G</p>
        <p className="m-0">BATATA PALITO 10 MM COATED TEMP CONG 5X2,5KG</p>
        <p className="m-0">BATATA PALITO 10 MM CONG 6 X 2KG</p>
        <p className="m-0">BATATA PALITO 10 MM CONG 6 X 2KG</p>
        <p className="m-0">BATATA PALITO 7MM (FININHAS) 20 X 700GR CONG</p>
        <p className="m-0">BATATA PALITO TRAD 9MM CONG 6 X 2,5KG</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 14X1,05KG</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 36X400GR</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 6X2,5KG</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 6X2KG</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 7X2KG</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 7X2KG</p>
        <p className="m-0">BATATA PARA FORNO CONG CXA 14X1,05KG</p>
        <p className="m-0">BATATA RUSTICA CRISPY ERVAS CONG CXA 7X2KG</p>
        <p className="m-0">
          BATATA SKIN ON WEDGES (RUSTICA COM CASCA) CONG CXA 4X2,5KG
        </p>
        <p className="m-0">BATATA SMILES CONG CXA 6X1,5KG</p>
        <p className="m-0">BATATA SURECRISP CRINKLE 4X2,5KG</p>
        <p className="m-0">CENOURA BABY CONG CXA 4X2,5KG</p>
        <p className="m-0">COUVE FLOR 40/60 CONG CXA 4X2,5KG</p>
        <p className="m-0">COUVE FLOR CONG PCT 30 X 300GR </p>
        <p className="m-0">DADINHO D/BATATA C/QUEIJO CONG 10X1,05KG</p>
        <p className="m-0">ERVILHA FRESCA CONG CXA 4X2,5KG </p>
        <p className="m-0">ERVILHA FRESCA CONG PCT 40 X 300GR</p>
        <p className="m-0">ESPINAFRE FOLHAS CONG CXA 4X2,50KG</p>
        <p className="m-0">JARDINEIRA COM ERVILHA CONG CXA 4X2,5KG</p>
        <p className="m-0">JARDINEIRA PANACHE CONG 30 X 300GR</p>
        <p className="m-0">JARDINEIRA PANACHE CONG CXA 4X2,5KG</p>
        <p className="m-0">JARDINEIRA PRIMAVERA CONG CXA 4 X 2,5KG</p>
        <p className="m-0">MANDIOCA TOLETE CONG 12 X 1 KG</p>
        <p className="m-0">MANDIOCA TOLETE CONG CXA 4 X 2,5KG</p>
        <p className="m-0">MANDIOCA TOLETE CONG CXA 4 X 2,5KG</p>
        <p className="m-0">POLENTA PALITO CONG 30 X 400GR</p>
        <p className="m-0">POLENTA PALITO CONG CXA 10 X 1,02KG</p>
        <p className="m-0">POLENTA PALITO CONG CXA 10X1,05KG</p>
        <p className="m-0">POLENTA PALITO CONG CXA 25X400G</p>
        <p className="m-0">POLENTA PALITO CONG CXA 4X2,5KG</p>
        <p className="m-0">POLENTA PALITO CONG CXA 6 X 2KG</p>
        <p className="m-0">POLENTA RECHEADA COM CALABRESA CONG 10 X 1KG</p>
        <p className="m-0">3 POLENTA RECHEADA COM CALABRESA CONG 10 X 700GR</p>
        <p className="m-0">POLENTA RECHEADA COM CARNE CONG 10 X 700GR</p>
        <p className="m-0">SELETA DE LEGUMES CONG CXA 4X2,5KG</p>
        <p className="m-0">SELETA DE LEGUMES CONG PCT 40 X 300GR</p>
        <p className="m-0">VAGEM EM PEDAÇOS CONG CXA 4X2,5KG</p>
        <p className="m-0">SELETA DE LEGUMES CONG CXA 4X2,5KG</p>
        <p className="m-0">VAGEM INTEIRA CONG CXA 4 X2,5KG </p>
      </Dialog>
    </div>
  );
};

export const ModalOleos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Conservas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">AZEITE DE DENDE VIDRO CXA 12X900ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM GALAO 4 X 5,01LT</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM LATA CX 20X500ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM LATA CXA 24X200ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM LATA CXA 24X500ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM VIDRO CXA 20X500ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM VIDRO CXA 20X500ML</p>
        <p className="m-0">CREME CHANTILLY TP CXA 12X1KG</p>
        <p className="m-0">CREME CULINARIO TP CXA 12X1KG</p>
        <p className="m-0">GORDURA VEGETAL BALDE FRY 400</p>
        <p className="m-0">GORDURA VEGETAL M25 BD 14,5KG</p>
        <p className="m-0">MANTEIGA COMUM COM SAL BLOCO 5KG</p>
        <p className="m-0">MANTEIGA COMUM S/SAL BLOCO RESF 5KG</p>
        <p className="m-0">MANTEIGA COMUM SEM SAL BLOCO 5KG</p>
        <p className="m-0">MANTEIGA COMUM SEM SAL BLOCO 5KG</p>
        <p className="m-0">MANTEIGA COMUM SEM SAL BLOCO 5KG</p>
        <p className="m-0">MARGARINA CREM S/SAL 80% LIPID BD 14,5KG</p>
        <p className="m-0">MARGARINA CREMOSA 75% LIPIDIOS C/SAL BD 15KG</p>
        <p className="m-0">MARGARINA CREMOSA 75% LIPIDIOS COM SAL BD 15KG</p>
        <p className="m-0">MARGARINA CREMOSA 75% LIPIDIOS COM SAL BD 15KG</p>
        <p className="m-0">
          MARGARINA CREMOSA COM SAL 80% DE LIPIDEOS BALDE 14,5KG
        </p>
        <p className="m-0">MARGARINA CREMOSA COM SAL CXA 12X500G</p>
        <p className="m-0">MARGARINA CREMOSA COM SAL CXA 6X1KG</p>
        <p className="m-0">OLEO DE ALGODÃO BD 14,5KG</p>
        <p className="m-0">OLEO DE CANOLA PET CXA 20 X 900ML</p>
        <p className="m-0">OLEO DE GIRASSOL PET CXA 20 X 900ML</p>
        <p className="m-0">OLEO DE MILHO PET CXA 20X900ML</p>
        <p className="m-0">OLEO DE SOJA PET CXA 20X900ML</p>
        <p className="m-0">OLEO DE SOJA PET CXA 20X900ML</p>
        <p className="m-0">SACHET VINAGRE TINTO CXA 200X4ML</p>
        <p className="m-0">VINAGRE DE ALCOOL COLORIDO 4% CXA 12X750ML</p>
        <p className="m-0">VINAGRE DE ALCOOL COLORIDO 4% GALAO 5L</p>
      </Dialog>
    </div>
  );
};

export const ModalComodites = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Conservas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">AÇUCAR DEMERARA CRISTAL NATURAL 10X1KG</p>
        <p className="m-0">AÇUCAR MASCAVO FDO 12X1KG</p>
        <p className="m-0">AÇUCAR REFINADO ESPECIAL FDO 10X1KG</p>
        <p className="m-0">AÇUCAR REFINADO FDO 10 X 1KG</p>
        <p className="m-0">ADOÇANTE LIQUIDO DE SUCRALOSE CXA 12X65ML</p>
        <p className="m-0">ARROZ BASMATI FDO 12X500G</p>
        <p className="m-0">ARROZ BRANCO TIPO 1 FDO 10X1KG</p>
        <p className="m-0">ARROZ BRANCO TIPO 1 FDO 6X5KG</p>
        <p className="m-0">ARROZ BRANCO TIPO 1 FDO 6X5KG</p>
        <p className="m-0">ARROZ BRANCO TIPO 1 FOOD SERVICE FDO 6X5KG</p>
        <p className="m-0">ARROZ INTEGRAL PARBOLIZADO TIPO 1 FDO 10X1KG</p>
        <p className="m-0">ARROZ ORIENTAL GRAO LONGO FDO 6X5KG</p>
        <p className="m-0">CAFE EXTRA FORTE T/M ALMOFADA FDO 10X500G</p>
        <p className="m-0">CAFE EXTRA FORTE T/M PACOTE FDO 10X500G</p>
        <p className="m-0">CAFE EXTRA FORTE T/M PACOTE FDO 10X500G</p>
        <p className="m-0">CAFE TRADICIONAL T/M ALMOFADA FDO 10X500G</p>
        <p className="m-0">CAFE TRADICIONAL T/M PACOTE FDO 10X500G</p>
        <p className="m-0">CAFE TRADICIONAL T/M PACOTE FDO 10X500G</p>
        <p className="m-0">FEIJAO CARIOCA TIPO 1 FDO 10X1KG</p>
        <p className="m-0">FEIJAO CARIOCA TIPO 1 FDO 30X1KG</p>
        <p className="m-0">FEIJAO CARIOCA TIPO 1 FDO 5X2KG</p>
        <p className="m-0">FEIJAO PRETO TIPO 1 FDO 10X1KG</p>
        <p className="m-0">FEIJAO PRETO TIPO 1 FDO 10X1KG</p>
        <p className="m-0">FEIJAO PRETO TIPO 1 FOOD SERVICE FDO 5X2KG</p>
        <p className="m-0">SACHET AÇUCAR MASCAVO CXA 200X4G</p>
        <p className="m-0">SACHET AÇUCAR REFINADO CXA 1000X5G</p>
        <p className="m-0">SACHET AÇUCAR REFINADO PREMIUM CXA 400X5G</p>
        <p className="m-0">SACHET SAL REFINADO FINO CXA 2000X0,8G</p>
        <p className="m-0">SACHET SAL REFINADO FINO CXA 2000X1G</p>
        <p className="m-0">SAL DE PARRILLA ALHO COM ERVAS BBQ 12 X 1,010 KG</p>
        <p className="m-0">SAL DE PARRILLA COM CHIMICHURRI BBQ 12 X 1,010 KG</p>
        <p className="m-0">SAL DE PARRILLA PARA CHURRASCO 15 X 400 GR</p>
        <p className="m-0">SAL DE PARRILLA SMOKED BBQ 12 X 1,010 KG</p>
        <p className="m-0">SAL GRANULADO GROSSO PARA CHURRASCO FDO 10X1KG</p>
        <p className="m-0">SAL PARRILLA C/PIMENTA D/REINO 12X1,01KG</p>
        <p className="m-0">SAL REFINADO FINO FDO 10X1KG</p>
        <p className="m-0">SAL ROSA DO HIMALAIA 15 X 400 GR</p>
      </Dialog>
    </div>
  );
};

export const ModalMolhos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Molhos e Condimentos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">EXTRATO DE TOMATE LATA 12 X 850GR</p>
        <p className="m-0">EXTRATO DE TOMATE SACHET CXA 12X1,02KG</p>
        <p className="m-0">EXTRATO DE TOMATE SACHET CXA 6 X 2KG</p>
        <p className="m-0">KETCHUP TRADICIONAL BAG CXA 8 X 2KG</p>
        <p className="m-0">KETCHUP TRADICIONAL BIG CXA 3 X 5,5KG</p>
        <p className="m-0">KETCHUP TRADICIONAL BOMBONA CXA 4X3,8KG</p>
        <p className="m-0">KETCHUP TRADICIONAL PET 6X3KG</p>
        <p className="m-0">KETCHUP TRADICIONAL PET CXA 12X1,01KG</p>
        <p className="m-0">MAIONESE TRADICIONAL BAG CXA 6 X 3KG</p>
        <p className="m-0">MAIONESE TRADICIONAL BALDE CXA 6 X 3KG</p>
        <p className="m-0">MAIONESE TRADICIONAL BD 2,8KG</p>
        <p className="m-0">MAIONESE TRADICIONAL BD 6 X 3KG</p>
        <p className="m-0">MAIONESE TRADICIONAL FP CXA 16 X 390GR</p>
        <p className="m-0">MAIONESE TRADICIONAL PET CXA 12X930GR</p>
        <p className="m-0">MOLHO BARBECUE BAG CXA 8 X 2KG</p>
        <p className="m-0">MOLHO BARBECUE BISNAGA CXA 15X330G</p>
        <p className="m-0">MOLHO BARBECUE FP CXA 16 X 397GR</p>
        <p className="m-0">MOLHO BARBECUE PET CXA 12X1,01KG</p>
        <p className="m-0">MOLHO CHIMICHURRI ARGENTINO CXA BD 4 X 1,5KG</p>
        <p className="m-0">MOLHO DE PIMENTA VERMELHA CXA 12X1,01L</p>
        <p className="m-0">MOLHO DE PIMENTA VERMELHA CXA 24X150ML</p>
        <p className="m-0">MOLHO DE TOMATE TRAD MAMMADORO CXA 6X1,7KG</p>
        <p className="m-0">MOLHO DE TOMATE TRAD SACHET 12 X 1,02KG</p>
        <p className="m-0">MOLHO DE TOMATE TRAD SACHET 6 X 2KG</p>
        <p className="m-0">MOLHO DE TOMATE TRADICIONAL SC CXA 6X2KG</p>
        <p className="m-0">
          MOLHO ESPECIAL PARA SANDUICHES BILLY JACK CXA 6X1,01KG
        </p>
        <p className="m-0">MOLHO INGLES CXA 12X1,01L</p>
        <p className="m-0">MOLHO INGLES EXTRA CXA 24X150ML</p>
        <p className="m-0">MOLHO PARA SALADA ROSE PET 12 X 234ML</p>
        <p className="m-0">MOLHO SHOYU CXA 24X150ML</p>
        <p className="m-0">MOSTARDA AMARELA BAG CXA 8 X 2KG</p>
        <p className="m-0">MOSTARDA AMARELA BOMBONA CXA 4X3,6KG</p>
        <p className="m-0">MOSTARDA AMARELA CXA 24X370G</p>
        <p className="m-0">MOSTARDA AMARELA PET CXA 12X1,01KG</p>
        <p className="m-0">MOSTARDA AMARELA PET CXA 6 X 3KG</p>
        <p className="m-0">POLPA TOMATE TP CXA 12X1,050KG</p>
        <p className="m-0">SACHET KETCHUP TRADICIONAL CXA 168X7G</p>
        <p className="m-0">SACHET KETCHUP TRADICIONAL CXA 175X7G</p>
        <p className="m-0">SACHET KETCHUP TRADICIONAL CXA 176 X 7G</p>
        <p className="m-0">SACHET KETCHUP TRADICIONAL CXA 182 X 7GR</p>
        <p className="m-0">SACHET MAIONESE TRADICIONAL CXA 168X7G</p>
        <p className="m-0">SACHET MAIONESE TRADICIONAL CXA 176X7G</p>
        <p className="m-0">SACHET MAIONESE TRADICIONAL CXA 190X7G</p>
        <p className="m-0">SACHET MOLHO BARBECUE CXA 175X7G</p>
        <p className="m-0">SACHET MOLHO DE PIMENTA VERMELHA CXA 174X3ML</p>
        <p className="m-0">SACHET MOLHO DE PIMENTA VERMELHA CXA 175X5G</p>
        <p className="m-0">SACHET MOLHO DE PIMENTA VERMELHA CXA 200X3G</p>
        <p className="m-0">SACHET MOLHO SALADA CAESER CXA 200X10G</p>
        <p className="m-0">SACHET MOLHO SALADA FRENCH CXA 200X10G</p>
        <p className="m-0">SACHET MOLHO SALADA ITALIAN CXA 120 X 18GR</p>
        <p className="m-0">SACHET MOLHO SALADA ITALIANO CXA 200X10G</p>
        <p className="m-0">SACHET MOLHO SHOYU CXA 208 X 10GR</p>
        <p className="m-0">SACHET MOLHO SHOYU CXA 96X8ML</p>
        <p className="m-0">SACHET MOLHO VINAGRETE CXA 200X10G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 168X7G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 175X7G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 176X5G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 182X7G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 190X7G</p>
      </Dialog>
    </div>
  );
};

export const ModalPaes = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Pães, Massas e Farinhas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          CRISPY DE QUEIJO GOUDA CONG CXA 6X1KG MCCAIN 107 CX 6 KG
        </p>
        <p className="m-0">
          FARINHA DE MANDIOCA CRUA FINA TIPO 1 FDO 20X500G MANI 133 FARDO 20 PCT
        </p>
        <p className="m-0">
          FARINHA DE MANDIOCA CRUA GROSSA TIPO 1 FDO 20X500G MANI 165 FARDO 20
          PCT
        </p>
        <p className="m-0">
          FARINHA DE MILHO AMARELA CXA 20X500G DEUSA 41 FARDO 20 PCT
        </p>
        <p className="m-0">FARINHA DE ROSCA FDO 5X5KG ROMARIZ 41 FARDO 5 PCT</p>
        <p className="m-0">
          FARINHA DE TRIGO FDO 10X1KG ANACONDA 40 FARDO 10 UNI
        </p>
        <p className="m-0">FARINHA DE TRIGO FDO 10X1KG 39 FARDO 10 UNI</p>
        <p className="m-0">FARINHA DE TRIGO FDO 5X5KG 1 FARDO 5 UNI</p>
        <p className="m-0">
          FARINHA DE TRIGO PARA PASTEL PCT 5 X 5KG ANACONDA 8 FARDO 5 UNI
        </p>
        <p className="m-0">
          FARINHA DE TRIGO PARA PASTEL PCT 5 X 5KG 4 UNI 5 UNI
        </p>
        <p className="m-0">
          FARINHA DE TRIGO PARA PIZZA PCT 5 X 5KG ANACONDA 5 FARDO 5 UNI
        </p>
        <p className="m-0">
          FARINHA DE TRIGO PCT 5 X 5KG ANACONDA 11 FARDO 5 UNI
        </p>
        <p className="m-0">
          FARINHA FLOCADA P/EMPANAR PANKO FDO 10X1KG ROMARIZ 106 FARDO 10 PCT
        </p>
        <p className="m-0">
          FARINHA PRONTA P/EMPANAR MILANESA FDO 10X1KG ROMARIZ 10 CX 10 UNI
        </p>
        <p className="m-0">
          FAROFA PRONTA DE MANDIOCA FINA TRADICIONAL FDO 20X500G DEUSA 14 FARDO
          20 PCT
        </p>
        <p className="m-0">
          FAROFA TEMP C/BACON FDO 12X400GR (STAND UP) ROCEIRO 2 FARDO 12 UNI
        </p>
        <p className="m-0">
          FAROFA TEMP PICANTE FDO 12X400GR (STAND UP) ROCEIRO 2 FARDO 12 UNI
        </p>
        <p className="m-0">
          FAROFA TEMP TRAD FDO 12 X 400GR (STAND UP) ROCEIRO 2 FARDO 12 UNI
        </p>
        <p className="m-0">
          FAROFA TEMP TRADICIONAL CXA 12 X 400GR ROCEIRO 8 CX 12 UNI
        </p>
        <p className="m-0">
          FAROFA TEMPERADA COM BACON CXA 12X400GR ROCEIRO 8 CX 12 UNI
        </p>
        <p className="m-0">
          FAROFA TEMPERADA PICANTE CXA 12X400G ROCEIRO 4 CX 12 UNI
        </p>
        <p className="m-0">FUBA MIMOSO FDO 30X500G DEUSA 15 FARDO 30 PCT</p>
        <p className="m-0">
          MACARRAO ESPAGUETE COM OVOS N8 FDO 20X500G FLOR DE LIS 33 CX 20 UNI
        </p>
        <p className="m-0">
          MACARRAO PARAFUSO COM OVOS FDO 20X500G FLOR DE LIS 45 CX 20 UNI
        </p>
        <p className="m-0">
          MISTURA PRONTA PARA PREPARO DE KIBE FDO 5X5KG ROMARIZ 9 CX 5 UNI
        </p>
        <p className="m-0">
          PAO DE QUEIJO 15G COQUETEL CONG CXA 10X1KG BRASA 16 CX 10 KG
        </p>
        <p className="m-0">
          PAO DE QUEIJO 25G COQUETEL CONG PCT 15 X 1KG ARRIBA 23 CX 15 KG
        </p>
        <p className="m-0">
          PO PARA PURE DE BATATA COMPLETO CXA 6 X 800G QUALIMAX 51 CX 6 UNI
        </p>
      </Dialog>
    </div>
  );
};

export const ModalPolpas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Polpas e frutas congeladas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          FRUTA MANGA CONG FDO 10 X 1KG SWEET BERRY 13 FARDO 10 KG
        </p>
        <p className="m-0">
          FRUTA MIRTILO CONG FDO 10 X 1KG SWEET BERRY 2 FARDO 10 KG
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE ABACAXI CXA 10X1KG QUALIMAX 18 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE CAJU CXA10X1KG QUALIMAX 17 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE GOIABA CXA 10X1KG QUALIMAX 24 FARDO 10 UNI
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE LARANJA CXA10X1KG QUALIMAX 25 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE LARANJA/ACEROLA CXA 10X1KG QUALIMAX 8 FARDO 10 UNI
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE LIMAO CXA 10X1KG QUALIMAX 17 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE MANGA CXA 10X1KG QUALIMAX 7 CX 10 UNI
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE MARACUJA CXA 10X1KG QUALIMAX 33 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE PESSEGO CXA 10X1KG QUALIMAX 55 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE TANGERINA CXA 10X1KG QUALIMAX 24 FARDO 10 UNI
        </p>
        <p className="m-0">
          PO PARA REFRESCO DE UVA CXA 10X1KG QUALIMAX 31 FARDO 10 PCT
        </p>
        <p className="m-0">
          POLPA DE ABACAXI COM HORTELA CONG 5X1KG FRUTIPOLPA 6 CX 5 KG
        </p>
        <p className="m-0">
          POLPA DE ABACAXI NATURAL CONG 5X1KG FRUTIPOLPA 63 CX 5 KG
        </p>
        <p className="m-0">
          POLPA DE ACEROLA COM LARANJA CONG 5X1KG FRUTIPOLPA 8 CX 5 KG
        </p>
        <p className="m-0">POLPA DE ACEROLA CONG 5X1KG FRUTIPOLPA 3 CX 5 KG</p>
        <p className="m-0">POLPA DE AMORA CONG 5X1KG FRUTIPOLPA 4 CX 5 KG</p>
        <p className="m-0">POLPA DE COCO CONG 5X1KG FRUTIPOLPA 1 CX 5 KG</p>
        <p className="m-0">POLPA DE GOIABA CONG 5X1KG FRUTIPOLPA 15 CX 5 KG</p>
        <p className="m-0">POLPA DE LIMÃO CONG 5X1KG FRUTIPOLPA 4 CX 5 KG</p>
        <p className="m-0">
          POLPA DE MARACUJA COM SEMENTE CONG 5X1KG FRUTIPOLPA 4 CX 5 KG
        </p>
        <p className="m-0">
          POLPA DE MARACUJA CONG 5X1KG FRUTIPOLPA 58 CX 5 KG
        </p>
        <p className="m-0">POLPA DE MORANGO CONG 5X1KG FRUTIPOLPA 67 CX 5 KG</p>
        <p className="m-0">
          POLPA DE TAMARINDO CONG 5X1KG FRUTIPOLPA 1 CX 5 KG
        </p>
        <p className="m-0">POLPA DE UVA CONG 5X1KG FRUTIPOLPA 27 CX 5 KG</p>
        <p className="m-0">
          POLPA DETOX VERMELHO CONG 5X1KG FRUTIPOLPA 4 CX 5 KG
        </p>
      </Dialog>
    </div>
  );
};

export const ModalDoces = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Doces e sobremesas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          BROWNIE DE CHOCOLATE COM NOZES 12 X 240GR 7 CX 12 UNI
        </p>
        <p className="m-0">BROWNIE SEM NOZES CONG CXA 20 X 80GR 29 CX 20 UNI</p>
        <p className="m-0">CHOCOLATE EM PO FDO 12X1KG 3 FARDO 12 UNI</p>
        <p className="m-0">COCO RALADO 10 X 1KG 4 CX 10 KG</p>
        <p className="m-0">CÔCO RALADO MAIS CÔCO 24 X 100GR 7 CX 24 UNI</p>
        <p className="m-0">COCO RALADO SOCOCO 24 X 100 GR 2 CX 24 UNI</p>
        <p className="m-0">
          DOCE CHICLETE MELANCIA AZEDINHA CXA 12X80G 4 CX 12 UNI
        </p>
        <p className="m-0">
          DOCE CHICLETE OVOS DE DINOSSAURO AZEDINHO CXA 12X80G 20 CX 12 UNI
        </p>
        <p className="m-0">DOCE GELATINAS AMORAS CXA 12X90G 26 CX 12 UNI</p>
        <p className="m-0">DOCE GELATINAS BANANAS CXA 12X90G 22 CX 12 UNI</p>
        <p className="m-0">
          DOCE GELATINAS BEIJOS DE MORANGO CXA 12X90G 49 CX 12 UNI
        </p>
        <p className="m-0">DOCE GELATINAS DENTADURAS CXA 12X90G 47 CX 12 UNI</p>
        <p className="m-0">
          DOCE GELATINAS MINHOCAS BRILHO CXA 12X90G 35 CX 12 UNI
        </p>
        <p className="m-0">
          DOCE GELATINAS MINHOCAS CITRICAS CXA 12X90G 23 CX 12 UNI
        </p>
        <p className="m-0">
          DOCE GELATINAS URSINHOS BRILHO CXA 12X90G 27 CX 12 UNI
        </p>
        <p className="m-0">
          DOCE MARSHMALLOW ALVORADA CXA 12X250G 18 CX 12 UNI
        </p>
        <p className="m-0">
          DOCE MARSHMALLOW CAMPING CXA 12 X 250GR 14 CX 12 UNI
        </p>
        <p className="m-0">DOCE MARSHMALLOW TORÇAO CXA 12X250G 68 CX 12 UNI</p>
        <p className="m-0">
          DOCE MARSHMALLOW TORÇAO RECHEADO CXA 12X250G 13 CX 12 UNI
        </p>
        <p className="m-0">DOCE PASTILHAS HORTELA CXA 12X40UND 1 CX 12 UNI</p>
        <p className="m-0">
          DOCE PASTILHAS MENTA CXA 12 X 40 X 14GR 1 CX 12 UNI
        </p>
        <p className="m-0">
          DOCE TUBES DE MORANGO CÍTRICO CXA 12X80G 4 CX 12 UNI
        </p>
        <p className="m-0">DOCE TUBES DE MORANGO CXA 12X12X15G 6 CX 144 UNI</p>
        <p className="m-0">DOCE TUBES DE MORANGO CXA 12X80G 18 CX 12 UNI</p>
        <p className="m-0">
          DOCE TUBES GIGANTE DE MORANGO CITRICO CXA 6X24X27G 8 CX 144 UNI
        </p>
        <p className="m-0">DOCE TUBES TUTTI FRUTTI CXA12X80G 1 CX 12 UNI</p>
        <p className="m-0">FLOCOS DE COCO SWEET 4 X 5 KG 1 CX 20 KG</p>
        <p className="m-0">
          LEITE DE COCO TRADICIONAL TP 24 X 200ML 4 CX 24 GRFA
        </p>
        <p className="m-0">LEITE DE COCO VIDRO 24 X 200ML 6 FARDO 24 UNI</p>
        <p className="m-0">
          MOUSSE CHOCOLATE AO LEITE CONG CXA 12X80G 9 CX 12 UNI
        </p>
        <p className="m-0">
          MOUSSE LAKA COM OREO CONG 12 X 80GR (FS/VA) 18 CX 12 UNI
        </p>
        <p className="m-0">
          PETIT GATEAU CHOCOLATE 18X240GR CXETA 4UN 60G (VA) 22 CX 18 UNI
        </p>
        <p className="m-0">
          PETIT GATEAU CHOCOLATE CONG 24 X 60GR 11 CX 24 UNI
        </p>
        <p className="m-0">
          PETIT GATEAU CHOCOLATE CONG 24X100G(FS) 46 CX 24 UNI
        </p>
        <p className="m-0">
          PETIT GATEAU CHOCOLATE CONG CXA 12 X 160GR 7 CX 12 UNI
        </p>
        <p className="m-0">
          PETIT GATEAU DOCE DE LEITE CONG 24 X 80GR (FS) 9 CX 24 UNI
        </p>
        <p className="m-0">
          PETIT GATEAU DOCE DE LEITE HAVANNA CONG 12 X 160GR 10 CX 12 UNI
        </p>
        <p className="m-0">PO PARA FLAN BAUNILHA CXA 6X1KG 4 CX 6 UNI</p>
        <p className="m-0">
          PO PARA GELATINA ABACAXI CXA 10X1KG 8 FARDO 10 PCT
        </p>
        <p className="m-0">
          PO PARA GELATINA CEREJA CXA 10X1KG 61 FARDO 10 UNI
        </p>
        <p className="m-0">PO PARA GELATINA LIMAO CXA 10X1KG 52 FARDO 10 PCT</p>
        <p className="m-0">PO PARA GELATINA MORANGO CXA 10X1KG 10 CX 10 PCT</p>
        <p className="m-0">PO PARA GELATINA PESSEGO CXA 10X1KG 19 CX 10 UNI</p>
        <p className="m-0">PO PARA GELATINA UVA CXA 10X1KG 16 CX 10 UNI</p>
        <p className="m-0">PUDIM DE LEITE CONG CXA 12 X 160G 14 CX 12 UNI</p>
        <p className="m-0">
          RECHEIO FORNEAVEL CREME DE AVELA CXA 8X1,005KG 18 CX 8 UNI
        </p>
        <p className="m-0">
          SACHET MEL PURO (PARA HOTEIS E POUSADAS) CXA 144X12G 4 CX 1 CX
        </p>
        <p className="m-0">
          TORTA DE LIMÃO CONG CXA 4 X 500GR (FS/VA) 11 CX 4 UNI
        </p>
        <p className="m-0">
          TORTA HOLANDESA CONG 4 X 500GR (FS/VA) 11 CX 4 UNI
        </p>
        <p className="m-0">TORTA HOLANDESA CONG CXA12X140G 7 CX 12 UNI</p>
        <p className="m-0">TORTA HOLANDESA CONG CXA12X70G 5 CX 12 UNI</p>
        <p className="m-0">
          TORTA HOLANDESA DE OREO CONG 12 X 160GR 3 CX 12 UNI
        </p>
      </Dialog>
    </div>
  );
};

export const ModalBebidas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Bebidas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">AGUA DE CÕCO CXA 12 X 1L 21 CX 12 GRFA</p>
        <p className="m-0">AGUA DE COCO TP 12 X 1L 6 CX 12 UNI</p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL COM GAS PET PCT 12X500ML 10 FARDO 12 UNI
        </p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL COM GAS PET PCT 6 X 1,5L 9 FARDO 6 UNI
        </p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL SEM GAS PET PCT 12X500ML 21 FARDO 12 UNI
        </p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL SEM GAS PET PCT 2X5L 6 FARDO 2 UNI
        </p>
        <p className="m-0">
          CERVEJA AMSTEL LAGER GARRAFA 12 X 600ML 4 CX 12 GRFA
        </p>
        <p className="m-0">
          CERVEJA AMSTEL LAGER LATA 12 X 269ML 312 CX 12 LATA
        </p>
        <p className="m-0">
          CERVEJA HEINEKEN PURO MALTE LATA 350 ML X 12UNID 194 FARDO 12 LATA
        </p>
        <p className="m-0">
          CERVEJA HEINEKEN PURO MALTE LATA 8 X 269 ML 1566 FARDO 8 LATA
        </p>
        <p className="m-0">
          CERVEJA PILSEN BADEN BADEN LATA 2 X 6 X 350ML 1 FARDO 12 LATA
        </p>
        <p className="m-0">
          CERVEJA PURO MALTE HEINEKEN LONG NECK 4X6X330ML 70 CX 24 GRFA
        </p>
        <p className="m-0">
          CERVEJA PURO MALTE HEINEKEN SEM ALCOOL 0.0 LATA 12 X 350ML 154 CX 12
          LATA
        </p>
        <p className="m-0">CERVEJA SPATEN LATA CXA 12 X 350ML 83 CX 12 UNI</p>
        <p className="m-0">
          CERVEJA SPATEN PURO MALTE LONG NECK CXA 24 X 355ML 2 CX 24 UNI
        </p>
        <p className="m-0">
          CHOPP PILSEN REFRIGERADO GROWLER CXA 6X1,5L 143 FARDO 6 GRFA
        </p>
        <p className="m-0">
          CHOPP STRAAT BIER IPA REFRIGERADO GROWLER CXA 6X1,5L 74 FARDO 6 GRFA
        </p>
        <p className="m-0">
          CHOPP STRAAT PALE ALE REFRIGERADO GROWLER CXA 6X1,5L 45 FARDO 6 GRFA
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ABSOLUTELY ZERO LATA CXA 6X473ML 1 CX 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER PACIFIC PUNCH LATA CXA 6X473ML 1 CX 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ULTRA PARADISE LATA CXA 6X473ML 3 FARDO 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ULTRA VIOLET LATA CXA 6X473ML 2 CX 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ULTRA ZERO LATA CXA 6X473ML 1 CX 6 UNI
        </p>
        <p className="m-0">ESPUMANTE SALTON BRUT CXA 6X750ML 128 CX 6 UNI</p>
        <p className="m-0">ESPUMANTE SALTON MOSCATEL CXA 6X750ML 91 CX 6 UNI</p>
        <p className="m-0">
          ESPUMANTE SALTON SERIES BRUT CXA 6X750ML 4 CX 6 UNI
        </p>
        <p className="m-0">
          ESPUMANTE SALTON SERIES MOSCATEL CXA 6X750ML 19 CX 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA LATA PCT 12X350ML 32 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA PET PCT 12X600ML 15 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA PET PCT 6X2L 22 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA ZERO LATA PCT 12X350ML 12 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE DOLLY DE GUARANA FDO 6X2L 99 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE DOLLY DE LARANJA FDO 6X2L 123 FARDO 6 UNI
        </p>
        <p className="m-0">REFRIGERANTE DOLLY DE LIMAO FDO 6X2L 47 CX 6 UNI</p>
        <p className="m-0">
          REFRIGERANTE FANTA GUARANA PET PCT 6X2L 3 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA LARANJA LATA PCT 12X350ML 4 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA LARANJA PET PCT 12X600ML 10 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA LARANJA PET PCT 6X2L 9 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA UVA LATA PCT 6X350ML 9 FARDO 6 UNI
        </p>
        <p className="m-0">REFRIGERANTE FANTA UVA PET PCT 6X2L 3 FARDO 6 UNI</p>
        <p className="m-0">
          REFRIGERANTE SPRITE LATA PCT 6X350ML 8 FARDO 6 UNI
        </p>
        <p className="m-0">SKOL BEATS SENSES LATA CXA 8X269ML 1 CX 8 UNI</p>
        <p className="m-0">SUCO DE UVA INTEGRAL CXA 6X1,5L 1 CX 6 UNI</p>
        <p className="m-0">
          VINHO SALTON BRANCO FRIZANTE LUNAE CXA 6X750ML 2 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CHALISE BORDO SUAVE CXA 6X1L 2 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CHALISE ROSE SUAVE CXA 6X750ML 16 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CLASSIC DEMI-SEC ROSE CXA 6X750ML 12 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CLASSIC MERLOT CXA 6X750ML 23 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CLASSIC TANNAT CXA 6X750ML 26 CX 6 UNI
        </p>
        <p className="m-0">VODKA VORUS TRADICIONAL CXA 6X1L 1 CX 6 UNI</p>
      </Dialog>
    </div>
  );
};

export const ModalEspetinhos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Espetinhos e pratos prontos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">AGUA DE CÕCO CXA 12 X 1L 21 CX 12 GRFA</p>
        <p className="m-0">AGUA DE COCO TP 12 X 1L 6 CX 12 UNI</p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL COM GAS PET PCT 12X500ML 10 FARDO 12 UNI
        </p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL COM GAS PET PCT 6 X 1,5L 9 FARDO 6 UNI
        </p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL SEM GAS PET PCT 12X500ML 21 FARDO 12 UNI
        </p>
        <p className="m-0">
          AGUA MINERAL CRYSTAL SEM GAS PET PCT 2X5L 6 FARDO 2 UNI
        </p>
        <p className="m-0">
          CERVEJA AMSTEL LAGER GARRAFA 12 X 600ML 4 CX 12 GRFA
        </p>
        <p className="m-0">
          CERVEJA AMSTEL LAGER LATA 12 X 269ML 312 CX 12 LATA
        </p>
        <p className="m-0">
          CERVEJA HEINEKEN PURO MALTE LATA 350 ML X 12UNID 194 FARDO 12 LATA
        </p>
        <p className="m-0">
          CERVEJA HEINEKEN PURO MALTE LATA 8 X 269 ML 1566 FARDO 8 LATA
        </p>
        <p className="m-0">
          CERVEJA PILSEN BADEN BADEN LATA 2 X 6 X 350ML 1 FARDO 12 LATA
        </p>
        <p className="m-0">
          CERVEJA PURO MALTE HEINEKEN LONG NECK 4X6X330ML 70 CX 24 GRFA
        </p>
        <p className="m-0">
          CERVEJA PURO MALTE HEINEKEN SEM ALCOOL 0.0 LATA 12 X 350ML 154 CX 12
          LATA
        </p>
        <p className="m-0">CERVEJA SPATEN LATA CXA 12 X 350ML 83 CX 12 UNI</p>
        <p className="m-0">
          CERVEJA SPATEN PURO MALTE LONG NECK CXA 24 X 355ML 2 CX 24 UNI
        </p>
        <p className="m-0">
          CHOPP PILSEN REFRIGERADO GROWLER CXA 6X1,5L 143 FARDO 6 GRFA
        </p>
        <p className="m-0">
          CHOPP STRAAT BIER IPA REFRIGERADO GROWLER CXA 6X1,5L 74 FARDO 6 GRFA
        </p>
        <p className="m-0">
          CHOPP STRAAT PALE ALE REFRIGERADO GROWLER CXA 6X1,5L 45 FARDO 6 GRFA
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ABSOLUTELY ZERO LATA CXA 6X473ML 1 CX 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER PACIFIC PUNCH LATA CXA 6X473ML 1 CX 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ULTRA PARADISE LATA CXA 6X473ML 3 FARDO 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ULTRA VIOLET LATA CXA 6X473ML 2 CX 6 UNI
        </p>
        <p className="m-0">
          ENERGETICO MONSTER ULTRA ZERO LATA CXA 6X473ML 1 CX 6 UNI
        </p>
        <p className="m-0">ESPUMANTE SALTON BRUT CXA 6X750ML 128 CX 6 UNI</p>
        <p className="m-0">ESPUMANTE SALTON MOSCATEL CXA 6X750ML 91 CX 6 UNI</p>
        <p className="m-0">
          ESPUMANTE SALTON SERIES BRUT CXA 6X750ML 4 CX 6 UNI
        </p>
        <p className="m-0">
          ESPUMANTE SALTON SERIES MOSCATEL CXA 6X750ML 19 CX 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA LATA PCT 12X350ML 32 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA PET PCT 12X600ML 15 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA PET PCT 6X2L 22 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE COCA COLA ZERO LATA PCT 12X350ML 12 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE DOLLY DE GUARANA FDO 6X2L 99 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE DOLLY DE LARANJA FDO 6X2L 123 FARDO 6 UNI
        </p>
        <p className="m-0">REFRIGERANTE DOLLY DE LIMAO FDO 6X2L 47 CX 6 UNI</p>
        <p className="m-0">
          REFRIGERANTE FANTA GUARANA PET PCT 6X2L 3 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA LARANJA LATA PCT 12X350ML 4 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA LARANJA PET PCT 12X600ML 10 FARDO 12 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA LARANJA PET PCT 6X2L 9 FARDO 6 UNI
        </p>
        <p className="m-0">
          REFRIGERANTE FANTA UVA LATA PCT 6X350ML 9 FARDO 6 UNI
        </p>
        <p className="m-0">REFRIGERANTE FANTA UVA PET PCT 6X2L 3 FARDO 6 UNI</p>
        <p className="m-0">
          REFRIGERANTE SPRITE LATA PCT 6X350ML 8 FARDO 6 UNI
        </p>
        <p className="m-0">SKOL BEATS SENSES LATA CXA 8X269ML 1 CX 8 UNI</p>
        <p className="m-0">SUCO DE UVA INTEGRAL CXA 6X1,5L 1 CX 6 UNI</p>
        <p className="m-0">
          VINHO SALTON BRANCO FRIZANTE LUNAE CXA 6X750ML 2 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CHALISE BORDO SUAVE CXA 6X1L 2 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CHALISE ROSE SUAVE CXA 6X750ML 16 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CLASSIC DEMI-SEC ROSE CXA 6X750ML 12 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CLASSIC MERLOT CXA 6X750ML 23 CX 6 UNI
        </p>
        <p className="m-0">
          VINHO SALTON CLASSIC TANNAT CXA 6X750ML 26 CX 6 UNI
        </p>
        <p className="m-0">VODKA VORUS TRADICIONAL CXA 6X1L 1 CX 6 UNI</p>
      </Dialog>
    </div>
  );
};
