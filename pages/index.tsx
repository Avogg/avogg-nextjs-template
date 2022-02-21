import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-montserrat">
      <Header title={"Em breve"} />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img src="/logo-black.png" className="w-32" />

        <p className="mt-10 font-semibold text-4xl">Estaremos operacionais <span className="text-company">em breve</span>!</p>
        <p className="mt-12 text-xl">A CMFlores está a <span className="text-company">expandir</span> o seu negócio para a <span className="text-company italic">web</span>! Assim a nossa equipa vai ter uma maior presença em todo o país e os clientes, vão poder fazer as suas encomendas de forma mais <span className="text-company">simplificada</span> e <span className="text-company">eficaz</span>.</p>
        <p className="mt-5">Não se esqueça que ainda nos pode ligar para <a href="tel:+351967764449" className="text-company">+351 967 764 449</a> para fazer as suas encomendas ou saber mais sobre nós!</p>
      </main>

      <footer>
        <p className="text-sm mb-5">Made with 💜 by Avogg</p>
      </footer>
    </div>
  )
}
