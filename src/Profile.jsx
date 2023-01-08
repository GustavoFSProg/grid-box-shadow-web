import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from './server/api'
import Header from './components/Header/Header'


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
      <h1>
        PROFILE
      </h1>
      {/* <h3>{ID}</h3> */}
      <br />
      <br />
      <br />

      <p>
        <h2>
          {product.title}
        </h2>

      </p>
      <img src={product.image} alt="imagem" width="350" />
      <p>
        <h2>

          R$ {product.price}
        </h2>

      </p>
      </div>
    </>

  )
}

export default Profile
