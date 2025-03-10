import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const BoxArea = styled.div`
    width: 90%;
    max-width: 600px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 1.8rem;
    color: #333;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
        transform: scale(1.1);
        color: #f00;
    }

    &:focus {
        outline: none;
    }
`;

export const RepoTitle = styled.h2`
    font-size: 1.5rem;
    color: #202e49;
    margin-bottom: 15px;
`;

export const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const InfoLabel = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    color: #6a6f73;
`;

export const InfoValue = styled.span`
    font-size: 1rem;
    color: #202e49;
    word-break: break-word;

    a {
        color: #0073e6;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const RepoDescription = styled.div`
    margin-top: 15px;
    
    p {
        font-size: 1rem;
        color: #202e49;
        line-height: 1.5;
    }
`;
