import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Divider, Stack } from '@chakra-ui/layout'
import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { useAuth } from 'hooks/useAuth'
import { memo, FC, useState, ChangeEvent } from 'react'

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState('')
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onCLickLogin = () => login(userId)

  const { loading, login } = useAuth()
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />

          <PrimaryButton disabled={!userId} loading={loading} onClick={onCLickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
