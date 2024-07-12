import PropTypes from 'prop-types'
import { useState } from 'react'

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].large)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handleMainImageClick = () => {
    setIsLightboxOpen(true)
  }

  const handleSelectedImg = (image) => {
    setSelectedImage(image.large) // Actualizamos solo la imagen grande seleccionada
  }

  const handleNextImage = () => {
    const currentIndex = images.findIndex((img) => img.large === selectedImage)
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex].large)
  }

  const handlePreviousImage = () => {
    const currentIndex = images.findIndex((img) => img.large === selectedImage)
    const previousIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[previousIndex].large)
  }

  return (
    <>
      <section className='flex flex-col gap-4 md:max-w-md'>
        <div className='relative'>
          <img
            src={selectedImage}
            alt={selectedImage.alt}
            onClick={handleMainImageClick}
            className='cursor-pointer md:rounded-md object-cover '
          />
          {/* Botones de navegación visibles en dispositivos pequeños */}
          <div className='flex md:hidden justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4'>
            <button
              className='bg-white px-4 py-2 text-2xl text-orange-500 font-bold  rounded-full hover:bg-gray-100'
              onClick={handlePreviousImage}
            >
              ≺
            </button>
            <button
              className='bg-white px-4 py-2 text-2xl  text-orange-500 font-bold rounded-full hover:bg-gray-100'
              onClick={handleNextImage}
            >
              ≻
            </button>
          </div>
        </div>
        <div className='hidden md:flex justify-between'>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.thumbnail}
              alt={image.alt}
              className={`cursor-pointer w-24 rounded-md border-2 ${
                image.large === selectedImage
                  ? 'border-orange-400 opacity-50'
                  : 'border-transparent hover:border-orange-400'
              }`}
              onClick={() => handleSelectedImg(image)}
            />
          ))}
        </div>
      </section>

      {isLightboxOpen && (
        <div className='fixed hidden top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 md:flex items-center justify-center'>
          <div className='p-8 max-w-2xl relative flex flex-col'>
            <div className='flex justify-center'>
              <img
                src={selectedImage}
                alt={selectedImage.alt}
                className='rounded-md max-w-96 object-cover'
              />
            </div>
            <div className='flex justify-between mt-4'>
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.thumbnail}
                  alt={image.alt}
                  className={`cursor-pointer rounded-md w-20 h-20 object-cover border-transparent ${
                    image.large === selectedImage
                      ? 'border-orange-500 border-2 '
                      : 'hover:border-orange-400 border-2 '
                  }`}
                  onClick={() => handleSelectedImg(image)}
                />
              ))}
            </div>
            <div className='absolute -top-6 right-3 mt-4 font-bold'>
              <button
                className='px-4 py-2 rounded-md text-orange-500 text-2xl'
                onClick={() => setIsLightboxOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className='flex w-full absolute justify-between left-0 top-48 items-center '>
              <button
                className='bg-white px-4 py-2 rounded-full  text-2xl  text-orange-500 font-bold hover:bg-gray-400 text-center'
                onClick={handlePreviousImage}
              >
                ≺
              </button>
              <button
                className='bg-white px-4 py-2 rounded-full  text-2xl  text-orange-500 font-bold hover:bg-gray-400 text-center'
                onClick={handleNextImage}
              >
                ≻
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      large: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Gallery
