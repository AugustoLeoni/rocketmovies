import { Container } from "./styled";
import { Input } from '../Input'

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <div>
        <div>
          <span>Jose Augusto</span>
          <p>sair</p>
        </div>

        <Link to='perfil'>
          <img src="http://github.com/AugustoLeoni.png" alt="" />
        </Link>
      </div>
    </Container>
  )
}