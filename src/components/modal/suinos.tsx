import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
        header="Suínos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ALMONDEGA SUINA CONG 10X400GR</p>
        <p className="m-0">BARRIGA SUINA COM PELE CONG</p>
        <p className="m-0">BARRIGA SUINA CONG</p>
        <p className="m-0">CARRE SUINO COM OSSO CONG</p>
        <p className="m-0">CARRE SUINO COM OSSO CONG</p>
        <p className="m-0">COPA LOMBO (SOBREPALETA) COM OSSO SUINO CONG</p>
        <p className="m-0">COPA LOMBO (SOBREPALETA) SEM OSSO SUINO CONG</p>
        <p className="m-0">COPA LOMBO (SOBREPALETA) SEM OSSO SUINO TEMP CONG</p>
        <p className="m-0">COPA LOMBO (SOBREPALETA) SEM OSSO/PELE SUINO CONG</p>
        <p className="m-0">COPA LOMBO(SOBREPALETA)C/OSSO SUINO CONG </p>
        <p className="m-0">COSTELA SUINA DEFUMADA COM OSSO RESF</p>
        <p className="m-0">COSTELA SUINA EM TIRAS CHURRASCO COM OSSO CONG</p>
        <p className="m-0">COSTELA SUINA EM TIRAS GRILL COM OSSO CONG</p>
        <p className="m-0">FILEZINHO SUINO CONG</p>
        <p className="m-0">HAMBURGUER DE COSTELA SUINA GOURMET CONG 30X150GR</p>
        <p className="m-0">JOELHO SUINO TRASEIRO TEMPERADO CONG</p>
        <p className="m-0">LOMBO SUINO CORTADO AO MEIO CONG</p>
        <p className="m-0">LOMBO SUINO INGLES TEMPERADO GOURMET CONG</p>
        <p className="m-0">LOMBO SUINO SEM OSSO CONG</p>
        <p className="m-0">LOMBO SUÍNO SEM OSSO TEMP CONG</p>
        <p className="m-0">PALETA SUINA EM CUBOS CONG</p>
        <p className="m-0">PALETA SUINA SEM OSSO CONG</p>
        <p className="m-0">FILE DE PALETA SUINA SEM OSSO TEMP CONG</p>
        <p className="m-0">PANCETA SUINA COM PELE TEMPERADA CONG</p>
        <p className="m-0">PANCETA SUINA TEMPERADA CONG</p>
        <p className="m-0">PERNIL SUINO COM OSSO COM PELE CONG</p>
        <p className="m-0">PERNIL SUINO EM CUBOS CONG 2 X 5KG</p>
        <p className="m-0">PERNIL SUINO SEM OSSO SEM PELE +-11KG CONG</p>
        <p className="m-0">PERNIL SUINO SEM OSSO SEM PELE CONG</p>
        <p className="m-0">PICANHA SUINA IN NATURA CONG</p>
        <p className="m-0">TOUCINHO DE LOMBO COM PELE CONG</p>
        <p className="m-0">TOUCINHO SUINO COM PELE CONG</p>
        <p className="m-0">TOUCINHO SUINO COM PELE EM TIRAS CONG</p>
      </Dialog>
    </div>
  );
};
