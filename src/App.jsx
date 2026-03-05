import { useState } from "react";

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Jurassic Park Edition",
    precio: 25,
    categoria: "Movies",
    img: "https://via.placeholder.com/400x500",
  },
  {
    id: 2,
    nombre: "Anime Streetwear",
    precio: 22,
    categoria: "Anime",
    img: "https://via.placeholder.com/400x500",
  },
];

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [seleccion, setSeleccion] = useState({
    talla: "M",
    corte: "Regular",
    material: "Algodón",
    color: "Negro",
  });

  const enviarPedido = () => {
    const texto = carrito
      .map((i) => `- ${i.nombre} (${i.talla}, ${i.corte}, ${i.color})`)
      .join("\n");
    window.location.href = `mailto:jason@ejemplo.com?subject=Pedido Sublimania&body=${encodeURIComponent("Mi pedido:\n" + texto)}`;
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 font-sans">
      <header className="border-b-2 border-black pb-4 mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-black italic tracking-tighter">
          SUBLIMANIA
        </h1>
        <span className="font-bold">CARRITO ({carrito.length})</span>
      </header>

      <main className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center text-gray-500 italic">
          [ Foto del Producto ]
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-black uppercase italic">
            {PRODUCTOS[0].nombre}
          </h2>
          <p className="text-2xl font-bold">$ {PRODUCTOS[0].precio}.00</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase">Talla</label>
              <select
                className="w-full border-2 border-black p-2 mt-1"
                onChange={(e) =>
                  setSeleccion({ ...seleccion, talla: e.target.value })
                }
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold uppercase">Corte</label>
              <select
                className="w-full border-2 border-black p-2 mt-1"
                onChange={(e) =>
                  setSeleccion({ ...seleccion, corte: e.target.value })
                }
              >
                <option>Regular</option>
                <option>Oversized</option>
                <option>Slim Fit</option>
              </select>
            </div>
          </div>

          <button
            onClick={() =>
              setCarrito([...carrito, { ...PRODUCTOS[0], ...seleccion }])
            }
            className="w-full bg-black text-white py-4 font-black hover:bg-gray-800 transition"
          >
            AÑADIR AL CARRITO
          </button>

          {carrito.length > 0 && (
            <button
              onClick={enviarPedido}
              className="w-full border-2 border-black py-4 font-black text-sm"
            >
              FINALIZAR Y ENVIAR POR CORREO
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
