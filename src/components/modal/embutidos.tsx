import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
        <p className="m-0">BACON MANTA DEFUMADO RESF</p>
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
        <p className="m-0">LINGUIÇA TOSCANA NA BRASA CONG PCT 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG 5 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG CXA 2 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG PCT 4 X 5KG</p>
        <p className="m-0">LINGUIÇA TOSCANA NANICA CONG PCT 5KG</p>
        <p className="m-0">LOMBO SUINO EMPANADO CONG 12 X 700GR</p>
        <p className="m-0">
          MINI CHICKEN DE FRANGO EMPANADO COM QUEIJO CONG 15 X 275 GR{" "}
        </p>
        <p className="m-0">MORTADELA DEFUMADA RESF</p>
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
        <p className="m-0">TIRAS DE FRANGO EMPANADO CONG </p>
      </Dialog>
    </div>
  );
};
