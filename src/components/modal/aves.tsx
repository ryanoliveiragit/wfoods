import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalFrangos = () => {
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
        <p className="m-0">AVE NATALINA (BRISCKER) CONG</p>
        <p className="m-0">CARCAÇA DE FRANGO N11 CONG</p>
        <p className="m-0">CARCAÇA DE FRANGO N2 CONG</p>
        <p className="m-0">CARCACA DE FRANGO N5 CONG</p>
        <p className="m-0">CARCAÇA DE FRANGO N7 CONG</p>
        <p className="m-0">CARCAÇA DE FRANGO N9 CONG</p>
        <p className="m-0">
          CORAÇAO DE FRANGO COM MOLHO SHOYU NA  PCT 800GR
        </p>
        <p className="m-0">CORAÇAO DE FRANGO CONG 24 X 700GR PCT</p>
        <p className="m-0">CORAÇAO DE FRANGO CONG PCT</p>
        <p className="m-0">COXA COM SOBRECOXA DE FRANGO CONG INDIV</p>
        <p className="m-0">COXA COM SOBRECOXA DE FRANGO CONG PCT</p>
        <p className="m-0">COXA COM SOBRECOXA DE FRANGO CONG PCT ALMOF</p>
        <p className="m-0">COXA SOLTEIRA DE FRANGO CONG PCT</p>
        <p className="m-0">COXINHA DA ASA DE FRANGO CONG PCT</p>
        <p className="m-0">COXINHA DA ASA DE FRANGO TEMP MARINADA CONG PCT</p>
        <p className="m-0">DORSO DE FRANGO CONG PCT</p>
        <p className="m-0">FIGADO DE FRANGO CONG PCT</p>
        <p className="m-0">FILE DE COXA COM PELE CONG</p>
        <p className="m-0">FILE DE COXA DE FRANGO COM PELE CONG PCT</p>
        <p className="m-0">FILE DE COXA DE FRANGO SEM PELE CONG PCT</p>
        <p className="m-0">FILE DE PEITO D/FGO S/SASSAMI(MEIO PEITO)CG</p>
        <p className="m-0">FILE DE PEITO DE FRANGO C/ SASSAMI CONG PCT</p>
        <p className="m-0">FILE DE PEITO DE FRANGO CONG PCT</p>
        <p className="m-0">
          FILE DE PEITO DE FRANGO SEM SASSAMI (MEIO PEITO) CONG. ENVEL
        </p>
        <p className="m-0">FILE DE PEITO DE FRANGO SEM SASSAMI CONG ENV</p>
        <p className="m-0">FRANGO A PASSARINHO SEM TEMPERO CONG</p>
        <p className="m-0">FRANGO A PASSARINHO TEMPERADO MARINADO CONG</p>
        <p className="m-0">FRANGO INTEIRO COM MIUDOS CONG</p>
        <p className="m-0">GALINHA PESADA COM MIUDOS CONG</p>
        <p className="m-0">GALO INTEIRO CONG</p>
        <p className="m-0">ISCA DE PEITO DE FRANGO (RECORTE) A TEMP CONG</p>
        <p className="m-0">MOELA DE FRANGO CONG PCT</p>
        <p className="m-0">PE DE FRANGO CONG</p>
        <p className="m-0">PE DE FRANGO CONG PCT</p>
        <p className="m-0">PEITO COM OSSO DE FRANGO CONG PCT</p>
        <p className="m-0">PEITO DE FRANGO COM OSSO CONG</p>
        <p className="m-0">PEITO DE FRANGO COM OSSO CONG PCT</p>
        <p className="m-0">PEITO DE FRANGO COM OSSO RESF PCT</p>
        <p className="m-0">PEITO DE FRANGO COM OSSO TEMPERADO CONG PCT</p>
        <p className="m-0">SASSAMI DE FRANGO CONG PCT</p>
        <p className="m-0">SOBRECOXA DE FRANGO CONG ENVEL</p>
        <p className="m-0">SOBRECOXA DE FRANGO CONG INDIV PCT</p>
        <p className="m-0">SOBRECOXA DE FRANGO CONG PCT</p>
      </Dialog>
    </div>
  );
};
