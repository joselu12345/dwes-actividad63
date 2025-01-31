import Modal from "../Modal";
import { obtenerAsignaturas } from "@/lib/data";
import AsignaturaModificar from "./Modificar";
import AsignaturaEliminar from "./Eliminar";
import AsignaturaInsertar from "./Insertar";

// ---------------- Componente de servidor

async function Asignaturas() {
    const asignaturas = await obtenerAsignaturas()
    //console.log(asignaturas);

    return (
        <div>
            {/*JSON.stringify(asignaturas)*/}

            <Modal texto="Insertar asignatura">
                <AsignaturaInsertar />
            </Modal>

            {
                asignaturas.map(asignatura =>
                    <div key={asignatura.id}>
                        <div>
                            <p>{asignatura.nombre}</p>
                            <p>{asignatura.profesor}</p>
                            <p>{asignatura.num_horas}</p>
                        </div>

                        <Modal texto="Modificar">
                            <AsignaturaModificar asignatura={asignatura} />
                        </Modal>

                        <Modal texto="Eliminar">
                            <AsignaturaEliminar asignatura={asignatura} />
                        </Modal>

                        <hr />
                    </div>

                )
            }
        </div>

    );

}