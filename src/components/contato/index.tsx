import { ContainerContato, ContentContact, StyledButton } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/logo.png";
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

      </ContentContact>
      <Image data-aos="fade-up" src={logo} alt="modelo" width={400} />
    </ContainerContato>
  );
}
