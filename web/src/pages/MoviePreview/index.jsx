import { FiArrowLeft } from 'react-icons/fi'
import { CiClock2 } from 'react-icons/ci'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiveStars } from '../../components/FiveStars'

import { Container, Section, Tags } from "./styled";

export function MoviePreview() {

  const tags = ['Ficção Cientifica', 'Drama', 'Familia']

  return (
    <Container>
      <Header />

      <Section className='list'>

        <ButtonText title='Voltar' icon={FiArrowLeft} />


        <div>
          <h1>Interestellar</h1>

          <FiveStars rating={5} />
        </div>

        <div>
          <img src="http://github.com/AugustoLeoni.png" alt="" />
          <p>
            Por Jose Augusto
          </p>

          <CiClock2 size={20} />

          <p>
            23/05/22 às 08:00
          </p>
        </div>

        <div>
          {
            tags.map(tag => (
              <Tags
                key={tag}
              >
                {tag}
              </Tags>
            ))
          }
        </div>

        <div>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, harum! Minus, assumenda illum minima commodi nobis hic atque nisi cumque quas delectus dolores error asperiores quidem tempora, nihil aliquid in.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis molestiae earum expedita, error blanditiis quos velit voluptatem placeat ab provident dicta deleniti dolore at obcaecati ipsa magni corrupti tenetur!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque a earum doloribus aliquam debitis, tempora in praesentium nostrum necessitatibus doloremque perspiciatis aspernatur possimus quisquam inventore excepturi obcaecati saepe perferendis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati error necessitatibus officia quae sunt ipsum corrupti aspernatur veniam veritatis esse alias libero tempora, autem odio nihil quia? Quibusdam, totam esse.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat perferendis! Deserunt, ullam corrupti, explicabo numquam accusantium totam dolor quibusdam nobis laboriosam nemo eius modi. Laboriosam officiis a rem accusamus!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque a earum doloribus aliquam debitis, tempora in praesentium nostrum necessitatibus doloremque perspiciatis aspernatur possimus quisquam inventore excepturi obcaecati saepe perferendis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati error necessitatibus officia quae sunt ipsum corrupti aspernatur veniam veritatis esse alias libero tempora, autem odio nihil quia? Quibusdam, totam esse.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat perferendis! Deserunt, ullam corrupti, explicabo numquam accusantium totam dolor quibusdam nobis laboriosam nemo eius modi. Laboriosam officiis a rem accusamus!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque a earum doloribus aliquam debitis, tempora in praesentium nostrum necessitatibus doloremque perspiciatis aspernatur possimus quisquam inventore excepturi obcaecati saepe perferendis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati error necessitatibus officia quae sunt ipsum corrupti aspernatur veniam veritatis esse alias libero tempora, autem odio nihil quia? Quibusdam, totam esse.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat perferendis! Deserunt, ullam corrupti, explicabo numquam accusantium totam dolor quibusdam nobis laboriosam nemo eius modi. Laboriosam officiis a rem accusamus!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque a earum doloribus aliquam debitis, tempora in praesentium nostrum necessitatibus doloremque perspiciatis aspernatur possimus quisquam inventore excepturi obcaecati saepe perferendis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati error necessitatibus officia quae sunt ipsum corrupti aspernatur veniam veritatis esse alias libero tempora, autem odio nihil quia? Quibusdam, totam esse.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat perferendis! Deserunt, ullam corrupti, explicabo numquam accusantium totam dolor quibusdam nobis laboriosam nemo eius modi. Laboriosam officiis a rem accusamus!
          </p>
        </div>
      </Section>

    </Container>
  )
}