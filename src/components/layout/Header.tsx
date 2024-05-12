import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">logo</Link>
            </h1>
            <nav>
                <Link href="/about">about</Link>
                <Link href="/post">post</Link>
            </nav>
            <nav>
                <Link href="/">login</Link>
                <Link href="/">회원가입</Link>
            </nav>
        </header>
    )
}

export default Header
