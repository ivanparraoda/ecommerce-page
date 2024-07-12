import PropTypes from 'prop-types'

const CartCard = ({ cart, handleDeleteItem }) => {
  return (
    <div className='flex flex-col gap-5 p-4 md:w-80  m-2 md:m-0 bg-white shadow-2xl rounded-md '>
      <p className='font-bold mb-2'>Cart</p>
      {cart.length === 0 ? (
        <p className='text-gray-600 text-center flex-grow mb-8 '>
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img
                  src={item.image} // Assuming each item in cart has an 'image' property
                  alt='product image'
                  className='w-10 h-10 rounded-md object-cover'
                />
                <div>
                  <p className='text-gray-600 text-sm'>{item.name}</p>
                  <div>
                    <p className='text-gray-600 text-sm'>
                      ${item.price} x {item.quantity}{' '}
                      <span className='font-bold'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <img
                src='/public/media/images/icon-delete.svg'
                alt='delete item'
                className='w-3 h-4 cursor-pointer'
                onClick={() => handleDeleteItem(item.id)}
              />
            </div>
          ))}
          <button className='bg-orange-500 text-black font-bold text-sm rounded-md py-2 w-full h-14 md:h-auto mb-2'>
            Checkout
          </button>
        </>
      )}
    </div>
  )
}

CartCard.propTypes = {
  cart: PropTypes.array.isRequired,
  handleDeleteItem: PropTypes.func.isRequired
}

export default CartCard
