const request = require("supertest");
const chai = require("chai");
const sinon = require("sinon");

const app = require("../index");
const projectControllers = require("../controllers/projectControllers");

const expect = chai.expect;

describe("GET /project/getAll", () => {
  it("1. Debería devolver todos los proyectos con estatus 200 cuando hay proyectos", async () => {
    const projects = [
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

    const res = await request(app).get('/project/getAll');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.equal(1);
    expect(res.body).to.deep.equal(projects);

  });
});
describe("POST /project/create", () => {
  it("3. Debería crear un nuevo proyecto y devolver estatus 201", async () => {
    const newProject = {
      name: 'Nuevo Proyecto',
      description: 'Descripción del nuevo proyecto',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      status: 'pendiente',
      teamMembers: ['Juan', 'Ana'],
      budget: 20000
    };

    const res = await request(app)
      .post('/project/create')
      .send(newProject);

    console.log('Response body:', res.body);  // Log the response body

    expect(res.status).to.equal(201);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('id');
  });
});