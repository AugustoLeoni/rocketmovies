import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Textarea, Markers } from "./styled";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MarkerTag } from '../../components/MarkerTag';

import { Link } from 'react-router-dom';

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Form className='fromScrollBar'>
        <ButtonText title="Voltar" icon={FiArrowLeft} />

        <h1>
          Novo Filme
        </h1>

        <div>
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <Textarea placeholder='Observações' />

        <p>Marcadores</p>
        <Markers>
          <MarkerTag title="React" />
          <MarkerTag isActive={true} />
        </Markers>

        <div>
          <Button title="Excluir filme" exclude />
          <Button title="Salvar alterações" />
        </div>
      </Form>
    </Container>
  )
}