import { modificarAsignatura } from "@/lib/actions";

function AsignaturaModificar() {
    return (

        <form action={modificarAsignatura}>
            <input type="hidden" name="id" defaultValue={asignatura.id} />
            <input name='nombre' defaultValue={asignatura.nombre} />
            <input name='profesor' defaultValue={asignatura.profesor} />
            <input name='num_horas' defaultValue={asignatura.num_horas} />
            <button>Modificar</button>
        </form>

    );
}

export default AsignaturaModificar;