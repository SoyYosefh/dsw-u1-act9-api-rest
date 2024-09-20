const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectControllers');

//* modelo utilizado
// {
//     id: '1', // UUID
//     name: 'Proyecto 1',
//     description: 'Descripción del proyecto 1',
//     startDate: '2022-01-01',
//     endDate: '2022-01-31',
//     status: 'pendiente',
//     teamMembers: ['Ramon', 'Cristian', 'Rodolfo'],
//     budget: 10000
// }

//* Rutas

// GET /projects
router.get('/getAll/', (req, res) => {
    if (Object.keys(req.query).length > 0) {
        res.status(400).json({
            code: 400,
            message: 'Datos incorrectos, no se puede enviar parametros en la url'
        })
    }
    const projects = projectController.getAllProjects();
    if (!projects) {
        res.status(404).json({
            code: 404,
            message: 'No se encontraron proyectos'
        });
    }
    res.status(200).json({
        code: 200,
        message: 'Lista de proyectos',
        projects
    });
});

// POST /projects
router.post('/create/', (req, res) => {
    const { name, description, startDate, endDate, status, teamMembers, budget } = req.body;
    if (!name || !description || !startDate || !endDate || !status || !teamMembers || !budget) {
        res.status(400).json({
            code: 400,
            message: 'Datos incorrectos, faltan campos'
        });
    }

    if (Object.keys(req.body).length > 7) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar: name, description, startDate, endDate, status, teamMembers, budget'
        });
    }

    const newProject = projectController.createNewProject(req.body);
    if (!newProject) {
        res.status(500).json({
            code: 500,
            message: 'Error al crear el proyecto'
        });
    }

    res.status(201).json({
        code: 201,
        message: 'Proyecto creado con exito',
        newProject
    });
});

// PUT /projects/:id
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            code: 400,
            error: 'Falta el "id"'
        });
    }
    // Si se envían más datos en la URL
    if (Object.keys(req.params).length > 1) {
        return res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "id"'
        });
    }

    const { name, description, startDate, endDate, status, teamMembers, budget } = req.body;
    if (!name || !description || !startDate || !endDate || !status || !teamMembers || !budget) {
        return res.status(400).json({
            code: 400,
            message: 'Datos incorrectos, faltan campos'
        });
    }

    if (Object.keys(req.body).length > 7) {
        return res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar: name, description, startDate, endDate, status, teamMembers, budget'
        });
    }

    const project = projectController.getProjectById(id);
    if (!project) {
        return res.status(404).json({
            code: 404,
            message: 'Proyecto no encontrado'
        });
    }

    const updatedProject = projectController.updateProject(id, req.body);
    if (!updatedProject) {
        return res.status(500).json({
            code: 500,
            message: 'Error al actualizar el proyecto'
        });
    }

    return res.status(200).json({
        code: 200,
        message: 'Proyecto actualizado con éxito',
        updatedProject
    });
});

// DELETE /projects/:id
router.delete('/delete/:id', (req, res) =>; {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            code: 400,
            message: 'Datos incorrectos, falta el id'
        });
    }

    // si envia mas mas daros en la url
    if (Object.keys(req.params).length > 1) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "id"'
        });
    }

    const project = projectController.getProjectById(id);
    if (!project) {
        res.status(404).json({
            code: 404,
            message: 'Proyecto no encontrado'
        });
    }

    const deletedProject = projectController.deleteProject(id);
    if (!deletedProject) {
        res.status(500).json({
            code: 500,
            message: 'Error al eliminar el proyecto'
        });
    }

    res.status(200).json({
        code: 200,
        message: 'Proyecto eliminado con exito',
        deletedProject
    });
});

// GET /projects/:id
router.get('/get/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            code: 400,
            message: 'Datos incorrectos, falta el id'
        });
    }

    // si envia mas mas daros en la url
    if (Object.keys(req.params).length > 1) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "id"'
        });
    }

    const project = projectController.getProjectById(id);
    if (!project) {
        res.status(404).json({
            code: 404,
            message: 'Proyecto no encontrado'
        });
    }

    res.status(200).json({
        code: 200,
        message: 'Proyecto encontrado',
        project
    });
});

module.exports = router;