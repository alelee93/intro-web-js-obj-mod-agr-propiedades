const { expect } = require("chai");
const sinon = require("sinon");

describe("index.js", () => {
 
  it("1. El objeto contador existe", () => {
    expect(contador).to.be.an("object");
  });

  it("2. El objeto bird existe", () => {
    expect(bird).to.be.an("object");
  });

  it("3. La propiedad color de bird es 'azul'", () => {
    expect(bird.color).to.eql("azul");
  });

  it("4. La propiedad decenas de contador es 2", () => {
    expect(contador.decenas).to.eql(2);
  });

  it("5. La propiedad nombre de bird es 'Pedro", () => {
    expect(bird.nombre).to.eql("Pedro");
  });

  it("6. El objeto contador fue actualizado con las propiedades indicadas", () => {
    expect(contador).to.eql({unidades: 1, decenas: 2, puntaje: 0});
  });

  it("7. El objeto bird fue actualizado con las propiedades indicadas", () => {
    expect(bird).to.eql({color: "azul", poderes: "volar", nombre: "Pedro"});
  });



 
});
