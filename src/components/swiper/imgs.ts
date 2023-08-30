import styled from "styled-components";

export const ImageSlideOne = styled.div`
  background-image: url("https://media-manager.noticiasaominuto.com.br/1920/naom_62f380e1380c8.jpg");
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
  font-weight: 400;
  background-color: white;
  padding: 1.5rem;
  z-index: 10;
  top: 5rem;
  left: 2rem;
  color: black;
  font-style: italic;
`;

export const ImageSlideTwo = styled(ImageSlideOne)`
  background-image: url("https://premix.com.br/blog/wp-content/uploads/2022/08/10-curiosidades-sobre-exportacao-de-carne-bovina-thumbnail.png");
`;
export const ImageSlideTree = styled(ImageSlideOne)`
  background-image: url("https://acarnequeomundoprefere.com.br/uploads/media/image/ACQMP_midia_cortes.jpg");
`;
export const ImageSlideFor = styled(ImageSlideOne)`
  background-image: url("https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receitas-eisbein-1.jpg");
`;
export const ImageSlideFive = styled(ImageSlideOne)`
  background-image: url("https://odyssey-international.co.za/wp-content/uploads/2022/06/artigo.jpg");
`;
export const ImageSlideSix = styled(ImageSlideOne)`
  background-image: url("https://www.foodchainid.com/br/wp-content/uploads/sites/24/2020/07/imagem-blogpost-2-1024x544.png");
`;
