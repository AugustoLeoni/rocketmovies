import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Textarea, Markers } from "./styled";

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MarkerTag } from '../../components/MarkerTag';

import { api } from '../../services/api';

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();

  function handleAddTag() {
    if (!newTag.trim()) {
      return
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    console.log(deleted)
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if (isNaN(rating)) {
      return alert("Na nota digite apenas numeros de 0 a 5.")
    }
    if (parseInt(rating) < 0 || parseInt(rating) > 5) {
      return alert("Na nota digite apenas numeros de 0 a 5.")
    }
    if (!title || !description || !rating) {
      return alert("Por favor preencha todos os campos.")
    }
    if (tags.length === 0) {
      return alert("Por favor adicione uma tag.")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adiconar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      rating: parseInt(rating),
      tags
    });

    alert("Nota criada com sucesso!");
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>

        <Form className='fromScrollBar'>
          <ButtonText title="Voltar" icon={FiArrowLeft} />
          <header>
            <h1>
              Novo Filme
            </h1>
          </header>

          <div>
            <Input
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder='Observações'
            onChange={e => setDescription(e.target.value)}
          />

          <p>Marcadores</p>
          <Markers>
            {
              tags.map((tag, index) => (
                <MarkerTag
                  key={String(index)}
                  value={tag}
                  onclick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MarkerTag
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onclick={handleAddTag}
            />
          </Markers>

          <div>
            <Button title="Excluir filme" exclude />
            <Button
              title="Salvar alterações"
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}