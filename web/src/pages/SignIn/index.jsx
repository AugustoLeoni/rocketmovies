import { Background, Container, Form } from "./styled";
import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input'
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail}/>
        <Input placeholder="Senha" icon={FiLock}/>

        <Button title="Entrar"/>

        <ButtonText title="Criar conta"/>
      </Form>

      <Background />
    </Container>
  )
}