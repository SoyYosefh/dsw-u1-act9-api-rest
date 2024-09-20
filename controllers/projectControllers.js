/* Entidades
El objeto Proyecto tendrá las siguientes propiedades:
id: Generado automáticamente (UUID).
name: Nombre del proyecto (cadena de texto, requerido).
description: Descripción del proyecto (cadena de texto).
startDate: Fecha de inicio del proyecto (formato YYYY-MM-DD).
endDate: Fecha de finalización esperada (formato YYYY-MM-DD).
status: Estado del proyecto (enum con valores: "pendiente", "en progreso", "completado").
teamMembers: Arreglo de cadenas con los nombres de los miembros del equipo.
budget: Presupuesto asignado al proyecto (número, positivo).*/

// FUNCION UUID AUTOMATICO

const { v4: uuidv4 } = require('uuid');

let project = [
    {
        id: 1,
        name: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        startDate: '2022-01-01',
        endDate: '2022-01-31',
        status: 'pendiente',
        teamMembers: ['Ramon', 'Cristian', 'Rodolfo'],
        budget: 10000
    },
];

// FUNCIONES CRUD

// OBTENER TODAS LOS PROYECTOS
function getAllProjects() {
    return project;
};

// CREAR UN NUEVO PROYECTO
function createNewProject(name, description, startDate, endDate, status, teamMembers, budget) {
    const newProject ={
        id: uuidv4(),
        name,
        description,
        startDate,
        endDate,
        status,
        teamMembers,
        budget
    };  
    project.push(newProject);
    return newProject;
    }

// BUSCAR UN PROYECTO POR SU ID
function getProjectById(projectId) {
    const projectFound = project.find((project) => project.id === projectId);
    return projectFound || null;  // Retorna null si no lo encuentra
}

// ACTUALIZAR UN PROYECTO
function updateProject(projectId, updatedFields) {
    let projectIndex = project.findIndex(p => p.id === projectId);

    if (projectIndex === -1) {
        return null;  // Si no encuentra el proyecto, retorna null
    }

    // Actualizamos solo los campos que se pasen
    project[projectIndex] = {
        ...project[projectIndex],  // Mantiene los valores existentes
        ...updatedFields  // Sobrescribe los campos que llegan como actualizados
    };

    return project[projectIndex];  // Retorna el proyecto actualizado
}

// ELIMINAR UN PROYECTO
function deleteProject(projectId) {
    const projectToDelete = getProjectById(projectId);
    
    if (!projectToDelete) {
        return null;  // Si no encuentra el proyecto, retorna null
    }

    // Filtra la lista de proyectos para eliminar el que tiene el id correspondiente
    project = project.filter((project) => project.id !== projectId);

    return projectToDelete;  // Retorna el proyecto eliminado
}



module.exports = {
    getAllProjects,
    createNewProject,
    getProjectById,
    updateProject,
    deleteProject
};