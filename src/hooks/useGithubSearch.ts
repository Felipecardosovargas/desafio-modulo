import useSWR, { mutate } from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useGithubSearch = (username: string) => {
    const { data: user, error: userError, isLoading: isUserLoading } = useSWR(
        username ? `https://api.github.com/users/${username}` : null,
        fetcher
    );

    const { data: repositories, error: repoError, isLoading: isRepoLoading } = useSWR(
        username ? `https://api.github.com/users/${username}/repos` : null,
        fetcher
    );

    // Combina erros das duas requisições
    const error = userError || repoError;
    const isLoading = isUserLoading || isRepoLoading;

    // Permite buscar novos dados manualmente
    const searchUser = async () => {
        if (username) {
            await mutate(`https://api.github.com/users/${username}`);
            await mutate(`https://api.github.com/users/${username}/repos`);
        }
    };

    return {
        user,
        repositories,
        searchUser,
        isLoading,
        error,
    };
};
