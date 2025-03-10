import React, { useState } from "react";
import { 
    RectangleParent, 
    GroupChild, 
    Texto, 
    Texto1, 
    TextoParent, 
    GroupWrapper,
    CloseIcon,
} from "./styles";
import eclipseError from '../../assets/eclipseError.svg';
import xIcon from '../../assets/x-icon.svg'; // Corrigido aqui

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    const [showError, setShowError] = useState(true); // Estado para controlar a visibilidade do erro

    const handleCloseError = () => {
        setShowError(false); // Fecha a mensagem de erro ao clicar no ícone
    };

    return (
        <>
            {showError && (
                <RectangleParent>
                    <GroupChild>
                        <TextoParent>
                            <GroupWrapper>
                                <img className="eclipseError" alt="groupItem" src={eclipseError} />
                            </GroupWrapper>
                            <Texto>Ops!</Texto>
                            <Texto1>{message}</Texto1>
                        </TextoParent>
                        <CloseIcon alt="CloseIcon" src={xIcon} onClick={handleCloseError} />
                    </GroupChild>
                </RectangleParent>
            )}
        </>
    );
};

export default ErrorMessage;
