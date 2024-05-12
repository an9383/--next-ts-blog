import { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import app from '@/firebase/firebase' // Firebase SDK 구성을 위한 설정 파일 import

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
