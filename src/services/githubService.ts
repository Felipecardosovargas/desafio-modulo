import { api } from "./api";

export const getUserRepositories = async (username: string) => {
    try {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
    } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    throw error;
    }
};

// https://api.github.com/users/{username} e https://api.github.com/users/{username}/repos.
