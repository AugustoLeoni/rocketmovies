import { useState } from 'react';
import { FiCamera, FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styled";

import { api } from '../../services/api'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom';

export function Perfil() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAtavar] = useState(avatarUrl)
  const [avatarFile, setAtavarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAtavarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAtavar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to='/'>
          <ButtonText title='Voltar' icon={FiArrowLeft} />
        </Link>
      </header>

      <div>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Form>
          <Input
            placeholder='Nome'
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder='E-mail'
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            placeholder='Senha atual'
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
          />
          <Input
            placeholder='Nova senha'
            icon={FiLock}
            onChange={e => setPasswordNew(e.target.value)}
          />

          <Button title='Salvar' onClick={handleUpdate} />
        </Form>
      </div>
    </Container>
  )
}