import styled from "styled-components";

export const Container = styled.div`
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #1f1f1f;
    color: white;
`;

export const Screen = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    .left, .right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .left {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        max-width: 40%;
    }

    .right {
        background-color: #872626;
        flex-grow: 1;
    }

    /* Media query para tablet */
    @media (max-width: 1200px) and (min-width: 600px) {
        .left {
            width: 100%;
            max-width: 100%;
        }

        .right {
            display: none;
        }

        /* Exibindo a imagem para tablet */
        .tablet-image {
            display: block;
            width: 100%;
            max-width: 400px; /* Ajuste conforme o tamanho desejado */
            margin-top: 20px; /* Ajuste o espaço entre o conteúdo */
        }
    }

    @media (max-width: 600px) {
        .left {
            width: 100%;
            max-width: 100%;
        }

        .right {
            display: none;
        }
    }
`;

export const Title = styled.h1`
    color: #872626;
    text-align: center;
    font-family: Montserrat;
    font-size: 8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Text = styled.p`
    color: #872626;
    font-family: Montserrat;
    font-size: 1.825rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`