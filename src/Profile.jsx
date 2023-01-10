import { useEffect, useState } from 'react'
import api from './server/api'
import Header from './components/Header/Header'
import styled from 'styled-components'

export const Button = styled.button`   
 display: flex;
 align-items: center ;
 justify-content: center ;
 width: 22rem;
 height: 35px;
 background: #004d4d;
 border-radius: 3px;
 padding-top: 20px;
 padding-bottom: 20px;
 margin-top: 30px;
 color: white;
 font-size: 14px;
 letter-spacing: 1px ;

` 


function Profile() {
  const [product, setProducts] = useState({})

  const ID = localStorage.getItem('Id')
  async function handleProfile() {
    const { data } = await api.get(`/profile/${ID}`)

    setProducts(data)

    console.log(product)
  }

  useEffect(() => {
    handleProfile()
  }, [])

  return (
    <>
      <Header />

      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <br />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'left',

          }}
        >
          <h2>{product.title}</h2>

          <img src={product.image} alt="imagem" width="450" />
          <h2>{product.desc}</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',


            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'left',
              }}
            >
              <h2>R$ {product.price}</h2>
              <h4>Quantidade</h4>

              <input type="number" placeholder="1" height="150"
                style={{
                  width: "70px", fontSize: "18px",
                  paddingLeft: '18px',
                  paddingRight: '10px',
                  paddingTop: '10px'
                  ,
                  paddingBottom: '10px'
                }} />
            </div>
            <Button>Adicionar ao Carrinho</Button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Profile
