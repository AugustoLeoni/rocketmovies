import { Container } from "./styled";

export function Button({ icon: Icon, title, exclude, ...rest }) {
  return (
    <Container
      exclude={exclude}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}