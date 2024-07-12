import Gallery from './components/Gallery'
import NavBar from './components/navbar/NavBar'
import ProductDescription from './components/ProductDescription'
import { useState } from 'react'
import CartCard from './components/CartCard'

const images = [
  {
    id: 1,
    large: '/media/images/image-product-1.jpg',
    thumbnail: '/media/images/image-product-1-thumbnail.jpg',
    alt: 'img1'
  },
  {
    id: 2,
    large: '/media/images/image-product-2.jpg',
    thumbnail: '/media/images/image-product-2-thumbnail.jpg',
    alt: 'img2'
  },
  {
    id: 3,
    large: '/media/images/image-product-3.jpg',
    thumbnail: '/media/images/image-product-3-thumbnail.jpg',
    alt: 'img3'
  },
  {
    id: 4,
    large: '/media/images/image-product-4.jpg',
    thumbnail: '/media/images/image-product-4-thumbnail.jpg',
    alt: 'img4'
  }
]

function App() {
  const [count, setCount] = useState(0)
  const [isComponentVisible, setIsComponentVisible] = useState(false)
  const [cart, setCart] = useState([])

  const handleAddToCart = (id, localCount) => {
    if (localCount > 0) {
      const item = cart.find((item) => item.id === id)
      if (item) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + localCount
            }
          }
          return item
        })
        setCart(newCart)
      } else {
        setCart([
          ...cart,
          {
            id,
            name: 'Fall Limited Edition Sneakers',
            price: 125.0,
            quantity: localCount,
            image: '/media/images/image-product-1-thumbnail.jpg'
          }
        ])
      }
    }
  }

  const handleDeleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    setCount(0)
  }

  return (
    <>
      <div className='relative z-10'>
        <NavBar setIsComponentVisible={setIsComponentVisible} count={count} />
        {isComponentVisible && (
          <div className='absolute top-20 right-0 left-0 md:right-0 md:left-3/4 md:-translate-x-16 z-50'>
            <CartCard cart={cart} handleDeleteItem={handleDeleteItem} />
          </div>
        )}
      </div>
      <main className='flex justify-center'>
        <div className='flex flex-col md:flex-row w-full md:w-10/12 gap-4 md:gap-24 md:p-10'>
          <Gallery images={images} />
          <ProductDescription
            handleAddToCart={handleAddToCart}
            setCount={setCount}
          />
        </div>
      </main>
    </>
  )
}

export default App
