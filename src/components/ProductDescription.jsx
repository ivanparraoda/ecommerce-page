import PropTypes from 'prop-types'
import { useState } from 'react'

const ProductDescription = ({ handleAddToCart, setCount }) => {
  const [localCount, setLocalCount] = useState(0)

  const handleAdd = () => {
    setLocalCount(localCount + 1)
  }

  const handleSubtract = () => {
    localCount > 0 && setLocalCount(localCount - 1)
  }

  const addToCart = () => {
    handleAddToCart(1, localCount)
    setLocalCount(0)
    setCount((prev) => prev + localCount)
  }
  return (
    <div className='flex flex-col gap-4 justify-center p-4 md:p-0 '>
      <p className='text-xs font-bold text-gray-600'>SNEAKER COMPANY</p>
      <h1 className='text-4xl font-bold'>Fall Limited Edition Sneakers</h1>
      <p className='text-gray-600 mt-4 text-sm'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className='flex align-middle items-center justify-between md:items-stretch md:justify-start md:flex-col'>
        <div className='flex gap-3 items-center align-middle'>
          <h2 className='font-bold text-3xl md:text-xl pb-1'>$125.00</h2>
          <span className='bg-black text-white rounded-md text-sm text-center h-fit w-10'>
            50%
          </span>
        </div>
        <p className='text-gray-500 line-through font-bold text-sm'>$250.00</p>
      </div>

      <div className='flex md:flex-row items-center gap-4 flex-col'>
        <div className='flex  items-center w-full md:w-auto'>
          <button
            onClick={handleSubtract}
            className='bg-gray-100 md:w-10 w-1/3 h-10 flex justify-center items-center rounded-r-md'
          >
            <img src='/public/media/images/icon-minus.svg' alt='minus' />
          </button>

          <span className='bg-gray-100 md:w-10 w-1/3 h-10 flex justify-center items-center border-t border-b border-transparent'>
            {localCount}
          </span>

          <button
            onClick={handleAdd}
            className='bg-gray-100 md:w-10 w-1/3 h-10 flex justify-center items-center rounded-l-md'
          >
            <img src='/public/media/images/icon-plus.svg' alt='add' />
          </button>
        </div>
        <button
          onClick={addToCart}
          className='bg-orange-500 hover:bg-orange-300 w-full md:w-auto h-14  md:h-auto text-black text-sm font-semibold px-8 py-2 rounded-md flex gap-4 items-center text-center justify-center md:justify-start'
        >
          <img
            src='/public/media/images/icon-cart.svg'
            alt='add to cart'
            className='filter brightness-0 w-4'
          />
          Add to cart
        </button>
      </div>
    </div>
  )
}

ProductDescription.propTypes = {
  handleAddToCart: PropTypes.func,
  setCount: PropTypes.func
}

export default ProductDescription
