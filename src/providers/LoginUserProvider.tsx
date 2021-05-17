import { createContext, Dispatch, SetStateAction, FC, useState } from 'react'
import { User } from 'types/api/user'

type LoginUser = User & { isAdmin: boolean }

type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

const LoginUserProvider: FC = ({ children }) => {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}

export { LoginUserContext, LoginUserProvider }
export type { LoginUserContextType }
