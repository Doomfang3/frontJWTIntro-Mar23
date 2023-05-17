import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const { setToken } = useContext(SessionContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:5005/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (response.status === 200) {
      const tokenFromResponse = await response.json()
      setToken(tokenFromResponse)
      navigate('/profile')
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Link to='/profile'>Profile</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type='email'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}

export default LoginPage
