import { ContainerContato, ContentContact, StyledButton } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/logo2.png";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

export function Contato() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

function submitForm() {
  alert('Email enviado com sucesso')
}
  return (
    <ContainerContato id="contato">
      <ToastContainer />
      <ContentContact>
        <h1>Entre em contato com a gente!</h1>
        <div>
          <MdOutlineMail size={20} />
          <span>contato@distribuidorawfoods.com.br</span>
        </div>

        <form action="https://api.staticforms.xyz/submit" method="post">
          <input
            type="hidden"
            name="accessKey"
            value="6169a5c8-2a6f-40d2-9b07-529f466a523a"
          />
          <input type="text" name="name" placeholder="Nome"/>
          <input type="text" name="phone" placeholder="Telefone" />
          <input type="text" name="email" placeholder="E-Mail"/>
          <textarea name="message" placeholder="Mensagem" />
          <input
            type="hidden"
            name="replyTo"
            value="myreplytoemail@example.com"
          />
          <input type="hidden" name="replyTo" value="@" />
          <input
            type="hidden"
            name="redirectTo"
            value="http://localhost:3000/"
          />
          <StyledButton onClick={submitForm} type="submit" value="Submit" />
        </form>
      </ContentContact>
      <Image data-aos="fade-up" src={logo} alt="modelo" width={400} />
    </ContainerContato>
  );
}
