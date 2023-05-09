import { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { CiClock2 } from 'react-icons/ci'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiveStars } from '../../components/FiveStars'

import { Container, Section, Tags } from "./styled";

import { api } from '../../services/api'

export function MoviePreview() {
  const [data, setDate] = useState(null)

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setDate(response.data)
    }

    fetchMovie();
  }, [])

  return (
    <Container>
      <Header />
      {data &&
        <Section className='list'>

          <ButtonText title='Voltar' icon={FiArrowLeft} />

          <div>
            <h1>{data.title}</h1>

            <FiveStars rating={data.rating} />
          </div>

          <div>
            <img src="http://github.com/AugustoLeoni.png" alt="" />
            <p>
              Por Jose Augusto
            </p>

            <CiClock2 size={20} />

            <p>
              {data.updated_at}
            </p>
          </div>

          <div>
            {data.tags &&
              data.tags.map(tag => (
                <Tags
                  key={tag.id}
                >
                  {tag.name}
                </Tags>
              ))
            }
          </div>

          <div>
            <p>
              {data.description}
            </p>

          </div>
        </Section>
      }

    </Container>
  )
}