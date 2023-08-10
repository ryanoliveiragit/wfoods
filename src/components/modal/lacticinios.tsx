import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalLacticinios = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Lacticínios"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">CHEDDAR CLUBE DO MOLHO BISNAGA CXA 4X1,5KG</p>
        <p className="m-0">CREAM CHEESE BISNAGA CXA 8X1,2KG</p>
        <p className="m-0">CREAM CHEESE FORNEAVEL BISNAGA CXA 12X1,2KG</p>
        <p className="m-0">CREME DE LEITE CXA 12X1,03KG</p>
        <p className="m-0">ESPETINHO DE QUEIJO COALHO +-350G RESF </p>
        <p className="m-0">LEITE CONDENSADO BAG CXA 4X2,5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMI DESNATADO BAG CXA 4X5KG</p>
        <p className="m-0">LEITE CONDENSADO SEMIDESNATADO CXA 27X395G</p>
        <p className="m-0">LEITE EM PO INTEGRAL INSTANTANEO FDO 10X1KG</p>
        <p className="m-0">LEITE LONGA VIDA INTEGRAL UHT CXA 12X1L</p>
        <p className="m-0">LEITE LONGA VIDA INTEGRAL UHT CXA 12X1L</p>
        <p className="m-0">LEITE SEMI DESNATADO CXA 12X1L</p>
        <p className="m-0">QUEIJO COALHO BARRA +-2KG RESF </p>
        <p className="m-0">QUEIJO COALHO BARRA +-2KG RESF SANTA CLARA</p>
        <p className="m-0">
          QUEIJO COALHO BARRA +-3KG RESF TRÊS MARIAS (RONDONIA)
        </p>
        <p className="m-0">QUEIJO GORGONZOLA +-3KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">
          QUEIJO MUSSARELA +-4KG RESF TRÊS MARIAS (RONDONIA)
        </p>
        <p className="m-0">QUEIJO MUSSARELA +-4KG RESF </p>
        <p className="m-0">
          QUEIJO MUSSARELA NOZAO PARA CHURRASCO RESF FDO 10 X 2KG
        </p>
        <p className="m-0">QUEIJO MUSSARELA NOZINHO RESF FDO 10 X 2KG</p>
        <p className="m-0">QUEIJO PARMESAO +-6KG RESF </p>
        <p className="m-0">
          QUEIJO PARMESAO MONTANHES PEÇA FARDO 3 X +-6KG RESF
        </p>
        <p className="m-0">QUEIJO PARMESAO RALADO MEDIO PCT 20 X 1KG</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF </p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF TRÊS MARIAS (RONDONIA)</p>
        <p className="m-0">QUEIJO PRATO +-3KG RESF </p>
        <p className="m-0">QUEIJO PROVOLONE DEFUMADO PEÇA 3 X +- 5 KG</p>
        <p className="m-0">QUEIJO PROVOLONE FRESCO DEFUMADO +-5KG RESF SABOR</p>
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
          REQUEIJAO CREMOSO ORIG CULINÁRIO  TRAD BNG 12X1,5 KG
        </p>
        <p className="m-0">
          REQUEIJAO CREMOSO TIPO CHEDDAR BISNAGA CXA 6X1,01KG
        </p>
        <p className="m-0">
          REQUEIJAO CREMOSO TRAD BISNAGA RESF 8X1,8KG TRÊS MARIAS (RONDONIA)
        </p>
        <p className="m-0">
          REQUEIJAO CREMOSO TRADICIONAL BISNAGA CXA 12X1,5KG
        </p>
        <p className="m-0">
          REQUEIJAO TRADICIONAL BISNAGA CXA 8X1,8KG 
        </p>
      </Dialog>
    </div>
  );
};
