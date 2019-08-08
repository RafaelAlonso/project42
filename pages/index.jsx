import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/mainLayout';

export default () => {
  return (
    <div>
      {/*
        Mesma coisa que <head></head>
        Faz a substituição (não fica dentro de uma div)
       */}
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/*
        Layout básico comum a todas as páginas,
        refatorado para um component
       */}
      <Layout>
        <h1>Olá senhores</h1>
      </Layout>

    </div>
  );
}
