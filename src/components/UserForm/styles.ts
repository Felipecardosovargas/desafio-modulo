import styled, { keyframes } from 'styled-components';

const breakpoints = {
    tablet: '640px',
    mobile: '480px',
};
const colors = {
    primary: '#05478a',
    primaryHover: '#043c74',
    primaryLight: '#7ea7d0',
    text: '#303030',
    textSecondary: '#333',
    border: '#ddd',
    placeholder: '#b5b5b5',
    error: '#d73a49',
    white: '#fff',
};

/* The `export const FormContainer` styled component is defining the styles for a form container
element. Here's a breakdown of what the styles are doing: */
export const FormContainer = styled.form`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0 0.5rem;
    }
`;

export const ErrorContainer = styled.div`
    position: relative;
    height: 0;
    width: 100%;
    z-index: 10;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${colors.text};
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 0.5rem;
    display: block;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.95rem;
        margin-bottom: 0.4rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
    }
`;

export const Input = styled.input`
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid ${colors.border};
    border-radius: 8px;
    outline: none;
    color: ${colors.textSecondary};
    font-weight: 400;
    line-height: 24px;
    transition:
    border-color 0.3s,
    box-shadow 0.3s;

    &::placeholder {
        color: ${colors.placeholder};
    }

    &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 0 2px rgba(5, 71, 138, 0.1);
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0.7rem 0.9rem;
        font-size: 0.95rem;
        border-radius: 6px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.6rem 0.8rem;
        font-size: 0.9rem;
        border-radius: 4px;
    }
`;

export const SearchButton = styled.button`
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    transition:
        background-color 0.2s,
        transform 0.1s;
    margin-top: 2.5rem;

    &:hover:not(:disabled) {
        background-color: ${colors.primaryHover};
    }

    &:active:not(:disabled) {
        transform: translateY(1px);
    }

    &:disabled {
        background-color: ${colors.primaryLight};
        cursor: not-allowed;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0.7rem 1.2rem;
        font-size: 0.95rem;
        margin-top: 2rem;
        border-radius: 6px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        margin-top: 1.75rem;
        border-radius: 4px;
    }
`;

export const ErrorMessage = styled.span`
    color: ${colors.error};
    font-size: 0.8rem;
    margin-top: 0.5rem;
    display: block;
`;

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

export const ButtonLoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    `;

    export const ButtonLoadingSpinner = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: ${colors.white};
    animation: ${spin} 0.8s linear infinite;

    @media (max-width: ${breakpoints.mobile}) {
        width: 14px;
        height: 14px;
        border-width: 1.5px;
    }
`;
