import styled from "styled-components";

// Container com media query
export const Container = styled.div`
    position: relative;
    width: 22.813rem;
    height: 18.313rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.4);
    text-align: left;
    font-family: Montserrat;

    /* Media Queries */
    @media (max-width: 1920px) {
        width: 90%;
        height: auto;
        margin: 1rem auto;
    }

    @media (max-width: 1600px) {
        width: 90%;
        height: auto;
        margin: 1rem auto;
    }

    @media (max-width: 1440px) {
        width: 90%;
        height: auto;
        margin: 1rem auto;
    }

    @media (max-width: 1024px) {
        width: 90%;
        height: auto;
        margin: 1rem auto;
    }

    @media (max-width: 768px) {
        width: 85%;
        height: auto;
        margin: 1rem auto;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin: 1rem 0;
    }
`;

export const RepoName = styled.h3`
    font-size: 0.938rem;
    color: #202e49;
    margin-bottom: 0.5rem;
    padding: 2rem;
    border-bottom: 1px solid #0070E0;
    font-family: Montserrat;
    font-weight: 700;
    line-height: normal;
    padding-left: 3rem;

    /* Media Queries */
    @media (max-width: 1920px) {
        font-size: 0.875rem;
        padding-left: 2rem;
    }

    @media (max-width: 1600px) {
        font-size: 0.875rem;
        padding-left: 2rem;
    }

    @media (max-width: 1440px) {
        font-size: 0.875rem;
        padding-left: 2rem;
    }

    @media (max-width: 1024px) {
        font-size: 0.875rem;
        padding-left: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding-left: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding-left: 1rem;
    }
`;

export const Title = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;

    /* Media Queries */
    @media (max-width: 1920px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media (max-width: 1600px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media (max-width: 1440px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media (max-width: 1024px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media (max-width: 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media (max-width: 480px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`;

export const Description = styled.p`
    font-size: 0.875rem;
    line-height: 1.313rem;
    font-weight: 500;
    color: #202e49;
    margin-bottom: 1rem;
    border-radius: 0.6875rem;
    background: #F7F7F7;
    width: 17.5625rem;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    /* Media Queries */
    @media (max-width: 1920px) {
        width: 100%;
        font-size: 0.85rem;;
    }

    @media (max-width: 1600px) {
        width: 90%;
        font-size: 0.85rem;
    }

    @media (max-width: 1440px) {
        width: 100%;
        font-size: 0.85rem;
    }
    
    @media (max-width: 1024px) {
        width: 90%;
        font-size: 0.85rem;
    }

    @media (max-width: 768px) {
        width: 80%;
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        font-size: 0.75rem;
    }
`;

export const LinkWrapper = styled.div`
    position: relative;
    width: 17.563rem;
    height: 3.5rem;
    background: #f7f7f7;
    border-radius: 11px;
    padding: 0.688rem;
    margin-top: 1rem;

    /* Media Queries */

    @media (max-width: 1920px) {
        width: 80%;
        font-size: 0.85rem;;
    }

    @media (max-width: 1600px) {
        width: 80%;
        font-size: 0.85rem;
    }

    @media (max-width: 1440px) {
        width: 80%;
        font-size: 0.85rem;
    }

    @media (max-width: 1024px) {
        width: 90%;
        margin-top: 0.8rem;
    }

    @media (max-width: 768px) {
        width: 80%;
        margin-top: 0.6rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin-top: 0.5rem;
    }
`;

export const LinkText = styled.span`
    font-size: 0.75rem;
    color: #6a6f73;

    /* Media Queries */
    @media (max-width: 1024px) {
        font-size: 0.7rem;
    }

    @media (max-width: 768px) {
        font-size: 0.65rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

export const Link = styled.a`
    pointer-events: auto;
    text-decoration: none;
    color: inherit;
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #202e49;
    text-decoration: underline;
    border-radius: 0.6875rem;
    padding: 1rem;
    background: #F7F7F7;
    width: 17.5625rem;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 10;

    &:hover {
        color: #0056b3;
    }

    /* Media Queries */
    @media (max-width: 1920px) {
        width: 100%;
        font-size: 0.85rem;;
    }

    @media (max-width: 1600px) {
        width: 90%;
        font-size: 0.85rem;
    }

    @media (max-width: 1440px) {
        width: 100%;
        font-size: 0.85rem;
    }

    @media (max-width: 1024px) {
        width: 90%;
        font-size: 0.85rem;
    }

    @media (max-width: 768px) {
        width: 80%;
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        font-size: 0.75rem;
    }
`;