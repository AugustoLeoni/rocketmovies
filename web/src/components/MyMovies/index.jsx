import { FiveStars } from '../FiveStars';
import { Container, Tags } from "./styled";

import { Link } from 'react-router-dom';

export function MyMovies({ title, description, rating, tags }) {

  return (
    <Link to='/movie-preview'>
      <Container>
        <h3>{title}</h3>
        <FiveStars rating={rating} />

        <p>
          {description ? description : "..."}
        </p>

        {
          tags.map(tag => (
            <Tags
              key={tag}
            >
              {tag}
            </Tags>
          ))
        }
      </Container>
    </Link>
  )
}