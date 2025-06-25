const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const fs = require("fs-extra");
const path = require("path");

const expect = chai.expect;
chai.use(chaiHttp);

const dbPath = path.join(__dirname, "../data/db.json");

// Helper to reset DB before each test
async function resetDb() {
  const initialDb = {
    pets: [
      {
        id: "3c4d5e6f-3333-4444-5555-666677778888",
        name: "Max",
        status: "sold",
      },
      {
        id: "4d5e6f7g-9999-0000-1111-222233334444",
        name: "Luna",
        status: "available",
      },
      {
        id: "a7a23bac-dc2f-45a1-a14b-aad6aed1bb06",
        name: "bella",
        status: "PENDING",
      },
    ],
  };
  await fs.writeJson(dbPath, initialDb, { spaces: 2 });
}

describe("Pet API", function () {
  beforeEach(async function () {
    await resetDb();
  });

  it("GET /api/pet should return all pets", async function () {
    const res = await chai.request(app).get("/api/pet");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.equal(3);
  });

  it("POST /api/pet should add a new pet", async function () {
    const newPet = { name: "Momo", status: "sold" };
    const res = await chai.request(app).post("/api/pet").send(newPet);
    expect(res).to.have.status(201);
    expect(res.body).to.include({ name: "Momo", status: "sold" });
    expect(res.body).to.have.property("id");
  });

  it("GET /api/pet/:id should return a pet by id", async function () {
    const res = await chai
      .request(app)
      .get("/api/pet/3c4d5e6f-3333-4444-5555-666677778888");
    expect(res).to.have.status(200);
    expect(res.body).to.include({
      id: "3c4d5e6f-3333-4444-5555-666677778888",
      name: "Max",
      status: "sold",
    });
  });

  // it("PUT /api/pet/:id should update a pet", async function () {
  //   const res = await chai
  //     .request(app)
  //     .put("/api/pet/3c4d5e6f-3333-4444-5555-666677778888")
  //     .send({ name: "Maximus", status: "available" });
  //   expect(res).to.have.status(200);
  //   expect(res.body).to.include({
  //     id: "3c4d5e6f-3333-4444-5555-666677778888",
  //     name: "Maximus",
  //     status: "available",
  //   });
  // });

  // it("DELETE /api/pet/:id should delete a pet", async function () {
  //   const res = await chai
  //     .request(app)
  //     .delete("/api/pet/3c4d5e6f-3333-4444-5555-666677778888");
  //   expect(res).to.have.status(200);
  //   expect(res.body).to.have.property("message", "Pet deleted");
  // });

  it("POST /api/pet should fail if required fields are missing", async function () {
    const res = await chai
      .request(app)
      .post("/api/pet")
      .send({ name: "Tommy" });
    expect(res).to.have.status(400);
    expect(res.body).to.have.property("message");
  });
});
