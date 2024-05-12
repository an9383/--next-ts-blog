// import { AppProps } from 'next/app'
// import Layout from '@/components/layout/Layout'
// import app from '@/firebase/firebase' // Firebase SDK 구성을 위한 설정 파일 import

// function MyApp({ Component, pageProps }: AppProps) {
//     return (
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     )
// }

// export default MyApp

import { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import { AuthProvider } from '@/firebase/auth'
import {auth} from '@/firebase/firebase' // Firebase SDK 구성을 위한 설정 파일 import
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp