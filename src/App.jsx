import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './server/api'
import { Container, Wrapper, Card } from './styled-app'

function App() {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  function handleCard(id) {
    navigate('/profile')
    localStorage.setItem('Id', id)
  }


  async function handleProducts() {
    const { data } = await api.get('/get-products')

    setProducts(data)
  }

  useEffect(() => {
    handleProducts()
  }, [])

  console.log(products)

  return (
    <Wrapper>
      <h2 style={{fontSize: '36px'}}>Produtos</h2>
      <br />
      <br />
    <Container>
      {products.map((item) => {
        return (
          <Card key={item.id} onClick={() => handleCard(item.id)}>
            <p>Titulo: {item.title}</p>
            <img src={item.image} width="190" alt="imagem" />

            <p>Preço: {item.price}</p>
          </Card>
        )
      })}
      </Container>
    </Wrapper>

  )
}

export default App
