import { modificarEstudiante } from "@/lib/actions";

function EstudianteModificar() {
    return (

        <form action={modificarEstudiante}>
            <input type="hidden" name="id" defaultValue={estudiante.id} />
            <input name='nombre' defaultValue={estudiante.nombre} />
            <input name='fecha_nacimiento' type='date' defaultValue={estudiante.fecha_nacimiento.toISOString().split("T")[0]} />
            <input name='foto' defaultValue={estudiante.foto} />
            {/* <input name='tutor_legal' defaultValue={estudiante.tutor_legal} /> */}
            <select key={estudiante.tutor_legal} name="tutor_legal" defaultValue={estudiante.tutor_legal}>
                <option value={'Ambos padres'}>Ambos padres</option>
                <option value={'padre'}>padre</option>
                <option value={'madre'}>madre</option>
                <option value={'familiar'}>familiar</option>
                <option value={'otros'}>otros</option>
            </select>
            <button>Modificar</button>
        </form>

    );
}

export default EstudianteModificar;