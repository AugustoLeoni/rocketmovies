import { FiStar } from 'react-icons/fi'
import { Container, Tags } from "./styled";

export function MyMovies({ title, description, rating, tags }) {

  const numbers = Object.keys(new Array(5).fill(null))

  return(
    <Container>
      <h3>{title}</h3>
      <div>
        <FiStar size={20} 
          className={(rating >= 1) ? 'full-star' : '' }
        /> 
        <FiStar size={20} 
          className={(rating >= 2) ? 'full-star' : '' }
        /> 
        <FiStar size={20} 
          className={(rating >= 3) ? 'full-star' : '' }
        /> 
        <FiStar size={20} 
          className={(rating >= 4) ? 'full-star' : '' }
        /> 
        <FiStar size={20} 
          className={(rating >= 5) ? 'full-star' : '' }
        /> 
      </div>

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
  )
}