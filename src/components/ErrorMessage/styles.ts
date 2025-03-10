import styled from 'styled-components';

// Contêiner principal
export const RectangleParent = styled.div`
    width: 430px;
    position: relative;
    height: 6.813rem;
    text-align: left;
    font-size: 1.25rem;
    color: #fff;
    font-family: Montserrat;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
`;

// "groupChild" estilizado com borda arredondada e fundo
export const GroupChild = styled.div`
    background-color: #fc8621;
    border-radius: 22px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 3.5rem;
    width: 360px;
    position: absolute; /* Necessário para o position: absolute do .close-icon funcionar */
    height: 5.25rem;
`;

export const CloseIcon = styled.img`
    width: 10px; /* Define o tamanho do ícone */
    height: 10px; /* Define o tamanho do ícone */
    cursor: pointer; /* Mostra o cursor de clique sobre o ícone */
    position: absolute; /* Para posicionamento dentro de um contêiner */
    top: 15px; /* Distância do topo */
    right: 20px; /* Distância da direita */
    z-index: 9999; /* Garante que o ícone fique acima de outros elementos */
    transition: transform 0.3s ease; /* Efeito de transição quando interagir */
    
    /* Aplicando uma transformação ao passar o mouse */
    &:hover {
        transform: scale(1.1); /* Aumenta um pouco o tamanho ao passar o mouse */
    }
`;

// Título estilizado
export const Texto = styled.b`
    font-size: 1.125rem;
    line-height: 1.875rem;
`;

// Texto secundário estilizado
export const Texto1 = styled.div`
    font-size: 0.75rem;
    line-height: 1.406rem;
    margin-top: 0.25rem;
`;

// Contêiner para o título e texto
export const TextoParent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;
`;

// Wrapper do grupo
export const GroupWrapper = styled.div`
    left: 20px;
    top: -30px;
    position: absolute;
`;

// Imagem dentro do grupo
export const GroupItem = styled.img`
    position: absolute;
    width: 65px;
    left: 15px;
    top: -30px;
`;

// Imagem interna dentro do grupo
export const GroupInner = styled.img`
    position: absolute;
    top: 2.625rem;
    left: 20.063rem;
    width: 0.5rem;
    height: 0.5rem;
`;

// Círculo com a classe "ellipseDiv"
export const EllipseDiv = styled.div`
    position: absolute;
    top: 3.813rem;
    left: 2.5rem;
    border-radius: 50%;
    background-color: #c24914;
    width: 1.25rem;
    height: 1.25rem;
`;

// "groupChild1" estilizado
export const GroupChild1 = styled.div`
    position: absolute;
    top: 5.375rem;
    left: 1.313rem;
    border-radius: 50%;
    background-color: #c24914;
    width: 0.625rem;
    height: 0.625rem;
`;

// "groupChild2" estilizado
export const GroupChild2 = styled.div`
    position: absolute;
    top: 4.438rem;
    left: 0.5rem;
    border-radius: 50%;
    background-color: #c24914;
    width: 0.375rem;
    height: 0.375rem;
`;