import { FiX, FiPlus } from 'react-icons/fi'
import { Container, IconButton } from "./styled";

export function MarkerTag({ title = 'Novo marcador', isActive = false }) {
  return (
    <Container
      isActive={isActive}
    >
      {title}
      <IconButton>
        {isActive ? <FiPlus size={20} /> : <FiX size={20} />}
      </IconButton>

    </Container>
  )
}