import styled from "styled-components";

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid transparent;
    border-top: 4px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
`;
