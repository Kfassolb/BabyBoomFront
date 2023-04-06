class Persona {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
}

const p = new Persona('Juan');
p.saludar();
