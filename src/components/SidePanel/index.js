import React from 'react'
import NavItem from './NavItem'
import { styles } from './styles/sidePanel'

const SidePanel = () => {
  const navArray = [
    {
      icon: 'fullscreen',
      link: 'Overview',
      active: false
    },
    {
      icon: 'laptop',
      link: 'experiences',
      active: false
    },
    {
      icon: 'team',
      link: 'Segments',
      active: true
    },
    {
      icon: 'area-chart',
      link: 'Insights',
      active: false
    },
    {
      icon: 'cloud',
      link: 'Visitor Cloud',
      active: false
    }
  ]

  const renderNav = arr =>
    arr.map(el => (
      <NavItem key={el.icon} icon={el.icon} link={el.link} active={el.active} />
    ))

  return <div style={styles.wrapper}>{renderNav(navArray)}</div>
}

export default SidePanel
