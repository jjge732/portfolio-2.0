import Container from '../components/container'
import Head from "../components/head"
import "../styles/global.css"

export default function App({ Component, pageProps }) {
    return <>
        <Head/>
        <Component {...pageProps}/>
    </>
}