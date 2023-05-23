import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    const response = await fetch('http://localhost:5005/api/recipes')
    const parsed = await response.json()
    setRecipes(parsed)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <>
      <h1>All Recipes</h1>
      {recipes.map(recipe => (
        <Link to={`${recipe._id}`}>{recipe.title}</Link>
      ))}
    </>
  )
}

export default HomePage
