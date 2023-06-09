/* import { useLocalStorage } from '@mantine/hooks' */
import { createContext, useEffect, useState } from 'react'

export const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  // const [token, setToken] = useLocalStorage({ key: 'authToken' })
  const [token, setToken] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const verifyToken = async currentToken => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
    if (response.status === 200) {
      const parsed = await response.json()
      setToken(currentToken)
      setIsLoggedIn(true)
      console.log(parsed)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    const localToken = localStorage.getItem('authToken')
    if (localToken) {
      verifyToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token)
      setIsLoading(false)
    } else {
      localStorage.removeItem('authToken')
    }
  }, [token])

  const logout = () => {
    setToken()
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
  }

  return (
    <SessionContext.Provider value={{ token, setToken, isLoggedIn, isLoading, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider
