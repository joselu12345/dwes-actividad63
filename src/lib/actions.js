'use server'

import prisma from '@/lib/prisma'


export async function insertarGrupo(formData) {
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')

    await prisma.grupo.create({
        data: {
            nombre: nombre,
            tutor: tutor,
            aula: aula,
        }
    })

    revalidatePath('/grupos')

}

export async function modificarGrupo(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')

    await prisma.grupo.update({
        where: { id },
        data: { nombre, tutor, aula }
    })

    revalidatePath('/grupos')

}

export async function eliminarGrupo(formData) {
    const id = Number(formData.get('id'))

    await prisma.grupo.delete({
        where: { id }
    })

    revalidatePath('/grupos')

}

//////////////////////////////////////////////////////////////////////////////////////////////////
// actions estudiantes

export async function insertarEstudiante(formData) {
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))
    const foto = formData.get('foto')
    const tutor_legal = formData.get('tutor_legal')

    await prisma.estudiante.create({
        data: {
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            foto: foto,
            tutor_legal: tutor_legal,
        }
    })

    revalidatePath('/estudiantes')

}

export async function modificarEstudiante(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))
    const foto = formData.get('foto')
    const tutor_legal = formData.get('tutor_legal')

    await prisma.estudiante.update({
        where: { id },
        data: { nombre, fecha_nacimiento, foto, tutor_legal: tutor_legal }
    })

    revalidatePath('/estudiantes')

}

export async function eliminarEstudiante(formData) {
    const id = Number(formData.get('id'))

    await prisma.estudiante.delete({
        where: { id }
    })

    revalidatePath('/estudiantes')

}

//////////////////////////////////////////////////////////////////////////////////////////////////
// actions asignaturas

export async function insertarAsignatura(formData) {
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const num_horas = Number(formData.get('num_horas'))

    await prisma.asignatura.create({
        data: {
            nombre: nombre,
            profesor: profesor,
            num_horas: num_horas,
        }
    })

    revalidatePath('/asignaturas')

}

export async function modificarAsignatura(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const num_horas = Number(formData.get('num_horas'))

    await prisma.asignatura.update({
        where: { id },
        data: { nombre, profesor, num_horas: num_horas }
    })

    revalidatePath('/asignaturas')

}

export async function eliminarAsignatura(formData) {
    const id = Number(formData.get('id'))

    await prisma.asignatura.delete({
        where: { id }
    })

    revalidatePath('/asignaturas')

}
