import { eliminarAsignatura } from "@/lib/actions";

function AsignaturaEliminar({ asignatura }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
            <p>ASIGNATURA: {asignatura.nombre}</p>
            <p>PROFESOR: {asignatura.profesor}</p>
            <p>NUM HORAS: {asignatura.num_horas}</p>
            <form action={eliminarAsignatura}>
                <input type="hidden" name="id" defaultValue={asignatura.id} />
                <button>Eliminar</button>
            </form>
        </>
    );
}

export default AsignaturaEliminar;