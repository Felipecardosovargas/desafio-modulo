import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserForm from "../../components/UserForm";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import { Container, Screen, Title } from "./styles";
import image from "../../assets/image.svg";
import { useGithubSearch } from '../../hooks/useGithubSearch';
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const { user, repositories, searchUser, isLoading, error } = useGithubSearch(username);

    const handleSearch = async () => {
        await searchUser();
        if (user && repositories) {
            navigate(`/profile/${username}`, { state: { user, repositories } });
        }
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const leftVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    };

    const rightVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    };

    return (
        <Container>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                layout
                style={{ width: "100%", height: "100%" }}
            >
                <Screen>
                    <motion.div className="right" variants={rightVariants} layout>
                        <img src={image} alt="GitHub User Search" />
                    </motion.div>

                    <motion.div className="left" variants={leftVariants} layout>
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <ErrorMessage 
                                        message="Usuário não encontrado!" 
                                        onClose={() => {}}
                                        onDismis={() => {}}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Title>Entrar</Title>

                        {isLoading && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <Loader />
                            </motion.div>
                        )}

                        <UserForm username={username} setUsername={setUsername} onSearch={handleSearch} />
                    </motion.div>
                </Screen>
            </motion.div>
        </Container>
    );
};

export default Home;
