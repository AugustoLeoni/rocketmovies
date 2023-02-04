import { Background, Container, Form } from "./styled";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to='/'>
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}