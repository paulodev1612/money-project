import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo do Money Project" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
