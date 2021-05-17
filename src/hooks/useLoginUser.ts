import { LoginUserContext } from 'providers/LoginUserProvider'
import { useContext } from 'react'

export const useLoginUser = () => useContext(LoginUserContext)
