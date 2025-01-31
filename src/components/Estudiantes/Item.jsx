import { obtenerEstudiante } from "@/lib/data";

// ----------------------------- Componente de servidor

export default async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id)
    //console.log(grupo);

    return (
        <div>
            <p>{estudiante.nombre}</p>
            <p>{estudiante.fecha_nacimiento.toISOString().split("T")[0]}</p>
            <img src={estudiante.foto} className="w-40" />
            <p>{estudiante.tutor_legal}</p>
        </div>

    );
}
