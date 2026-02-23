import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="A decentralized treasury-backed currency protocol with the aim to create economic-stability and consistency using protocol-controlled market dynamics"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload" as="image" href="/mailgo.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
