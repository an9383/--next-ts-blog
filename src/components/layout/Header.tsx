import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>
        <Link href="/">logo</Link>
      </h1>
      <nav>
        <Link href="/about">about</Link>
        <Link href="/post">post</Link>
      </nav>
    </div>
  )
}

export default Header
