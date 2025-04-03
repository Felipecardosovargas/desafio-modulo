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
    margin: 0; 
    padding: 0; 
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
        background-color: #05478A;
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
    margin-bottom: 2rem;
    color: #303030;
    text-align: center;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.1875rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 19.875rem;
`;

export const Label = styled.p`
    margin-bottom: 0.56rem;
    font-size: 0.9375rem;
    font-weight: 400;
    color: #303030;
`;

export const SearchInput = styled.input`
    width: 19.875rem;
    height: 2.6875rem;
    padding: 10px;
    font-size: 16px;
    border-radius: 0.1875rem;
    border: 1px solid #B5B5B5;
    outline: none;
    margin-bottom: 2rem;
    color: #000;
`;

export const SearchButton = styled.button`
    background-color: #05478A;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    width: 19.875rem;
    height: 2.6875rem;
    text-align: center;
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover {
        background-color: #0056b3;
    }
`;
