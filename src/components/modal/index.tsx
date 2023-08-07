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
        <p className="m-0">ESPETINHO DE QUEIJO COALHO</p>
        <p className="m-0">LEITE CONDENSADO BAG CXA 4X2,5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMI DESNATADO BAG CXA 4X5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMIDESNATADO</p>
        <p className="m-0">LEITE EM PO INTEGRAL INSTANTANEO FDO</p>
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
        <p className="m-0">
          AVE NATALINA (BRISCKER) CONG REZENDE 4 CX 20 KG R$ 17,99 KG
        </p>
        <p className="m-0">
          CARCAÇA DE FRANGO N11 CONG DA VILLA 54 CX 19 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          CARCAÇA DE FRANGO N2 CONG AGOSTO 21 CX 16 KG R$ 9,49 KG
        </p>
        <p className="m-0">
          CARCAÇA DE FRANGO N2 CONG DA VILLA 78 CX 15 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          CARCACA DE FRANGO N5 CONG AGOSTO 1 CX 16 KG R$ 9,49 KG
        </p>
        <p className="m-0">
          CARCAÇA DE FRANGO N5 CONG DA VILLA 116 CX 16 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          CARCAÇA DE FRANGO N7 CONG DA VILLA 52 CX 17 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          CARCAÇA DE FRANGO N9 CONG DA VILLA 88 CX 17 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          CORAÇAO DE FRANGO COM MOLHO SHOYU NA BRASA PCT 800GR PERDIGÃO 2 CX 7
          KG R$ 38,19 KG
        </p>
        <p className="m-0">
          CORAÇAO DE FRANGO CONG 24 X 700GR PCT LAR 6 CX 17 KG R$ 22,99 KG
        </p>
        <p className="m-0">
          CORAÇAO DE FRANGO CONG PCT ALLIZ 4 CX 20 KG R$ 22,49 KG
        </p>
        <p className="m-0">
          COXA COM SOBRECOXA DE FRANGO CONG INDIV MISTER FRANGO 136 CX 18 KG R$
          7,69 KG
        </p>
        <p className="m-0">
          COXA COM SOBRECOXA DE FRANGO CONG PCT DA VILLA 1008 CX 20 KG R$ 6,29
          KG
        </p>
        <p className="m-0">
          COXA COM SOBRECOXA DE FRANGO CONG PCT LEVO 9 CX 18 KG R$ 6,49 KG
        </p>
        <p className="m-0">
          COXA COM SOBRECOXA DE FRANGO CONG PCT ALMOF LAR 1348 CX 20 KG R$ 6,59
          KG
        </p>
        <p className="m-0">
          COXA SOLTEIRA DE FRANGO CONG PCT ADORO 258 CX 20 KG R$ 6,29 KG
        </p>
        <p className="m-0">
          COXA SOLTEIRA DE FRANGO CONG PCT DA VILLA 1 CX 20 KG R$ 7,19 KG
        </p>
        <p className="m-0">
          COXA SOLTEIRA DE FRANGO CONG PCT NUTRIBEM 42 CX 20 KG R$ 7,49 KG
        </p>
        <p className="m-0">
          COXINHA DA ASA DE FRANGO CONG PCT BELLO ALIMENTOS 158 CX 20 KG R$ 9,49
          KG
        </p>
        <p className="m-0">
          COXINHA DA ASA DE FRANGO CONG PCT ITABOM 182 CX 20 KG R$ 9,49 KG
        </p>
        <p className="m-0">
          COXINHA DA ASA DE FRANGO CONG PCT LAR 2 CX 20 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          COXINHA DA ASA DE FRANGO TEMP MARINADA CONG PCT ADORO 25 CX 20 KG R$
          9,90 KG
        </p>
        <p className="m-0">
          DORSO DE FRANGO CONG PCT BELLO ALIMENTOS 50 CX 12 KG R$ 3,90 KG
        </p>
        <p className="m-0">
          FIGADO DE FRANGO CONG PCT MISTER FRANGO 23 CX 18 KG R$ 3,90 KG
        </p>
        <p className="m-0">
          FILE DE COXA COM PELE CONG ITABOM 27 CX 20 KG R$ 10,99 KG
        </p>
        <p className="m-0">
          FILE DE COXA DE FRANGO COM PELE CONG PCT ADORO 90 CX 20 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          FILE DE COXA DE FRANGO COM PELE CONG PCT LEVO 153 CX 18 KG R$ 9,90 KG
        </p>
        <p className="m-0">
          FILE DE COXA DE FRANGO SEM PELE CONG PCT LEVO 2 CX 18 KG R$ 15,90 KG
        </p>
        <p className="m-0">
          FILE DE PEITO D/FGO S/SASSAMI(MEIO PEITO)CG MAIS FRANGO 650 CX 18 KG
          R$ 12,29 KG
        </p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO C/ SASSAMI CONG PCT ADORO 43 CX 20 KG R$ 12,89
          KG
        </p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO CONG PCT DA VILLA 818 CX 20 KG R$ 10,69 KG
        </p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO SEM SASSAMI (MEIO PEITO) CONG. ENVEL LAR 1 CX
          20 KG R$ 12,49 KG
        </p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO SEM SASSAMI CONG ENV LEVO 1296 CX 18 KG R$
          12,49 KG
        </p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO SEM SASSAMI CONG PCT MISTER FRANGO 173 CX 18
          KG R$ 12,09 KG
        </p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO SEM SASSAMI(MEIO PEITO)CONG PCT ENVE BELLO
          ALIMENTOS 52 CX 20 KG R$ 12,69 KG
        </p>
        <p className="m-0">
          FRANGO A PASSARINHO SEM TEMPERO CONG ITABOM 48 CX 20 KG R$ 7,90 KG
        </p>
        <p className="m-0">
          FRANGO A PASSARINHO TEMPERADO MARINADO CONG ADORO 44 CX 20 KG R$ 7,49
          KG
        </p>
        <p className="m-0">
          FRANGO INTEIRO COM MIUDOS CONG DA VILLA 290 CX 20 KG R$ 6,49 KG
        </p>
        <p className="m-0">
          GALINHA PESADA COM MIUDOS CONG COVAL 113 CX 20 KG R$ 5,49 KG
        </p>
        <p className="m-0">GALO INTEIRO CONG TONHO 23 CX 20 KG R$ 4,50 KG</p>
        <p className="m-0">
          ISCA DE PEITO DE FRANGO (RECORTE) A TEMP CONG ADORO 200 CX 20 KG R$
          9,49 KG
        </p>
        <p className="m-0">
          MOELA DE FRANGO CONG PCT LEVO 7 CX 18 KG R$ 6,49 KG
        </p>
        <p className="m-0">PE DE FRANGO CONG LEVO 20 CX 15 KG R$ 4,90 KG</p>
        <p className="m-0">
          PE DE FRANGO CONG PCT DA VILLA 30 CX 18 KG R$ 4,90 KG
        </p>
        <p className="m-0">
          PEITO COM OSSO DE FRANGO CONG PCT LAR 20 CX 18 KG R$ 9,29 KG
        </p>
        <p className="m-0">
          PEITO DE FRANGO COM OSSO CONG MISTER FRANGO 60 CX 18 KG R$ 8,49 KG
        </p>
        <p className="m-0">
          PEITO DE FRANGO COM OSSO CONG PCT DA VILLA 152 CX 20 KG R$ 7,79 KG
        </p>
        <p className="m-0">
          PEITO DE FRANGO COM OSSO CONG PCT DA VILLA 1 CX 20 KG R$ 9,49 KG
        </p>
        <p className="m-0">
          PEITO DE FRANGO COM OSSO TEMPERADO CONG PCT FRANGÃO 14 CX 20 KG R$
          8,90 KG
        </p>
        <p className="m-0">
          SASSAMI DE FRANGO CONG PCT BELLO ALIMENTOS 36 CX 18 KG R$ 12,69 KG
        </p>
        <p className="m-0">
          SOBRECOXA DE FRANGO CONG ENVEL LAR 136 CX 20 KG R$ 7,99 KG
        </p>
        <p className="m-0">
          SOBRECOXA DE FRANGO CONG INDIV PCT FRANGO RICO 14 CX 20 KG R$ 9,29 KG
        </p>
        <p className="m-0">
          SOBRECOXA DE FRANGO CONG INDIV PCT BELLO ALIMENTOS 262 CX 18 KG R$
          7,99 KG
        </p>
      </Dialog>
      ;
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
        <p className="m-0">BACON EM CUBOS DEFUMADO PCT 1KG FRIELLA</p>
        <p className="m-0">BACON EXTRA DE PALETA DEFUMADO DALIA</p>
        <p className="m-0">BACON FATIADO BARRIGA RESF PCT 1KG LACTOFRIOS</p>
        <p className="m-0">
          BACON FATIADO DA PALETA DEFUMADO RESF PCT 1KG SABOR MINEIRO
        </p>
        <p className="m-0">BACON MANTA DEFUMADO RESF ADEEL</p>
        <p className="m-0">BACON MANTA DEFUMADO RESF REZENDE</p>
        <p className="m-0">BACON MANTA ESPECIAL EXTRA DEF RESF AURORA</p>
        <p className="m-0">
          BIFE DE LINGUIÇA AO VINHO BRANCO CONG CXA 10 X +-600GR TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA APIMENTADO CONG CXA 10X+-600G TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA C/SOJA INTERF CONG CXA 52X100GR TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA COM AZEITONA CONG CXA 10X+-600G TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA COM BACON CONG CXA 10X+-600G TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA COM ERVAS DE PROVENCE CONG 10 X +-600GR TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA COM PIMENTA BIQUINHO CONG CXA 10 +-600GR TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA TOMATE SECO C/MANJERICÃO CONG CXA 10X+-600G TOP X
        </p>
        <p className="m-0">
          BIFE DE LINGUIÇA TRADICIONAL CONG CXA 10X+-600G TOP X
        </p>
        <p className="m-0">CHICKEN EMPANADO COM QUEIJO CONG CXA 10X1KG BAITA</p>
        <p className="m-0">
          CHICKEN EMPANADO DE FRANGO SUPREME CONG CXA 2X2,5 KG SEARA
        </p>
        <p className="m-0">FILEZINHO DE FRANGO EMPANADO CONG BAITA</p>
        <p className="m-0">
          ISCA DE SUINO FORMATO PORKITOS EMPANADO CONG PCT 14X 700GR BAITA
        </p>
        <p className="m-0">
          LINGUIÇA CALABRESA CURVA DEFUMADA RESF CXA 8 X 2 KG BRASA
        </p>
        <p className="m-0">LINGUIÇA CALABRESA DEFUMADA PCT 5 X 5KG AURORA</p>
        <p className="m-0">LINGUIÇA CALABRESA DEFUMADA RETA 5 X 3KG AURORA</p>
        <p className="m-0">
          LINGUIÇA CALABRESA MISTA COZIDA PCT 3 X 5KG RESF FRIGONOSSA
        </p>
        <p className="m-0">
          LINGUIÇA CUIABANA BOV/QJO CONG PCT 9 X 600GR FRIGO ESPANHA
        </p>
        <p className="m-0">
          LINGUIÇA CUIABANA SUINA/QJO CONG PCT 9 X 600GR FRIGO ESPANHA
        </p>
        <p className="m-0">LINGUIÇA DE FRANGO FINA CONG ITABOM</p>
        <p className="m-0">LINGUIÇA DE FRANGO GROSSA CONG ITABOM</p>
        <p className="m-0">
          LINGUIÇA DE PERNIL COM PIMENTA BIQUINHO CONG.CXA 9X600G FRIGO ESPANHA
        </p>
        <p className="m-0">
          LINGUIÇA TOSCANA APIMENTADA FINA RESF 2 X 5KG ALIANÇA
        </p>
        <p className="m-0">
          LINGUIÇA TOSCANA APIMENTADA NA BRASA CONG PCT 1 KG PERDIGÃO
        </p>
        <p className="m-0">LINGUIÇA TOSCANA APIMENTADA PCT 1KG FRIELLA</p>
        <p className="m-0">LINGUIÇA TOSCANA APIMENTADA PCT 5KG CONG FRIELLA</p>
        <p className="m-0">
          LINGUIÇA TOSCANA CHURRASCO CONG CXA 15 X 1 KG IRMAOS DO VALLE
        </p>
        <p className="m-0">LINGUIÇA TOSCANA CONG 20 X 800GR AURORA</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG CXA 2 X 5KG NOBRE</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG CXA 4X4 KG PAMPLONA</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG PCT 4 X 5KG SEARA</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG PCT 5 X 5KG AURORA</p>
        <p className="m-0">LINGUIÇA TOSCANA CONG PCT 5KG PÉROLA</p>
        <p className="m-0">LINGUIÇA TOSCANA NA BRASA CONG PCT 5KG PERDIGÃO</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG 5 X 5KG AURORA</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG CXA 2 X 5KG FRIELLA</p>
        <p className="m-0">
          LINGUIÇA TOSCANA NANICA CONG PCT 4 X 5KG FRIGO ESPANHA
        </p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG PCT 5KG FRICASA</p>
        <p className="m-0">LOMBO SUINO EMPANADO CONG 12 X 700GR BAITA</p>
        <p className="m-0">
          MINI CHICKEN DE FRANGO EMPANADO COM QUEIJO CONG 15 X 275 GR PERDIGÃO
        </p>
        <p className="m-0">MORTADELA DEFUMADA RESF MARBA ROYAL</p>
        <p className="m-0">MORTADELA TRADICIONAL RESF REZENDE</p>
        <p className="m-0">MORTADELA TRADICIONAL RESF MARBA</p>
        <p className="m-0">
          PEPPERONI FATIADO RESF CXA 12 X 800GR SEARA GOURMET
        </p>
        <p className="m-0">PRESUNTO COZIDO OVAL S/CAPA GORD +-3,5KG SEARA</p>
        <p className="m-0">PRESUNTO COZIDO RETANGULAR FRIELLA</p>
        <p className="m-0">
          PRESUNTO COZIDO SEM CAPA DE GORDURA +- 3,5KG RESF AURORA
        </p>
        <p className="m-0">
          PRESUNTO DO LOMBO LEVISSIMO SEARA RESF PEÇA +- 3,5KG SEARA
        </p>
        <p className="m-0">
          ROCAMBOLE DE LINGUIÇA C/ QUEIJO PROVOLONE CONG 16 X 650GR ROSSINI
        </p>
        <p className="m-0">SALAME TIPO ITALIANO SEARA GOURMET</p>
        <p className="m-0">SALSICHA HOT DOG CONG 6 X 3KG GUIBON</p>
        <p className="m-0">SALSICHA HOT DOG CONG PCT 6 X 3KG AURORA</p>
        <p className="m-0">
          STEAK DE FRANGO EMPANADO CONG PCT 10 X 960GR BAITA
        </p>
        <p className="m-0">TIRAS DE FRANGO EMPANADO CONG</p>
      </Dialog>
    </div>
  );
};
