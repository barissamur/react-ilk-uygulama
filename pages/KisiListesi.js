import { useState } from "react";

export default function KisiListesi() {
    const [adlar, setAdlar] = useState(["Ali", "Can", "Cem", "Ece"]);
    const [ad, setAd] = useState("abidik");

    const handleSubmit = (e) => {
        e.preventDefault();
        setAdlar([...adlar, ad]); // mevuct adların içine ad ekleyip listeyi birleştirmiş olduk
        setAd("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded p-4 my-2">
                <h2 className="text-2xl font-bold mt-2">Kişiler</h2>
                <div className="flex">
                    <input value={ad} onChange={(e) => setAd(e.target.value)} type="text" placeholder="Ad" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500" />
                    <button className="btn btn-blue ml-4">EKLE</button>
                </div>
                <ul className="list-disc ml-6">
                    {adlar.map((ad, i) =>
                        <li key={i}>
                            {ad}
                        </li>
                    )}
                </ul>
            </form>
        </div>
    );
}