import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo do Money Project" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}
