import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalBovinos = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button
                label="Mostrar categorias"
                icon="pi pi-external-link"
                onClick={() => setVisible(true)}
            />
            <Dialog
                header="Bovinos"
                visible={visible}
                style={{ width: "50vw" }}
                onHide={() => setVisible(false)}
            >
                <p className="m-0">ACEM BOV RESF </p>
                <p className="m-0">ACEM EM CUBOS BOV CONG </p>
                <p className="m-0">ALCATRA COM MAMINHA BOV RESF </p>
                <p className="m-0">ALCATRA COMPLETA GRILL +- 6,5KG BOV RESF </p>
                <p className="m-0">ALCATRA COMPLETA GRILL 7,5 KG UP BOV RESF </p>
                <p className="m-0">ALMONDEGA BOV ANGUS CONG 18 X 500GR </p>
                <p className="m-0">ALMONDEGA BOV CONG </p>
                <p className="m-0">ALMONDEGA BOV CONG CXA 9X1KG </p>
                <p className="m-0">ARANHA (RECORTE DE ALCATRA) BOV CONG </p>
                <p className="m-0">BIFE CHORIZO (CONTRA FILE) GRILL BOV CONG </p>
                <p className="m-0">BIFE DO VAZIO (PACU) BOV CONG </p>
                <p className="m-0">BIFE DO VAZIO (PACU) BOV CONG </p>
                <p className="m-0">CAPA DE COXAO MOLE BOV RESF </p>
                <p className="m-0">CAPA DE COXAO MOLE BOV RESF </p>
                <p className="m-0">CAPA DE COXAO MOLE BOV RESF </p>
                <p className="m-0">CAPA DE FILE BOV RESF </p>
                <p className="m-0">CARNE DE SANGRIA BOV CONG </p>
                <p className="m-0">CARNE EM CUBOS (PATINHO) BOV CONG PCT 2KG </p>
                <p className="m-0">CARNE INDUSTRIAL BOV CONG </p>
                <p className="m-0">CARNE MOIDA BOV CONG TUBETE 500G </p>
                <p className="m-0">CARNE MOIDA DO DIANTEIRO BOV CONG </p>
                <p className="m-0">CARNE MOIDA DO PATINHO BOV CONG </p>
                <p className="m-0">CARNE MOIDA DO PATINHO BOV CONG 12X1KG BOI FORTE</p>
                <p className="m-0">CARNE MOIDA TIPO A BOV CONG </p>
                <p className="m-0">CHULETA GRILL BOV CONG CAMPO NOBRE</p>
                <p className="m-0">CONTRA FILE COM NOIX BOV CONG </p>
                <p className="m-0">CONTRA FILE COM NOIX BOV CONG </p>
                <p className="m-0">CONTRA FILE COM NOIX BOV CONG TF </p>
                <p className="m-0">CONTRA FILE COM NOIX BOV RESF </p>
                <p className="m-0">CONTRA FILE EM BIFES 200GR UP (BIFE DE TIRA) GRILL</p>
                <p className="m-0">CONTRA FILE EM BIFES 200GR UP (STEAK) GRILL BOV</p>
                <p className="m-0">CONTRA FILE GRILL 4KG UP SEM NOIX BOV RESF </p>
                <p className="m-0">CONTRA FILE GRILL BOV RESF </p>
                <p className="m-0">CONTRA FILE SEM NOIX BOV RESF </p>
                <p className="m-0">CONTRA FILE SEM NOIX BOV RESF </p>
                <p className="m-0">CORAÇAO BOV CONG </p>
                <p className="m-0">CORAÇAO BOV CONG </p>
                <p className="m-0">CORAÇAO BOV CONG </p>
                <p className="m-0">CORAÇAO DA ALCATRA (BABY BEEF) GRILL BOV RESF </p>
                <p className="m-0">CORDAO DO FILE MIGNON BOV CONG </p>
                <p className="m-0">COSTELA DO TRASEIRO EM TIRAS COM OSSO 4D BOV CONG</p>
                <p className="m-0">COSTELA DO TRASEIRO EM TIRAS COM OSSO BOV CONG </p>
                <p className="m-0">COSTELA DO TRASEIRO EM TIRAS COM OSSO BOV CONG </p>
                <p className="m-0">COSTELA DO TRASEIRO EM TIRAS COM OSSO BOV CONG TF </p>
                <p className="m-0">COSTELA DO TRASEIRO JANELA BOV CONG 6KG A 9,5 KG </p>
                <p className="m-0">COSTELA DO TRASEIRO JANELA PORCIONADA COM OSSO BOV CONG </p>
                <p className="m-0">COSTELA DO TRASEIRO MINGA 6,5 KG A 9,5KG BOV CONG </p>
                <p className="m-0">COXAO DURO BOV RESF </p>
                <p className="m-0">COXAO MOLE BOV RESF </p>
                <p className="m-0">COXAO MOLE BOV RESF </p>
                <p className="m-0">CUPIM A BOV CONG </p>
                <p className="m-0">CUPIM A IMPORTADO BOV RESF </p>
                <p className="m-0">CUPIM B BOV RESF </p>
                <p className="m-0">FIGADO BOV CONG </p>
                <p className="m-0">FIGADO BOV CONG </p>
                <p className="m-0">FIGADO BOV CONG </p>
                <p className="m-0">FILE DE COSTELA (BIFE ANCHO) BOV RESF </p>
                <p className="m-0">FILE DE COSTELA (BIFE ANCHO) BOV RESF </p>
                <p className="m-0">FILE DE COSTELA (BIFE ANCHO) FATIADO BOV CONG </p>
                <p className="m-0">FILE DE COSTELA BIFE ANCHO GRILL BOV RESF </p>
                <p className="m-0">FILE DE COSTELA EM BIFES 200GR UP (STEAK) GRILL BOV CONG</p>
                <p className="m-0">FILE MIGNON 3/4 SEM CORDÃO BOV RESF </p>
                <p className="m-0">FILE MIGNON 4/5 SEM CORDAO BOV RESF </p>
                <p className="m-0">FILE MIGNON 4/5 SEM CORDAO BOV RESF </p>
                <p className="m-0">FRALDA 0,6/1,6KG BOV RESF </p>
                <p className="m-0">FRALDA BOV CORTADA AO MEIO RESF </p>
                <p className="m-0">FRALDA BOV RESF </p>
                <p className="m-0">FRALDA BOV RESF </p>
                <p className="m-0">FRALDAO BOV CONG TF </p>
                <p className="m-0">FRALDAO BOV RESF BOI BRASIL</p>
                <p className="m-0">FRALDINHA DIAFRAGMA BOV CONG </p>
                <p className="m-0">FRALDINHA DIAFRAGMA BOV CONG BARRA MANSA</p>
                <p className="m-0">FRALDINHA DIAFRAGMA BOV CONG </p>
                <p className="m-0">HAMBURGUER ANGUS BOV CONG CXA 16X200G </p>
                <p className="m-0">HAMBURGUER ANGUS BOV CONG CXA 30X120GR </p>
                <p className="m-0">HAMBURGUER ANGUS GOURMET BOV CONG CXA12X400G CXTA2X200G </p>
                <p className="m-0">HAMBURGUER BOV CONG 36X90G </p>
                <p className="m-0">HAMBURGUER BOV CONG CXA 12X56GR CXA 672GR </p>
                <p className="m-0">HAMBURGUER BOV CONG CXA 30X120G </p>
                <p className="m-0">HAMBURGUER BOV CONG CXA 36X56G </p>
                <p className="m-0">HAMBURGUER BOV CONG CXA 36X56G </p>
                <p className="m-0">HAMBURGUER BOV CONG CXA 36X90G </p>
                <p className="m-0">HAMBURGUER DE PICANHA BOV CONG CXA 12X56G CXA 672GR </p>
                <p className="m-0">HAMBURGUER DE PICANHA BOV CONG CXA 30X120G </p>
                <p className="m-0">HAMBURGUER DE PICANHA BOV CONG CXA 36X56G </p>
                <p className="m-0">HAMBURGUER DE PICANHA BOV CONG CXA 36X90G </p>
                <p className="m-0">HAMBURGUER DE PICANHA GOURMET BOV CONG CXA12X400G CXTA2X200G </p>
                <p className="m-0">ISCA DE ACEM BOV CONG </p>
                <p className="m-0">ISCA DE PATINHO BOV CONG CXA 25 X 400GR CAMPO NOBRE</p>
                <p className="m-0">LAGARTO BOV RESF </p>
                <p className="m-0">LINGUA BOV CONG </p>
                <p className="m-0">LINGUA BOV CONG </p>
                <p className="m-0">LINGUIÇA DE COSTELA ANGUS BOV CONG 24 X 300GR CARAPRETA</p>
                <p className="m-0">LINGUIÇA DE COSTELA BOV C/QUEIJO COALHO 18 X 420GR CARAPRETA</p>
                <p className="m-0">LOMBINHO DO DIAFRAGMA BOV CONG </p>
                <p className="m-0">LOMBINHO DO DIAFRAGMA BOV CONG BARRA MANSA</p>
                <p className="m-0">MAMINHA BOV RESF </p>
                <p className="m-0">MAMINHA BOV RESF </p>
                <p className="m-0">MOCOTO SERRADO BOV CONG BOI BRASIL</p>
                <p className="m-0">OSSO BUCO FATIADO BOV CONG </p>
                <p className="m-0">PALETA COMPLETA BOV CONG TF </p>
                <p className="m-0">PALETA SEM MUSCULO BOV RESF </p>
                <p className="m-0">PATINHO BOV RESF </p>
                <p className="m-0">PEITO BOV RESF </p>
                <p className="m-0">PEIXINHO ANGUS BOV CONG CARAPRETA</p>
                <p className="m-0">PICANHA A BOV RESF </p>
                <p className="m-0">PICANHA B BOV RESF </p>
                <p className="m-0">PICANHA B BOV RESF </p>
                <p className="m-0">PICANHA BABY GRILL 0,700KG / 1,100KG BOV CONG </p>
                <p className="m-0">PICANHA BOV EM ISCAS PCT +-2KG CONG </p>
                <p className="m-0">PICANHA GRILL BOV CONG BOI BRASIL</p>
                <p className="m-0">PICANHA GRILL BOV RESF </p>
                <p className="m-0">PICANHA GRILL BOV RESF </p>
                <p className="m-0">PICANHA GRILL IMPORTADA NOVILHA JOVEM 700GR/1,100KG BOV CONG</p>
                <p className="m-0">RABO BOV CONG </p>
                <p className="m-0">RECORTE TRASEIRO BOV RESF </p>
                <p className="m-0">ROLHA DA ALCATRA (RECORTE) BOV RESF </p>
            </Dialog>
        </div>
    );
};
