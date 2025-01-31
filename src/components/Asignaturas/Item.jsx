import { obtenerAsignatura } from "@/lib/data";

// ----------------- Componente servidor

export default async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)
    //console.log(asignatura);

    return (
        <div>
            <p>{asignatura.nombre}</p>
            <p>{asignatura.profesor}</p>
            <p>{asignatura.num_horas}</p>
        </div>

    );
}
