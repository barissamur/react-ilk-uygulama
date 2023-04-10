import Gordum from "./Gordum";
import OzluSoz from "./OzluSoz";

// react bileşeni yazdık
function Home() {

  let ad = "Ali";
  let mevsimler = ["İlkbahar", "Yaz", "Sonbahar", "Kış"];

  return (
    <div>
      {/* normalde buraya html yazamayız JSX sayesinde yazıyoruz */}
      <h1 className="text-3xl font-bold">Merhaba {ad}</h1>
      <h2>İlk Next.js sayfanız</h2>
      <OzluSoz />
      <h2 className="mt-4 text-2xl font-bold mt-2">Mevsimler</h2>
      <ul className="list-disc ml-6 mt-4">
        {mevsimler.map((x) => <li>{x}</li>)}
      </ul>
      <h2 className="text-2xl font-bold mt-2">Gördüğüm şeyler</h2>
      <Gordum deger="Arnavutluk ülkesindeki İskodra şehrini" />
      <Gordum deger="Nükleer reaktör" />
      <Gordum deger="kocaman bir örümcek" />
      <Gordum deger="sondaj makinesi" />
      <ul className="list-disc ml-6"></ul>
    </div>
  );
}

// başkası Home fonksiyonunu import edebilsin diye export et
export default Home;