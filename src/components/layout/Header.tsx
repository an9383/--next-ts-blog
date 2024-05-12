import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <h1>
                <Link href="/">logo</Link>
            </h1>
            <nav>
                <Link href="/about">about</Link>
                <Link href="/post">post</Link>
            </nav>
        </header>
    )
}

export default Header
