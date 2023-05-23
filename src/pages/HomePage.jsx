import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/recipes`)
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
