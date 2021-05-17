import axios from 'axios'
import { useLoginUser } from 'hooks/useLoginUser'
import { useMessage } from 'hooks/useMessage'
import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { User } from 'types/api/user'

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const { setLoginUser } = useLoginUser()

  const login = useCallback(async (id: string) => {
    setLoading(true)
    try {
      const { data, data: { id: uid } } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)

      if (!data) {
        showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
        return
      }
      const isAdmin = uid === 10
      setLoginUser({ ...data, isAdmin })
      showMessage({ title: 'ログインしました', status: 'success' })
      history.push('/home')
    } catch {
      showMessage({ title: 'ログインできません', status: 'error' })
      setLoading(false)
    }
  }, [])
  return { loading, login }
}
