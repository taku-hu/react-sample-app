import { useCallback, useState } from 'react'
import { User } from 'types/api/user'

type Props = {
  id: number;
  users: User[];
  onOpen: VoidFunction;
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const targetUser = users.find((user) => user.id === id)
    setSelectedUser(targetUser!)
    onOpen()
  }, [])

  return { selectedUser, onSelectUser }
}
