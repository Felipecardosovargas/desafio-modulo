import { useState } from "react";
import { useGithubSearch } from "../../hooks/useGithubSearch";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import RepositoryCard from "../../components/RepositoryCard";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { Container, RepoTitle, BoxArea, SwiperArea, NextButton, PrevButton, ProfileTitle, InfoPearson } from "./styles";
import Header from "../../components/Header";
import InfoProfile from "../../components/InfoProfile";
// import RepositoryModal from "../../components/RepositoryModal";
import "swiper/css";
import "swiper/css/navigation";
import type { Repository } from "../../@types";

const Profile = () => {
    const { username } = useParams<{ username: string }>();
    const { user, repositories, isLoading, error } = useGithubSearch(username || "");
    const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

    const handleCardClick = (repo: Repository, event: React.MouseEvent) => {
      const isLink = (event.target as HTMLElement).closest("a");
      if (!isLink) {
          setSelectedRepo(repo);
          console.log("Repo selecionado:", repo);
      }
    };

    if (isLoading) return <Loader />;

    if (error) return <ErrorMessage
      message="Usuário não encontrado!"
      onClose={() => {}}
      onDismis={() => {}}
      />

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
                        style={{ padding: "1.4rem" }}
                    >
                        {repositories?.map((repo: any) => (
                            <SwiperSlide key={repo.id}>
                                <RepositoryCard
                                  name={repo.name}
                                  description={repo.description}
                                  link={repo.html_url} // Adicionei o link do repositório
                                  language={repo.language || "Não especificado"} // Caso não tenha linguagem, exibe um padrão
                                  stars={repo.stargazers_count} // Adiciona a contagem de estrelas
                                  onClick={(event) => handleCardClick(repo, event)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperArea>

                {/* {selectedRepo && (
                    <RepositoryModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
                )} */}
            </BoxArea>
        </Container>
    );
};

export default Profile;
