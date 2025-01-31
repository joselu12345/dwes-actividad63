import { insertarEstudiante } from "@/lib/actions";

function EstudianteInsertar() {
    return ( 

        <form action={insertarEstudiante}>
                    <input name="nombre" placeholder="Nombre" />
                    <input name="fecha_nacimiento" type="date" />
                    <input name="foto" placeholder="Foto" />
                    {/* <input name="tutor_legal" placeholder="Tutor_legal" /> */}
                    <select name="tutor_legal">
                        <option value={'Ambos padres'}>Ambos padres</option>
                        <option value={'padre'}>padre</option>
                        <option value={'madre'}>madre</option>
                        <option value={'familiar'}>familiar</option>
                        <option value={'otros'}>otros</option>
                    </select>
                    <button>Insertar Estudiante</button>
                </form>

     );
}

export default EstudianteInsertar;