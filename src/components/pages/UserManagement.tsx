import { memo, FC, useEffect, useCallback } from 'react'
import { Center, Wrap, WrapItem } from '@chakra-ui/layout'
import { UserCard } from 'components/organisms/layout/user/UserCard'
import { useAllUsers } from 'hooks/useAllUsers'
import { Spinner } from '@chakra-ui/spinner'
import { useDisclosure } from '@chakra-ui/hooks'
import { UserDetailModal } from 'components/organisms/layout/user/UserDetailModal'
import { useSelectUser } from 'hooks/useSelectUser'
import { useLoginUser } from 'hooks/useLoginUser'

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()
  const { selectedUser, onSelectUser } = useSelectUser()
  const { loginUser } = useLoginUser()

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [users])

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap justify="center" p={{ base: 4, md: 10 }}>
          {users.map(({ id, username, name }) =>
            <WrapItem key={id}>
              <UserCard
                id={id}
                imageUrl="https://source.unsplash.com/random"
                userName={username}
                fullName={name}
                onClick={onClickUser}
              />
            </WrapItem>
          )}
        </Wrap>
      )}

      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
  )
})
