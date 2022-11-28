
export const GiftCard = ({title, url}) => {
  return (
    <div className="card">
      <h6>{title}</h6>
      <img src={ url } alt={ title }/>
    </div>
  )
}
