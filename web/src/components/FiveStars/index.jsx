import { FiStar } from 'react-icons/fi'

import { Container } from "./styled";

export function FiveStars({ rating = 0 }) {
  return (
    <Container>
      <FiStar size={20}
        className={(rating >= 1) ? 'full-star' : ''}
      />
      <FiStar size={20}
        className={(rating >= 2) ? 'full-star' : ''}
      />
      <FiStar size={20}
        className={(rating >= 3) ? 'full-star' : ''}
      />
      <FiStar size={20}
        className={(rating >= 4) ? 'full-star' : ''}
      />
      <FiStar size={20}
        className={(rating >= 5) ? 'full-star' : ''}
      />
    </Container>
  )
}