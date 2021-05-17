import { memo, FC, useState, useEffect, ChangeEvent } from 'react'
import { Stack } from '@chakra-ui/layout'

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { User } from 'types/api/user'
import { PrimaryButton } from 'components/atoms/button/PrimaryButton'

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: VoidFunction
}

export const UserDetailModal: FC<Props> = memo(({ user, isOpen, isAdmin = false, onClose }) => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onClickUpdate = () => alert('updated')
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ユーザー情報</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6} mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUsername} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
            </FormControl>
            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})
