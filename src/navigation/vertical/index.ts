// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Overview',
      path: '/dashboard/Overview',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Pricing',
      path: '/pricing',
      icon: 'tabler:mail'
    },
    {
      title: 'Consignment',
      path: '/conssigment/All',
      icon: 'tabler:mail'
    },
    {
      title: 'Return',
      path: '/return/All',
      icon: 'tabler:mail'
    },
    {
      title: 'NDR',
      path: '/NDR/ActionRequired',
      icon: 'tabler:mail'
    },
    {
      title: 'Weight Management',
      path: '/weightmanagement/ActionRequired',
      icon: 'tabler:mail'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    }
  ]
}

export default navigation
