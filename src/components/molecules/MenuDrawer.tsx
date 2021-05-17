import { memo, FC } from 'react'
import { Drawer, DrawerContent, DrawerOverlay, DrawerBody } from '@chakra-ui/modal'
import { Button } from '@chakra-ui/button'

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  onClickHome: VoidFunction;
  onClickUserManagement: VoidFunction;
  onClickSetting: VoidFunction;
}

export const MenuDrawer: FC<Props> = memo(({ isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting }) => {
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
