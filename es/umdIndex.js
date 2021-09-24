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

import './badge/style'
import './button/style'
import './card/style'
import './cell/style'
import './chip/style'
import './dialog/style'
import './divider/style'
import './image/style'
import './image-preview/style'
import './input/style'
import './loading/style'
import './skeleton/style'
import './snackbar/style'
import './switch/style'
import './tab/style'
import './tab-item/style'
import './tabs/style'
import './tabs-items/style'


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
