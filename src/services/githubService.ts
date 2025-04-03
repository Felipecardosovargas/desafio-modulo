import axios from "axios";
import { Repository, User } from "../@types";

const api = axios.create({
    baseURL: "https://api.github.com",
});

export const getUser = async (username: User) => {
    const { data } = await api.get(`/users/${username}`);
    return data;
};

export const getRepositories = async (username: Repository) => {
    const { data } = await api.get(`/users/${username}/repos`);
    return data;
};
