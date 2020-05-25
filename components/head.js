import DefaultHead from 'next/head'

/**
 * Represents the next Head element that loads the favicon 
 *    and fontawesome icons
 * 
 * @component
 */
export default function Head() {
    return <DefaultHead>
        <title>John Eastwood</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/097c3e5b4d.js" crossOrigin="anonymous" sameSite="None"/>
  </DefaultHead>
}