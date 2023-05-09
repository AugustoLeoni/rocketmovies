import { Container } from "./styled";
import { Input } from '../Input'
import { useAuth } from '../../hooks/auth'

import { api } from "../../services/api";

import { Link } from "react-router-dom";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ searchNotes }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => searchNotes(e.target.value)}
      />

      <div>
        <div>
          <span>{user.name}</span>
          <button onClick={signOut}>sair</button>
        </div>

        <Link to='perfil'>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </div>
    </Container>
  )
}