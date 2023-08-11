import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalPoupasEFrutas = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button
                label="Mostrar categorias"
                icon="pi pi-external-link"
                onClick={() => setVisible(true)}
            />
            <Dialog
                header="Poupas e Frutas Congeladas"
                visible={visible}
                style={{ width: "50vw" }}
                onHide={() => setVisible(false)}
            >
                <p className="m-0">FRUTA MANGA CONG FDO 10 X 1KG</p>
                <p className="m-0">FRUTA MIRTILO CONG FDO 10 X 1KG</p>
                <p className="m-0">PO PARA REFRESCO DE ABACAXI CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE CAJU CXA10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE GOIABA CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE LARANJA CXA10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE LARANJA/ACEROLA CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE LIMAO CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE MANGA CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE MARACUJA CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE PESSEGO CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE TANGERINA CXA 10X1KG</p>
                <p className="m-0">PO PARA REFRESCO DE UVA CXA 10X1KG</p>
                <p className="m-0">POLPA DE ABACAXI COM HORTELA CONG 5X1KG</p>
                <p className="m-0">POLPA DE ABACAXI NATURAL CONG 5X1KG</p>
                <p className="m-0">POLPA DE ACEROLA COM LARANJA CONG 5X1KG</p>
                <p className="m-0">POLPA DE ACEROLA CONG 5X1KG</p>
                <p className="m-0">POLPA DE AMORA CONG 5X1KG</p>
                <p className="m-0">POLPA DE COCO CONG 5X1KG</p>
                <p className="m-0">POLPA DE GOIABA CONG 5X1KG</p>
                <p className="m-0">POLPA DE LIMÃO CONG 5X1KG</p>
                <p className="m-0">POLPA DE MARACUJA COM SEMENTE CONG 5X1KG</p>
                <p className="m-0">POLPA DE MARACUJA CONG 5X1KG</p>
                <p className="m-0">POLPA DE MORANGO CONG 5X1KG</p>
                <p className="m-0">POLPA DE TAMARINDO CONG 5X1KG</p>
                <p className="m-0">POLPA DE UVA CONG 5X1KG</p>
                <p className="m-0">POLPA DETOX VERMELHO CONG 5X1KG</p>
               
            </Dialog>
        </div>
    );
};
