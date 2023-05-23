import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:recipeId' element={<DetailsPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route
        path='/profile'
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App
