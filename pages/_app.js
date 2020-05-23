import styles from '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} 
        // className={cn({
        //     [styles.color]: pageProps === 'color',
        //     [styles.bw]: pageProps === 'bw'
        // })}
    className={styles.container}>
        <script src="https://kit.fontawesome.com/097c3e5b4d.js" crossorigin="anonymous"></script>
    </Component>
}