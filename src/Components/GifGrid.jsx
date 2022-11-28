import { GifCard } from './GifCard'
import { useFetchGift } from './Hooks/useFetchGift'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGift( category )

  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && (<h5>Cargando...</h5>)
      }
      <div className='card-grid'>
        {
          images.map( ( image ) => (
            <GifCard 
              key={image.id}
              {...image}
            /> 
          ))
        }
      </div>
    </>
  )
}
