export interface User {
        login: string;
        id: number;
        avatar_url: string;
        html_url: string;
        name: string;
        bio: string;
    }
    
    export interface Repository {
        id: number;
        name: string;
        description: string;
        html_url: string;
        language: string;
        visibility: string;
    }