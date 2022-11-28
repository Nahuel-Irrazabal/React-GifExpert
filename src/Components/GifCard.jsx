import PropTypes from 'prop-types'

export const GifCard = ({title, url}) => {
  return (
    <div className="card">
      <h6>{title}</h6>
      <img src={ url } alt={ title }/>
    </div>
  )
}

/*  yarn add
  añadir proptypes
  titulo y url obligatorio

  evaluar un snapshot
  */

GifCard.protoTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired
}