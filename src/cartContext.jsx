import { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})

export function CartProvider({ children }) {

  const [cart, setCart] = useState(
    [
      // {
      //   id: "001",
      //   title: "Meu Titulo",
      //   imagem: "Imagem",
      //   desc: "DESC",
      //   price: "100"
      // },

      // {
      //   id: "002",
      //   title: "Meu Titulo",
      //   imagem: "Imagem",
      //   desc: "DESC",
      //   price: "100"
      // },
      // {
      //   id: "003",
      //   title: "Meu Titulo",
      //   imagem: "Imagem",
      //   desc: "DESC",
      //   price: "100"
      // }
    ]
  )

  // id: "002",
  // title: "Meu Titulo",
  // imagem: "Imagem",
  // desc: "DESC",
  // price: "100"

  // const [image, setImage] = useState("prod1")
  // const [title, setTitle] = useState("prod1")
  // const [desc, setDesc] = useState("prod1")

  return (
    <CartContext.Provider value={{ cart, setCart }} >
      {children}
    </CartContext.Provider>
  )
}
