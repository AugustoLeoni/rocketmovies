import { FiCamera, FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Svg } from "./styled";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText'

export function Perfil() {
  return (
    <Container>
      <header>
        <ButtonText title='Voltar' icon={FiArrowLeft} />
      </header>

      <div>
        <div>
          <img src="http://github.com/AugustoLeoni.png" alt="Foto do usuário" />
          <Svg >
            <FiCamera size={20} />
          </Svg>
        </div>

        <Form>
          <Input placeholder='Nome' icon={FiUser} />
          <Input placeholder='E-mail' icon={FiMail} />

          <Input placeholder='Senha atual' icon={FiLock} />
          <Input placeholder='Nova senha' icon={FiLock} />

          <Button title='Salvar' />
        </Form>
      </div>
    </Container>
  )
}