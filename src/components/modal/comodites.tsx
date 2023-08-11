import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
        header="Comodites"
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
        <p className="m-0">DUETO (ERV/MILHO) CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">
        ARROZ INTEGRAL PARBOLIZADO TIPO 1 FDO 10X1KG
        </p>
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
        <p className="m-0">
        FEIJAO PRETO TIPO 1 FOOD SERVICE FDO 5X2KG
        </p>
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
