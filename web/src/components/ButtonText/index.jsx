import { Container } from "./styled";
import { Link } from 'react-router-dom'

export function ButtonText({ icon: Icon, title }) {
  return (
    <Container>
      <Link to='/'>
        {Icon && <Icon size={20} />}
        {title}
      </Link>
    </Container>
  )
}