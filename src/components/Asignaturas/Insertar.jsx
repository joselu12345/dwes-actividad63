import { insertarAsignatura } from "@/lib/actions";

function AsignaturaInsertar() {
    return (

        <form action={insertarAsignatura}>
            <input name="nombre" placeholder="Nombre" />
            <input name="profesor" placeholder="Profesor" />
            <input name="num_horas" type='number' />
            <button>Insertar Asignatura</button>
        </form>

    );
}

export default AsignaturaInsertar;