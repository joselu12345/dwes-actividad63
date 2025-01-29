import Modal from "@/components/Modal";
import { insertarAsignatura, modificarAsignatura, eliminarAsignatura} from "@/lib/actions";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



async function PaginaAsignaturas() {

    return (
        <div>
            <h1>Lista de asignaturas</h1>
            <Suspense fallback={"Obteniendo Asignaturas ..."}>
                <Asignaturas />
            </Suspense>

        </div>

    )

}

export default PaginaAsignaturas;

// ---------------- Componente de servidor

async function Asignaturas() {

    const asignaturas = await prisma.asignatura.findMany()
    //console.log(asignaturas);

    return (
        <div>
            {/*JSON.stringify(asignaturas)*/}

            <Modal texto="Insertar asignatura">
                <form action={insertarAsignatura}>
                    <input name="nombre" placeholder="Nombre" />
                    <input name="profesor" placeholder="Profesor" />
                    <input name="num_horas" type='number' />
                    <button>Insertar Asignatura</button>
                </form>
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
                            <form action={modificarAsignatura}>
                                <input type="hidden" name="id" defaultValue={asignatura.id} />
                                <input name='nombre' defaultValue={asignatura.nombre} />
                                <input name='profesor' defaultValue={asignatura.profesor} />
                                <input name='num_horas' defaultValue={asignatura.num_horas} />
                                <button>Modificar</button>
                            </form>
                        </Modal>

                        <Modal texto="Eliminar">
                            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
                            <p>ASIGNATURA: {asignatura.nombre}</p>
                            <p>PROFESOR: {asignatura.profesor}</p>
                            <p>NUM HORAS: {asignatura.num_horas}</p>
                            <form action={eliminarAsignatura}>
                                <input type="hidden" name="id" defaultValue={asignatura.id} />
                                <button>Eliminar</button>
                            </form>
                        </Modal>

                        <hr />
                    </div>

                )
            }
        </div>

    );

}