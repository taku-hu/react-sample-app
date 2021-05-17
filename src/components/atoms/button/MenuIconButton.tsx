import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { memo, FC } from 'react'

type Props = {
  onOpen: VoidFunction
}

export const MenuIconButton: FC<Props> = memo(({ onOpen }) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  )
})
