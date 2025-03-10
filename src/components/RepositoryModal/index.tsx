import React from "react";
import {
    ModalContainer,
    BoxArea,
    CloseButton,
    RepoTitle,
    InfoGroup,
    InfoLabel,
    InfoValue,
    RepoDescription,
} from "./styles";

export interface RepositoryModalProps {
    repo: {
        id: number;
        name: string;
        description: string | null;
        html_url: string;
        visibility: string;
        language: string | null;
    };
    onClose: () => void;
}

const RepositoryModal = ({ repo, onClose }: RepositoryModalProps) => {
    if (!repo) return null;

    return (
        <ModalContainer>
            <BoxArea>
                <CloseButton onClick={onClose}>×</CloseButton>

                <RepoTitle>{repo.name}</RepoTitle>

                <InfoGroup>
                    <InfoLabel>Link:</InfoLabel>
                    <InfoValue>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.html_url}
                        </a>
                    </InfoValue>
                </InfoGroup>

                <InfoGroup>
                    <InfoLabel>Privacidade:</InfoLabel>
                    <InfoValue>{repo.visibility}</InfoValue>
                </InfoGroup>

                <InfoGroup>
                    <InfoLabel>Linguagem:</InfoLabel>
                    <InfoValue>{repo.language || "Não especificado"}</InfoValue>
                </InfoGroup>

                <RepoDescription>
                    <InfoLabel>Descrição:</InfoLabel>
                    <p>{repo.description || "Sem descrição disponível."}</p>
                </RepoDescription>
            </BoxArea>
        </ModalContainer>
    );
};

export default RepositoryModal;
