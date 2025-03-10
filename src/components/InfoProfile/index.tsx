import React from "react";
import { UserCardProps, Avatar, UserInfo, InfoGroup, Label, Value, Bio, Card } from "./styles";

const UserCard: React.FC<UserCardProps> = ({ avatar_url, login, name, bio }) => {
    return (
        <Card>
            <Avatar src={avatar_url} alt={login} />
            <UserInfo>
                <InfoGroup>
                    <Label>Nome</Label>
                    <Value>{name || "Nome não disponível"}</Value>
                </InfoGroup>
                <InfoGroup>
                    <Label>Usuário</Label>
                    <Value>@{login}</Value>
                </InfoGroup>
                <InfoGroup>
                    <Label>Bio</Label>
                    <Bio>{bio || "Nenhuma biografia disponível."}</Bio>
                </InfoGroup>
            </UserInfo>
        </Card>
    );
};

export default UserCard;