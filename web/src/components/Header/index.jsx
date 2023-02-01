import { Container } from "./styled";
import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título"/>

      <div>
        <div>
          <span>Jose Augusto</span>
          <p>sair</p>
        </div>

        <img src="http://github.com/AugustoLeoni.png" alt="" />
      </div>
    </Container>
  )
}