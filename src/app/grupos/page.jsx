import Modal from "@/components/Modal";
import { eliminarGrupo, insertarGrupo, modificarGrupo } from "@/lib/actions";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()


async function PaginaGrupos() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE GRUPOS</h1>
            {/* 
            <Modal texto="abc" >
                <p>MI CONTENIDO</p>
            </Modal>
            */}

            <Suspense fallback={"Obteniendo Grupos ..."}>
                <Grupos />
            </Suspense>

        </div>

    )

}

export default PaginaGrupos;

// ---------------- Componente de servidor

async function Grupos() {

    const grupos = await prisma.grupo.findMany()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}
            <Modal texto="Insertar grupo">
                <form action={insertarGrupo}>
                    <input name="nombre" placeholder="Nombre" />
                    <input name="tutor" placeholder="Tutor/a" />
                    <input name="aula" placeholder="Aula" />
                    <button>Insertar Grupo</button>
                </form>
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
                            <form action={modificarGrupo}>
                                <input type="hidden" name="id" defaultValue={grupo.id} />
                                <input name='nombre' defaultValue={grupo.nombre} />
                                <input name='tutor' defaultValue={grupo.tutor} />
                                <input name='aula' defaultValue={grupo.aula} />
                                <button>Modificar</button>
                            </form>
                        </Modal>

                        <Modal texto="Eliminar">
                            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos?</h1>
                            <p>GRUPO: {grupo.nombre}</p>
                            <p>TUTOR/A: {grupo.tutor}</p>
                            <p>AULA: {grupo.aula}</p>
                            <form action={eliminarGrupo}>
                                <input type="hidden" name="id" defaultValue={grupo.id} />
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