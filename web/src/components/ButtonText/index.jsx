import { Container } from "./styled";

export function ButtonText({ icon: Icon, title }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}