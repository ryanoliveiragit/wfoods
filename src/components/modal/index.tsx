import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
