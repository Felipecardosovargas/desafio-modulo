import React, { useState } from "react";
import { Container, Screen, Title, InputContainer, SearchInput, SearchButton, Label } from './styles';
import { useNavigate } from "react-router-dom";
import image from '../../assets/image.svg';
import ErrorMessage from "../../components/ErrorMessage"; // Importando o componente de erro

const Home: React.FC = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false); // Adicionando estado para controlar o erro
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (username.trim()) {
            setError(false); // Limpa o erro se o nome de usuário for válido

            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    // Se o usuário existir, navega para o perfil
                    navigate(`/profile/${username}`);
                } else {
                    // Se o usuário não for encontrado, exibe o erro
                    setError(true);
                }
            } catch (error) {
                setError(true); // Exibe o erro se houver um problema na requisição
            }
        } else {
            setError(true); // Exibe o erro se o nome de usuário estiver vazio
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch(); // Chama a função handleSearch quando "Enter" é pressionado
        }
    };

    return (
        <Container>
            <Screen>
                <div className="right">
                    <img src={image} alt="image" />
                </div>

                <div className="left">
                    {/* Exibe o ErrorMessage se houver um erro */}
                    {error && <ErrorMessage 
                            message="Não conseguimos identificar sua conta." 
                            onClose={() => setError(false)} 
                            style={{ position: 'absolute', top: '100px' }}// Ajuste de top aqui
                        />}

                    {/* Renderiza o título sempre, mas ele será visível abaixo do erro quando o erro for fechado */}
                    <div style={{ marginTop: error ? "20px" : "0px" }}>
                        <Title>Entrar</Title>
                    </div>

                    <InputContainer>
                        <Label htmlFor="username">Usuário</Label>
                        <SearchInput
                            type="text"
                            placeholder="Digite aqui seu usuário do GitHub"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={handleKeyDown} 
                        />
                    </InputContainer>
                    <SearchButton onClick={handleSearch}>Entrar</SearchButton>
                </div>
            </Screen>
        </Container>
    );
};

export default Home;
