import { FiPlus } from 'react-icons/fi'
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { MyMovies } from '../../components/MyMovies';
import { Container, Movies } from "./styled";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {
  const [dataMovies, setDataMovies] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/movie-preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setDataMovies(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header
        searchNotes={setSearch}
      />

      <div>
        <h2>Meus filmes</h2>
        <Link to='/create-movie'>
          <Button title="Adicionar filme" icon={FiPlus} />
        </Link>

      </div>

      <Movies className='list'>
        {
          dataMovies.map(data => (
            <MyMovies
              key={String(data.id)}
              title={data.title}
              rating={data.rating}
              description={data.description}
              tags={data.tags}
              onClick={() => handleDetails(data.id)}
            />
          ))
        }

      </Movies>
    </Container>
  )
}