import React from "react";
import { Container, RepoName, Title, Description, Link } from "./styles";

interface RepositoryCardProps {
    name: string;
    description: string;
    link: string;
    language: string;
    stars: number;
    onClick: (event: React.MouseEvent) => void; 
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ name, description, link, onClick }) => {

    return (
        <Container onClick={onClick}>
            <RepoName>{name}</RepoName>
            <Title>
                <Link 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <h3 style={{ color: '#6A6F73' }}>Link:</h3>
                    Acessar repositório
                </Link>
                <Description>
                    <h3 style={{ color: '#6A6F73' }}>Descrição:</h3>
                    {description || "Sem descrição disponível"}
                </Description>
            </Title>
        </Container>
    );
};

export default RepositoryCard;