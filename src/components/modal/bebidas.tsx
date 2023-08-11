import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
       <p className="m-0">AGUA DE CÕCO SOCOCO CXA 12 X 1L</p>
<p className="m-0">AGUA DE COCO TP 12 X 1L</p>
<p className="m-0">AGUA MINERAL CRYSTAL COM GAS PET PCT 12X500ML</p>
<p className="m-0">AGUA MINERAL CRYSTAL COM GAS PET PCT 6 X 1,5L</p>
<p className="m-0">AGUA MINERAL CRYSTAL SEM GAS PET PCT 12X500ML</p>
<p className="m-0">AGUA MINERAL CRYSTAL SEM GAS PET PCT 2X5L</p>
<p className="m-0">CERVEJA AMSTEL LAGER GARRAFA 12 X 600ML</p>
<p className="m-0">CERVEJA AMSTEL LAGER LATA 12 X 269ML</p>
<p className="m-0">CERVEJA HEINEKEN PURO MALTE LATA 350 ML X 12UNID</p>
<p className="m-0">CERVEJA HEINEKEN PURO MALTE LATA 8 X 269 ML</p>
<p className="m-0">CERVEJA PILSEN BADEN BADEN LATA 2 X 6 X 350ML</p>
<p className="m-0">CERVEJA PURO MALTE HEINEKEN LONG NECK 4X6X330ML</p>
<p className="m-0">CERVEJA PURO MALTE HEINEKEN SEM ALCOOL 0.0 LATA 12 X 350ML</p>
<p className="m-0">CERVEJA SPATEN LATA CXA 12 X 350ML</p>
<p className="m-0">CERVEJA SPATEN PURO MALTE LONG NECK CXA 24 X 355ML</p>
<p className="m-0">CHOPP PILSEN REFRIGERADO GROWLER CXA 6X1,5L</p>
<p className="m-0">CHOPP STRAAT BIER IPA REFRIGERADO GROWLER CXA 6X1,5L</p>
<p className="m-0">CHOPP STRAAT PALE ALE REFRIGERADO GROWLER CXA 6X1,5L</p>
<p className="m-0">ENERGETICO MONSTER ABSOLUTELY ZERO LATA CXA 6X473ML</p>
<p className="m-0">ENERGETICO MONSTER PACIFIC PUNCH LATA CXA 6X473ML</p>
<p className="m-0">ENERGETICO MONSTER ULTRA PARADISE LATA CXA 6X473ML</p>
<p className="m-0">ENERGETICO MONSTER ULTRA VIOLET LATA CXA 6X473ML</p>
<p className="m-0">ENERGETICO MONSTER ULTRA ZERO LATA CXA 6X473ML</p>
<p className="m-0">ESPUMANTE SALTON BRUT CXA 6X750ML</p>
<p className="m-0">ESPUMANTE SALTON MOSCATEL CXA 6X750ML</p>
<p className="m-0">ESPUMANTE SALTON SERIES BRUT CXA 6X750ML</p>
<p className="m-0">ESPUMANTE SALTON SERIES MOSCATEL CXA 6X750ML</p>
<p className="m-0">REFRIGERANTE COCA COLA LATA PCT 12X350ML</p>
<p className="m-0">REFRIGERANTE COCA COLA PET PCT 12X600ML</p>
<p className="m-0">REFRIGERANTE COCA COLA PET PCT 6X2L</p>
<p className="m-0">REFRIGERANTE COCA COLA ZERO LATA PCT 12X350ML</p>
<p className="m-0">REFRIGERANTE DOLLY DE GUARANA FDO 6X2L</p>
<p className="m-0">REFRIGERANTE DOLLY DE LARANJA FDO 6X2L</p>
<p className="m-0">REFRIGERANTE DOLLY DE LIMAO FDO 6X2L</p>
<p className="m-0">REFRIGERANTE FANTA GUARANA PET PCT 6X2L</p>
<p className="m-0">REFRIGERANTE FANTA LARANJA LATA PCT 12X350ML</p>
<p className="m-0">REFRIGERANTE FANTA LARANJA PET PCT 12X600ML</p>
<p className="m-0">REFRIGERANTE FANTA LARANJA PET PCT 6X2L</p>
<p className="m-0">REFRIGERANTE FANTA UVA LATA PCT 6X350ML</p>
<p className="m-0">REFRIGERANTE FANTA UVA PET PCT 6X2L</p>
<p className="m-0">REFRIGERANTE SPRITE LATA PCT 6X350ML</p>
<p className="m-0">SKOL BEATS SENSES LATA CXA 8X269ML</p>
<p className="m-0">SUCO DE UVA INTEGRAL SALTON CXA 6X1,5L</p>
<p className="m-0">VINHO SALTON BRANCO FRIZANTE LUNAE CXA 6X750ML</p>
<p className="m-0">VINHO SALTON CHALISE BORDO SUAVE CXA 6X1L</p>
<p className="m-0">VINHO SALTON CHALISE ROSE SUAVE CXA 6X750ML</p>
<p className="m-0">VINHO SALTON CLASSIC DEMI-SEC ROSE CXA 6X750ML</p>
<p className="m-0">VINHO SALTON CLASSIC MERLOT CXA 6X750ML</p>
<p className="m-0">VINHO SALTON CLASSIC TANNAT CXA 6X750ML</p>
<p className="m-0">VODKA VORUS TRADICIONAL CXA 6X1L</p>

      </Dialog>
    </div>
  );
};
