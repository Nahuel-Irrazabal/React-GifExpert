import { useState } from 'react'
import { AddCategory, GifGrid } from './Components'//esto apunda al index

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Naruto' ])

  const onAddCategory = ( newCategory) => {
    if ( categories.includes(newCategory) ) return
    setCategories( [ newCategory, ...categories ] )
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      { 
        categories.map( (category) => (
          <GifGrid key={category} category={category}/>
        ))
      }
    </>
  )
}
