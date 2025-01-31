import Modal from "../Modal";
import { obtenerEstudiantes } from "@/lib/data";
import EstudianteEliminar from "./Eliminar";
import EstudianteInsertar from "./Insertar";
import EstudianteModificar from "./Modificar";

// ---------------- Componente de servidor

export default async function Estudiantes() {
    const estudiantes = await obtenerEstudiantes()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}

            <Modal texto="Insertar estudiante">
                <EstudianteInsertar/>
            </Modal>

            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id}>
                        <div>
                            <p>{estudiante.nombre}</p>
                            <p>{estudiante.fecha_nacimiento.toISOString().split("T")[0]}</p>
                            <img src={estudiante.foto} className="w-40" />
                            <p>{estudiante.tutor_legal}</p>
                        </div>

                        <Modal texto="Modificar">
                            <EstudianteModificar estudicante={estudiante}/>
                        </Modal>

                        <Modal texto="Eliminar">
                            <EstudianteEliminar estudiante={estudiante}/>
                        </Modal>

                        <hr />
                    </div>

                )
            }
        </div>

    );

}