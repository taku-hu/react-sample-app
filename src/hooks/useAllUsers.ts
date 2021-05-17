import axios from 'axios'
import { useMessage } from 'hooks/useMessage'
import { useCallback, useState } from 'react'
import { User } from 'types/api/user'

export const useAllUsers = () => {
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const getUsers = useCallback(async () => {
    setLoading(true)

    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(data)
    } catch {
      showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' })
    }

    setLoading(false)
  }, [])

  return { loading, users, getUsers }
}
