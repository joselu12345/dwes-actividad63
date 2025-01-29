import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



async function PaginaEstudiantes() {

    return (
        <div>
            <h1>Lista de estudiantes</h1>
            <Suspense fallback={"Obteniendo Estudiantes ..."}>
                <Estudiantes />
            </Suspense>

        </div>

    )

}

export default PaginaEstudiantes;

// ---------------- Componente de servidor

async function Estudiantes() {

    const estudiantes = await prisma.estudiante.findMany()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}

            <Modal texto="Insertar estudiante">
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
                        </Modal>

                        <Modal texto="Eliminar">
                            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
                            <p>ESTUDIANTE: {estudiante.nombre}</p>
                            <p>FECHA NACIMIENTO: {estudiante.fecha_nacimiento.toDateString()}</p>
                            <p>FOTO: <img src={estudiante.foto} className="w-40" /> </p>
                            <p>TUTOR LEGAL:  {estudiante.tutor_legal}  </p>
                            <form action={eliminarEstudiante}>
                                <input type="hidden" name="id" defaultValue={estudiante.id} />
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