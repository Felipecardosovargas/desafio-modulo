import React from 'react';
import { LoaderContainer, 
    LoaderWrapper, 
    OuterLoadingImage, 
    InnerLoadingImage, 
    LoaderText } from './styles';
import LoadingOut from '../../assets/Loading_Out.svg';
import LoadingIn from '../../assets/Loading_In.svg'; // Corrigido para Loading_In

const Loader: React.FC = () => {
    return (
        <LoaderContainer>
            <LoaderWrapper>
                <OuterLoadingImage src={LoadingOut} alt="Loading Out" />
                <InnerLoadingImage src={LoadingIn} alt="Loading In" />
            </LoaderWrapper>
            <LoaderText>Loading...</LoaderText>
        </LoaderContainer>
    );
};

export default Loader;