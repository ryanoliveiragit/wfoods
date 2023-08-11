import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalMolhosECondimentos = () => {
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
        <p className="m-0">MAIONESE TRADICIONAL BD 2,8KG </p>
        <p className="m-0">
        MAIONESE TRADICIONAL BD 6 X 3KG
        </p>
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
        <p className="m-0">
        MOLHO DE TOMATE TRADICIONAL SC CXA 6X2KG
        </p>
        <p className="m-0">MOLHO ESPECIAL PARA SANDUICHES BILLY JACK CXA</p>
        <p className="m-0">6X1,01KG</p>
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
        <p className="m-0">SACHET MOLHO SALADA CAESER CXA 200X10G</p>
        <p className="m-0">SACHET MOLHO SALADA FRENCH CXA 200X10G</p>
        <p className="m-0">SACHET MOLHO SALADA ITALIAN CXA 120 X 18GR</p>
        <p className="m-0">SACHET MOLHO SALADA ITALIANO CXA 200X10G</p>
        <p className="m-0">SACHET MOLHO SHOYU CXA 208 X 10GR</p>
        <p className="m-0">SACHET MOLHO SHOYU CXA 96X8ML</p>
        <p className="m-0">SACHET MOLHO VINAGRETE CXA 200X10G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 168X7G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 176X5G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 182X7G</p>
        <p className="m-0">SACHET MOSTARDA AMARELA CXA 190X7G</p>
      </Dialog>
    </div>
  );
};
