import Head from 'next/head'
import Header from '/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-montserrat">
      <Header title="Welcome" />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img src="/logo-min.png" className="w-32 animate-bounce" />

        <p className="mt-10 font-semibold text-4xl">The <span className="text-avogg">Avogg</span> template</p>
        <p className="mt-12 text-xl">This template is already equipped with <a href="https://tailwindcss.com" target="_blank" className="text-avogg">TailwindCSS</a> and uses the <a href="https://www.typescriptlang.org" target="_blank" className="text-avogg">Typescript</a> syntax.</p>
        <p className="mt-5 text-xl">Remember to follow the code guidelines and create a new future!</p>
        <p className="mt-5 text-xl">Also, instead of <a href="https://npmjs.org" target="_blank" className="text-avogg">npm</a> use <a href="https://yarnpkg.com/" target="_blank" className="text-avogg">Yarn</a></p>
      </main>

      <footer>
        <p className="text-sm mb-5">Made with 💜 by Avogg</p>
      </footer>
    </div>
  )
}
