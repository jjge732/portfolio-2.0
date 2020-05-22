import cn from 'classnames'
import styles from '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} 
        // className={cn({
        //     [styles.color]: pageProps === 'color',
        //     [styles.bw]: pageProps === 'bw'
        // })}
    className={styles.container}/>
}