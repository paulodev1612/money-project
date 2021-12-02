import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar uma nova transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">cadastrar</button>
      </Container>
    </Modal>
  )
}
