import { useEffect, useState } from 'react'
import api from './server/api'
import Header from './components/Header/Header'
import styled from 'styled-components'

export const Button = styled.button`   
 display: flex;
 align-items: center ;
 justify-content: center ;
 width: 15rem;
 height: 35px;
 background: #004d4d;
 border-radius: 3px;
 padding-top: 20px;
 padding-bottom: 20px;
 margin-top: 70px;
 color: white;
 font-size: 14px;
 letter-spacing: 1px ;
 margin-left: 161px;

`


const preco = 100

function Cart() {
  const [product, setProducts] = useState({})
  const [change, setChange] = useState('')
  const [total, setTotal] = useState('')

  const ID = localStorage.getItem('Id')
  async function handleProfile() {
    const { data } = await api.get(`/profile/${ID}`)


    setProducts(data)

    console.log(product)
  }

  function handleInput(price) {
    console.log(change)

    setTotal(change * price)


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
          // justifyContent: 'center',
          marginTop: '30px'
        }}
      >
        <h2 style={{ marginBottom: '70px' }}>Meu Carrinho</h2>
        <hr style={{
          color: 'green',
          marginBottom: '30px',
          width: '50%', height: '1px'
        }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'top',

          }}
        >

          <img src={product.image} alt="imagem" width="110" />
          <div style={{
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '23px',

            width: '100%'
          }}>

            <span>{product.title}</span>

            <span>{product.desc}</span>

            <span>R$ {product.price}</span>

          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',


            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >

              <input onMouseLeave={() => handleInput(product.price)}
                type="number"
                onChange={(e) => setChange(e.target.value)} placeholder="1" height="150"
                style={{
                  width: "50px", fontSize: "14px",
                  paddingLeft: '18px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginLeft: '70px',
                }} />
              <span style={{ marginLeft: '20px', fontSize: '24px' }}>R$ {total}</span>

            </div>
            {/* <hr style={{
              color: 'green',
              marginBottom: '30px',
              width: '50%', height: '1px'
            }} /> */}


            <Button onClick={() => alert("Clicou")}>Checkout</Button>
          </div>

        </div>

      </div >
    </>
  )
}

export default Cart
