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
import xIcon from '../../assets/x-icon.svg';

interface ErrorMessageProps {
    message: string;
    onClose: () => void; 
    onDismis?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose, onDismis }) => {
    const [showError, setShowError] = useState(true); 

    const handleCloseError = () => {
        setShowError(false);
        onClose(); 
        if (onDismis) {
            onDismis();
        }
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
