import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/links-utils.module.css'

export default function Links() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>John Eastwood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content">
        <h1 className="title">
          Thanks for visiting!
        </h1>
        <div className="info">
            This site will be updated regularly, check back soon!
        </div>
        <div className="grid">
            <a className="card" href="https://github.com/jjge732">
              <img src="/github-icon.png" height="80px"/>
            </a>
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
            opacity: .85;
            font-size: 45px;
            text-shadow: 1px 1px 2px #40140D;
            text-decoration: none;
        }

        .title, .info{
            margin: 0;
            color: #C97BA3;
            line-height: 1.15;
            font-size: 4rem;
            text-align: center;
        }

        .info {
          line-height: 1.5;
          font-size: 1.5rem;
          width: 45%;
          margin-top: 3rem;
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

        .card i {
          opacity: .9;
          color: #A59D9D;
          font-size: 45px;
        }

        .card i:hover,
        .card i:focus,
        .card i:active {
          color: #69787A;
          text-shadow: 2px 2px 6px #7A4B63;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
