import { useState } from "react"
import CSelect from "./CSelect";

function FormsStart(path) {

    const [nombre, setNombre] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [difficulty, setDifficulty] = useState(" ");

    const handleSubmit = (e) => {
    e.preventDefault(); 
    window.location.href = `/preguntas?nombre=${nombre}&category=${category}&difficulty=${difficulty}`;
  };
    const items = [
        {value:"", text:"Cualquier Dificultad"},
        {value:"easy", text:"Facíl"},
        {value:"medium", text:"Medio"},
        {value:"hard", text:"Dificil" }
    ];

    const categories = [
        { value: "", text: "Cualquier categoría" },
        { value: "9", text: "Conocimiento general" },
        { value: "10", text: "Entretenimiento: Libros" },
        { value: "11", text: "Entretenimiento: Cine" },
        { value: "12", text: "Entretenimiento: Música" },
        { value: "13", text: "Entretenimiento: musicales y teatros" },
        { value: "14", text: "Entretenimiento: Televisión" },
        { value: "15", text: "Entretenimiento: videojuegos" },
        { value: "16", text: "Entretenimiento: Juegos de mesa" },
        { value: "17", text: "Ciencia y naturaleza" },
        { value: "18", text: "Ciencia: Computadoras" },
        { value: "19", text: "Ciencias: Matemáticas" },
        { value: "20", text: "Mitología" },
        { value: "21", text: "Deportes" },
        { value: "22", text: "Geografía" },
        { value: "23", text: "Historia" },
        { value: "24", text: "Política" },
        { value: "25", text: "Arte" },
        { value: "26", text: "Famosos" },
        { value: "27", text: "Animales" },
        { value: "28", text: "Vehículos" },
        { value: "29", text: "Cómics" },
        { value: "30", text: "Dispositivos electrónicos" },
        { value: "31", text: "Anime & Manga japonés" },
        { value: "32", text: "Cine y Animación" }
    ];

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required="" onChange={(e) => setNombre(e.target.value)}/>
                
                <label htmlFor="categoria">Categoría:</label>
                <CSelect id="category" name="category" items={categories} onChange={(e) => setCategory(e.target.value)} />
                
                <label htmlFor="dificultad">Dificultad:</label>
                <CSelect id="difficulty" name="difficulty" required="" items={items} onChange={(e) => setDifficulty(e.target.value)}></CSelect>
                
                <button type="submit">Enviar</button>
            </form>

        </>
    );
}
export default FormsStart;

