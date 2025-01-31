import { eliminarEstudiante } from "@/lib/actions";

function EstudianteEliminar({ estudiante }) {
    return (

        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
            <p>ESTUDIANTE: {estudiante.nombre}</p>
            <p>FECHA NACIMIENTO: {estudiante.fecha_nacimiento.toDateString()}</p>
            <p>FOTO: <img src={estudiante.foto} className="w-40" /> </p>
            <p>TUTOR LEGAL:  {estudiante.tutor_legal}  </p>
            <form action={eliminarEstudiante}>
                <input type="hidden" name="id" defaultValue={estudiante.id} />
                <button>Eliminar</button>
            </form>
        </>
    );
}

export default EstudianteEliminar;