import cn from 'classnames'

export default function Greeting({ Component, pageProps }) {
    return <Component {...pageProps}
        className={cn({
            [styles.color]: pageProps === 'color',
            [styles.bw]: pageProps === 'bw'
        })}
    />
}