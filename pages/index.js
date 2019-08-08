import Link from 'next/link';
import Head from 'next/head';

export default () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <h1>Olá senhores</h1>
        <Link href="/projects">
          <a>Project Page</a>
        </Link>
    </div>
  );
}
