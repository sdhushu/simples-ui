import Badge, * as BadgeModule from './badge'
import Button, * as ButtonModule from './button'
import Card, * as CardModule from './card'
import Cell, * as CellModule from './cell'
import Chip, * as ChipModule from './chip'
import Dialog, * as DialogModule from './dialog'
import Divider, * as DividerModule from './divider'
import Image, * as ImageModule from './image'
import ImagePreview, * as ImagePreviewModule from './image-preview'
import Input, * as InputModule from './input'
import Loading, * as LoadingModule from './loading'
import Skeleton, * as SkeletonModule from './skeleton'
import Snackbar, * as SnackbarModule from './snackbar'
import Switch, * as SwitchModule from './switch'
import Tab, * as TabModule from './tab'
import TabItem, * as TabItemModule from './tab-item'
import Tabs, * as TabsModule from './tabs'
import TabsItems, * as TabsItemsModule from './tabs-items'

export const _BadgeComponent = BadgeModule._BadgeComponent || {}
export const _ButtonComponent = ButtonModule._ButtonComponent || {}
export const _CardComponent = CardModule._CardComponent || {}
export const _CellComponent = CellModule._CellComponent || {}
export const _ChipComponent = ChipModule._ChipComponent || {}
export const _DialogComponent = DialogModule._DialogComponent || {}
export const _DividerComponent = DividerModule._DividerComponent || {}
export const _ImageComponent = ImageModule._ImageComponent || {}
export const _ImagePreviewComponent = ImagePreviewModule._ImagePreviewComponent || {}
export const _InputComponent = InputModule._InputComponent || {}
export const _LoadingComponent = LoadingModule._LoadingComponent || {}
export const _SkeletonComponent = SkeletonModule._SkeletonComponent || {}
export const _SnackbarComponent = SnackbarModule._SnackbarComponent || {}
export const _SwitchComponent = SwitchModule._SwitchComponent || {}
export const _TabComponent = TabModule._TabComponent || {}
export const _TabItemComponent = TabItemModule._TabItemComponent || {}
export const _TabsComponent = TabsModule._TabsComponent || {}
export const _TabsItemsComponent = TabsItemsModule._TabsItemsComponent || {}


function install(app) {
  Badge.install && app.use(Badge)
  Button.install && app.use(Button)
  Card.install && app.use(Card)
  Cell.install && app.use(Cell)
  Chip.install && app.use(Chip)
  Dialog.install && app.use(Dialog)
  Divider.install && app.use(Divider)
  Image.install && app.use(Image)
  ImagePreview.install && app.use(ImagePreview)
  Input.install && app.use(Input)
  Loading.install && app.use(Loading)
  Skeleton.install && app.use(Skeleton)
  Snackbar.install && app.use(Snackbar)
  Switch.install && app.use(Switch)
  Tab.install && app.use(Tab)
  TabItem.install && app.use(TabItem)
  Tabs.install && app.use(Tabs)
  TabsItems.install && app.use(TabsItems)
}

export {
  install,
  Badge,
  Button,
  Card,
  Cell,
  Chip,
  Dialog,
  Divider,
  Image,
  ImagePreview,
  Input,
  Loading,
  Skeleton,
  Snackbar,
  Switch,
  Tab,
  TabItem,
  Tabs,
  TabsItems
}

export default {
  install,
  Badge,
  Button,
  Card,
  Cell,
  Chip,
  Dialog,
  Divider,
  Image,
  ImagePreview,
  Input,
  Loading,
  Skeleton,
  Snackbar,
  Switch,
  Tab,
  TabItem,
  Tabs,
  TabsItems
}
