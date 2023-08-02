import { ContainerContato, ContentContact } from "./styles";
import Modelo from "../../assets/tratamento.jpeg";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineMail } from "react-icons/md";
import logo from '../../assets/logo2.png'

export function Contato() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=011992964453&text&type=phone_number&app_absent=0"
    );
  }
  return (
    <ContainerContato id="contato">
      <ContentContact data-aos="fade-up">
        <h1>Entre em contato com a gente!</h1>
        <div>
          <MdOutlineMail size={20}/>
          <span>contato@distribuidorawfoods.com.br</span>
        </div>
        <button onClick={contact}>Entre em contato</button>
      </ContentContact>
      <Image data-aos="fade-up" src={logo} alt="modelo" width={400} />
    </ContainerContato>
  );
}
