import styled from "styled-components";

// Tipagem das props
export interface UserCardProps {
    avatar_url: string;
    login: string;
    name?: string;
    bio?: string;
}

// Styled Components
export const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid #e2e7ea;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 1px #E3E7EB;
    border-radius: 18px;
    max-width: 700px;
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const Avatar = styled.img`
    width: 7.8125rem;
    height: 7.875rem;
    border-radius: 11px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    font-size: 12px;
    color: #6a6f73;
    font-weight: 500;
`;

export const Value = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #2c2c2c;
`;

export const Bio = styled.p`
    font-size: 14px;
    color: #2c2c2c;
    margin-top: 4px;
`;
