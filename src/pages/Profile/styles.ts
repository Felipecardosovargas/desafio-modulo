import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Desativa as propriedades padrão de navegação do Swiper */
    .swiper-button-prev,
    .swiper-button-next {
        left: auto !important;
        right: auto !important;
    }

    .swiper-rtl .swiper-button-prev {
        left: auto !important;
        right: auto !important;
    }

    .swiper-rtl .swiper-button-next {
        left: auto !important;
        right: auto !important;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ECEFF5;
    min-height: 100vh;
    color: #333;
`;

export const BoxArea = styled.div`
    width: 90%;
    height: 87%;
    border-radius: 0.625rem;
    background: #FFF;
    gap: 1rem;
    overflow: hidden;
    margin-bottom: 3rem;
    @media (max-width: 1024px) {
        height: auto;
    }
`;

export const SwiperArea = styled.div`
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
`;

export const SwiperButton = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.61413rem;
    height: 1.61413rem;
    background-size: contain; /* Ajusta a imagem para caber no botão */
    color: transparent;
    background-repeat: no-repeat;
      /* Evitar sobreposição de estilos globais */
    left: auto !important;
`;

export const PrevButton = styled(SwiperButton)`
    right: 110px; /* Posiciona o botão de 'Anterior' */
    background-image: url('/src/assets/SwiperButton-left.svg'); /* Imagem para o botão de 'Anterior' */
`;

export const NextButton = styled(SwiperButton)`
    right: 80px; /* Posiciona o botão de 'Próximo' */
    background-image: url('/src/assets/SwiperButton-right.svg'); /* Imagem para o botão de 'Próximo' */
`;

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid #007bff;
`;

export const Username = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ProfileTitle = styled.h3`
    margin-bottom: 10px;
    color: #333;
    font-family: Montserrat, sans-serif;
    font-size: 1.875rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding-left: 1rem;
    }
`;

export const RepoTitle = styled.h3`
    margin-bottom: 10px;
    color: #333;
    font-family: Montserrat, sans-serif;
    font-size: 1.875rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding-left: 1rem;
    }
`;

export const InfoPearson = styled.div`
    padding-left: 3.4rem;
    padding-right: 3.4rem;
    padding-top: 3.4rem;
`;

export const RepoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
    @media (max-width: 1024px) {
        max-width: 100%;
        padding: 10px;
    }
`;

export default GlobalStyle;
