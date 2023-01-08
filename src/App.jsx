import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'
import api from './server/api'
import { Container, Wrapper, Card, Imagem } from './styled-app'

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
      <Header />
      <h2 style={{ fontSize: '23px' }}>LOJA DE ELETRONICOS</h2>
      <br />
      <br />
      <Imagem src="https://picsum.photos/id/1/935/350" alt="imagem" />
      <Container>
      {products.map((item) => {
        return (
          <Card key={item.id} onClick={() => handleCard(item.id)}>
            <img src={item.image} width="170" alt="imagem" />
            <div style={{
              display: 'flex', flexDirection: 'column', width: '87%',
              // alignItems: 'flex-start',
              justifyContent: 'left'
            }}>

            <span style={{ marginTop: '13px', marginBottom: '7px' }}> {item.desc}</span>

              <span>R$ {item.price}</span>
            </div>

          </Card>
        )
      })}
      </Container>
    </Wrapper>

  )
}

export default App
