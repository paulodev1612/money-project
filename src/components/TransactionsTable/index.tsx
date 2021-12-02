import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export const TransactionsTable = () => {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site 01</td>
            <td className="deposit">R$12.000,00</td>
            <td>Jobs</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000,00</td>
            <td>Gastos essenciais</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
