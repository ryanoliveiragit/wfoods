import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
                <p className="m-0">CAMARAO 7 BARBAS DESCASCADO CONG CXA 8 X 2KG</p>
                <p className="m-0">CAMARAO EMPANADO PRE FRITO CONG CXA 15X300G</p>
                <p className="m-0">CASQUINHA DE SIRI DESFIADA CONG CXA 18X1KG</p>
                <p className="m-0">FILE DE MERLUZAO 200G UP CONG</p>
                <p className="m-0">FILE DE SAITHE 1KG UP CONG </p>
                <p className="m-0">FILE DE SAITHE C/PELE 1KG UP CONG</p>
                <p className="m-0">FILE DE SALMAO 500GR CONG</p>
                <p className="m-0">FILE DE SALMAO PREMIUM COHO CHILENO CONG</p>
                <p className="m-0">FILE DE TILAPIA 30% GLAZING CONG CXA 3X5KG</p>
                <p className="m-0">FILE DE TILAPIA EMPANADO CONG PCT 14 X 700GR</p>
                <p className="m-0">ISCA DE TILAPIA EMPANADO CONG PCT 14 X 700G</p>
                <p className="m-0">LOMBO DE CAÇÃO CONG</p>
                <p className="m-0">LULA EM ANEIS A GRANEL CONG</p>
                <p className="m-0">LULA EM ANEIS CONG</p>
                <p className="m-0">MERLUZA EVISCERADA S/CABECA CONG</p>
                <p className="m-0">PEIXE CORVINA INTEIRA CONG</p>
                <p className="m-0">PEIXE DOURADO EVISCERADO CONG</p>
                <p className="m-0">PEIXE PORQUINHO PEROA ESVICERADO IQF CONG</p>
                <p className="m-0">POLACA DO ALASKA SALG DESFIADA CONG 500G</p>
                <p className="m-0">SARDINHA INTEIRA CONG PCT 800GR</p>
               
            </Dialog>
        </div>
    );
};
