import { memo, FC } from 'react'
import { Box, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

export const UserCard: FC<Props> = memo(({ id, imageUrl, userName, fullName, onClick }) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'ponter', opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  )
})
