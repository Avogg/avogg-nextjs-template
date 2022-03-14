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

        <p className="text-4xl font-semibold mt-20">Onde nos encontrar</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24040.73653853978!2d-8.645381264123532!3d41.132516082662676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x271a43df3be3d102!2sCarlos%20Melo%20-%20Com%C3%A9rcio%20de%20Flores%2C%20Lda!5e0!3m2!1sen!2spt!4v1647281421847!5m2!1sen!2spt" height="450" className="border-0 w-screen md:w-full active:text-company mt-10 mb-10" allowFullScreen="" loading="lazy"></iframe>
      </main>

      <footer>
        <p className="text-sm mb-5">Made with 💜 by Avogg</p>
      </footer>
    </div>
  )
}
