import Head from 'next/head';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>React App - Pokemon observer</title>
        <meta name="description" content="Training application within RSSchool 2023" />
      </Head>

      <div id="root">{children}</div>
    </>
  );
}

export default RootLayout;
