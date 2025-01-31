import { eliminarGrupo } from "@/lib/actions";

function GrupoEliminar({ grupo }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
            <p>GRUPO: {grupo.nombre}</p>
            <p>TUTOR/A: {grupo.tutor}</p>
            <p>AULA: {grupo.aula}</p>
            <form action={eliminarGrupo}>
                <input type="hidden" name="id" defaultValue={grupo.id} />
                <button>Eliminar</button>
            </form>
        </>

    );
}

export default GrupoEliminar;