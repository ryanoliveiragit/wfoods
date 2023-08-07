import styled from "styled-components";

export const ImageSlideOne = styled.div`
  background-image: url("https://premix.com.br/blog/wp-content/uploads/2022/08/10-curiosidades-sobre-exportacao-de-carne-bovina-thumbnail.png");
  height: 33rem;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
    position: relative;

`;

export const TextSlide = styled.div`
position: absolute;
font-size: 3rem; 
border-left: 10px solid ${(props) => props.theme["pink-50"]};
font-weight: 600;
background-color: white;
padding: 1.5rem;
z-index: 10;
top: 15rem;
left: 5rem;
color: black;
`

export const ImageSlideTwo = styled(ImageSlideOne)`
    background-image: url('https://tuliosperb.com.br/wp-content/uploads/2022/01/laticinios-podem-ser-bons-para-o-coracao.jpg');
`

export const ImageSlideTree = styled(ImageSlideOne)`
    background-image: url('https://nutritotal.com.br/pro/wp-content/uploads/2019/02/Nutritotal_valorcalorico_de_cada_tipo_de_carne.png');
`

export const ImageSlideFor = styled(ImageSlideOne)`
background-image: url('https://img.freepik.com/fotos-premium/bife-de-file-cru-mignon-costela-striploin-saia_89816-12494.jpg?w=2000')
`