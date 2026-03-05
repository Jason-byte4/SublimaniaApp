import { useState } from "react";

const PRODUCTO_EJEMPLO = {
  id: 1,
  nombre: "Jurassic Park Beware",
  precio: 25.0,
  imagen: "https://via.placeholder.com/400x500", // Aquí pondrás tus fotos
  categorias: ["Streetwear", "Movies"],
};

function App() {
  const [pedido, setPedido] = useState({
    talla: "M",
    corte: "Regular",
    material: "Algodón",
    color: "Negro",
  });

  const enviarPorCorreo = () => {
    // Aquí es donde luego conectaremos EmailJS
    const mensaje = `Nuevo Pedido:
    Producto: ${PRODUCTO_EJEMPLO.nombre}
    Talla: ${pedido.talla}
    Corte: ${pedido.corte}
    Material: ${pedido.material}
    Color: ${pedido.color}
    Total: $${PRODUCTO_EJEMPLO.precio}`;

    alert("Datos listos para enviar:\n" + mensaje);
    // Para probar rápido sin configurar nada, podrías usar mailto:
    window.location.href = `mailto:tu-correo@gmail.com?subject=Nuevo Pedido&body=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        {/* Imagen del Producto */}
        <div className="md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={PRODUCTO_EJEMPLO.imagen}
            alt="Camisa"
          />
        </div>

        {/* Detalles y Selectores */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase">
            {PRODUCTO_EJEMPLO.nombre}
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            ${PRODUCTO_EJEMPLO.precio}.00
          </p>

          <div className="mt-6 space-y-4">
            {/* Selector de Talla */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Talla
              </label>
              <select
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
                onChange={(e) =>
                  setPedido({ ...pedido, talla: e.target.value })
                }
              >
                {["S", "M", "L", "XL"].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Selector de Corte */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Corte
              </label>
              <div className="flex gap-2 mt-1">
                {["Slim Fit", "Regular", "Oversized"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setPedido({ ...pedido, corte: c })}
                    className={`px-3 py-1 border rounded ${pedido.corte === c ? "bg-black text-white" : "bg-white"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de Compra */}
            <button
              onClick={enviarPorCorreo}
              className="w-full mt-8 bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition"
            >
              REALIZAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
