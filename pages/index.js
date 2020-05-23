import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>John Eastwood</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/097c3e5b4d.js" crossOrigin="anonymous"></script>
      </Head>

      <main className="content">
        <h1 className="title">
          Welcome
        </h1>
        <div className="grid">
          <Link href="/links">
            <a className="card">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </a>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #CEF2ED;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
            opacity: .85;
            font-size: 45px;
            text-decoration: none;
        }

        .title {
          margin: 0;
          text-shadow: 1px 1px 12px #69787A;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          padding: 0.75rem;
          font-size: 1.1rem;
          font-size: 45px;
          color: #A59D9D;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        a.card {
          opacity: .9;
          font-size: 75px;
        }

        a.card:hover,
        a.card:focus,
        a.card:active {
          color: #69787A;
          text-shadow: 2px 2px 6px #7A4B63;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
