import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'

const ProfilePage = () => {
  const { logout } = useContext(SessionContext)

  return (
    <>
      <h1>Profile</h1>
      <button type='button' onClick={logout}>
        Log Out
      </button>
    </>
  )
}

export default ProfilePage
