import Head from 'next/head';

export default function Header(title?: string) {
    return (
        <Head>
            <title>CMFlores {(title.title) ? "| " + title.title : ""}</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        </Head>
    );
}
