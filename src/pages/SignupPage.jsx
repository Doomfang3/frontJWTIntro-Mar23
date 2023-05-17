import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:5005/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (response.status === 201) {
      navigate('/login')
    }
  }

  return (
    <>
      <h1>Signup</h1>
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
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default SignupPage
