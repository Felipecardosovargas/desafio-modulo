import { Container, Screen, Title, Text } from './styles';
import image from '../../assets/image.svg';

const Home: React.FC = () => {

    return (
        <Container>
            <Screen>
                <div className="right">
                    <img src={image} alt="image" />
                </div>

                <div className="left">
                    <Title>404!</Title>
                        <Text>Página não encontrada</Text>
                </div>
            </Screen>
        </Container>
    );
};

export default Home;
