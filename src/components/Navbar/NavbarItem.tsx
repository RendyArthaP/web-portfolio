import Link from 'next/link'
import React, {FC} from 'react'

interface NavbarItemProps {
  router: string;
  title: string;
  classNameInactive: string;
  classNameActive: string;
  active: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({
  router,
  title,
  classNameInactive,
  classNameActive,
  active
}) => {
  return (
    <Link href={router}>
      <span className={active ? classNameActive : classNameInactive}>{title}</span>
    </Link>
  )
}

export default NavbarItem
