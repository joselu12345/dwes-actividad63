import Modal from "@/components/Modal";
import { obtenerGrupos } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoModificar from "./Modificar";
import GrupoEliminar from "./Eliminar";

// ---------------- Componente de servidor

export default async function Grupos() {
    const grupos = await obtenerGrupos()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}
            <Modal texto="Insertar grupo">
                <GrupoInsertar />
            </Modal>

            {
                grupos.map(grupo =>
                    <div key={grupo.id}>
                        <div>
                            <p>{grupo.nombre}</p>
                            <p>{grupo.tutor}</p>
                            <p>{grupo.aula}</p>
                        </div>

                        <Modal texto="Modificar">
                            <GrupoModificar grupo={grupo} />
                        </Modal>

                        <Modal texto="Eliminar">
                            <GrupoEliminar grupo={grupo} />
                        </Modal>

                        <hr />
                    </div>

                )
            }
        </div>

    );

}