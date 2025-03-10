import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Importação correta dos módulos
import { useParams } from "react-router-dom";
import axios from "axios";
import RepositoryCard from "../../components/RepositoryCard";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { Container, RepoTitle, BoxArea, SwiperArea, NextButton, PrevButton, ProfileTitle, InfoPearson } from "./styles";
import Header from "../../components/Header";
import InfoProfile from "../../components/InfoProfile";
import RepositoryModal from "../../components/RepositoryModal";

// Importar os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';

// Interfaces
interface UserProfile {
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
}

interface Repository {
    id: number;
    name: string;
    description: string;
}

const Profile: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const [user, setUser] = useState<UserProfile | null>(null);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null); // Estado para o repositório selecionado

    // Função para lidar com o clique no card do repositório
    const handleCardClick = (repo: Repository, event: React.MouseEvent) => {
        const isLink = (event.target as HTMLElement).closest("a");
        if (!isLink) {
            setSelectedRepo(repo);
          console.log('Repo selecionado:', repo);  // Verifique no console
        }
        };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const userResponse = await axios.get(`https://api.github.com/users/${username}`);
                const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

                setUser(userResponse.data);
                setRepos(reposResponse.data);
            } catch (error) {
                console.error(error);
                setError("Erro ao buscar dados do usuário. Verifique o nome digitado.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Container>
            <Header />

            <BoxArea>
                <InfoPearson>
                    <ProfileTitle>Informações do Perfil</ProfileTitle>
                    {user && <InfoProfile avatar_url={user.avatar_url} login={user.login} name={user.name} bio={user.bio} />}
                    <RepoTitle>Repositórios</RepoTitle>
                </InfoPearson>

                <SwiperArea>
                    <PrevButton className="swiper-button-prev prev" />
                    <NextButton className="swiper-button-next next" />
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation={{ nextEl: ".next", prevEl: ".prev" }}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]} 
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3.5 },
                            1600: { slidesPerView: 4 },
                            1920: { slidesPerView: 5 },
                        }}
                        style={{ padding: '1.4rem' }}
                    >
                        {repos.map((repo) => (
                            <SwiperSlide key={repo.id}>
                                <RepositoryCard
                                    name={repo.name}
                                    description={repo.description}
                                    onClick={(event) => handleCardClick(repo, event)} // Passa a função de clique para o card
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperArea>

                {selectedRepo && (
                    <RepositoryModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
                )}
            </BoxArea>
        </Container>
    );
};

export default Profile;
