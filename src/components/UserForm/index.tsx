import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import ErrorMessage from '../ErrorMessage';

interface SearchFormProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => Promise<void>;
}

interface GitHubErrorResponse {
    message: string;
    documentation_url: string;
}

interface FormData {
    username: string;
}

const checkGitHubUser = async (username: string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
        const errorData: GitHubErrorResponse = await response.json();
        return {
            exists: false,
            status: response.status,
            message: errorData.message,
            documentation_url: errorData.documentation_url
        };
        }

        const userData = await response.json();
        return {
        exists: true,
        data: userData
        };

    } catch (error) {
        console.error("Error checking GitHub user:", error);
        return {
        exists: false,
        status: 'error',
        message: 'Network error'
        };
    }
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      username: ''
    }
});

    const [error, setError] = useState<string | null>(null);
    const [isVerifying, setIsVerifying] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setError(null);

        clearErrors('username');

        setValue('username', newValue, { shouldValidate: false });
    };

    const onSubmit = async (data: FormData) => {
        const { username } = data;

        if (!username.trim()) {
        return;
        }

        const githubUsernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
        if (!githubUsernameRegex.test(username)) {
        setError('Invalid GitHub username format');
        return;
        }

        try {
        const result = await checkGitHubUser(username);

        if (!result.exists) {
            if (result.status === 404) {
            setError('GitHub user does not exist');
            } else if (result.status === 403) {
            setError('GitHub API rate limit exceeded');
            } else {
            setError(`Error: ${'Something went wrong'}`);
            }

            setIsVerifying(false);
            onSearch();
            return;
        }

        try {
          await checkGitHubUser(username);
          navigate(`/user/${username}`);
        } catch (error) {
            setError("An error occurred while loading data");
        }

        } catch (error) {
        console.error("Error during data fetching:", error);
        setError("An error occurred while loading data");
        setIsVerifying(false);
        onSearch();
        }
    };

    return (
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.ErrorContainer>
            {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
        </S.ErrorContainer>

        <S.InputContainer>
            <S.Label htmlFor="username">User</S.Label>
            <S.Input
              id="username"
              type="text"
              placeholder="Enter GitHub username"
              {...register("username")}
              onChange={handleChange}
              value={inputValue}
              aria-label="GitHub username"
              disabled={isVerifying}
            />
        </S.InputContainer>

        <S.SearchButton
            type="submit"
            disabled={isVerifying || inputValue.trim() === ''}
        >
            {isVerifying ? (
            <S.ButtonLoadingContainer>
                <S.ButtonLoadingSpinner /> Searching...
            </S.ButtonLoadingContainer>
            ) : (
            'Search'
            )}
        </S.SearchButton>
        </S.FormContainer>
    );
};

export default SearchForm;
