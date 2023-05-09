import { Background, Container, Form } from "./styled";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input'
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault()
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel cadastrar")
        }
      })

  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to='/'>
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}