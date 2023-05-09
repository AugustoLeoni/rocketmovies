import { FiveStars } from '../FiveStars';
import { Container, Tags } from "./styled";

export function MyMovies({ title, description, rating, tags, ...rest }) {
  return (
    <Container
      {...rest}
    >
      <h3>{title}</h3>
      <FiveStars rating={rating} />

      <p>
        {description ? description : "..."}
      </p>

      {tags &&
        tags.map(tag => (
          <Tags
            key={tag.id}
          >
            {tag.name}
          </Tags>
        ))
      }
    </Container>
  )
}