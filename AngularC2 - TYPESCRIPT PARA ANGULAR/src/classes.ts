//classes

/*
  data modifiers
  public - pode acessar fora da classe e metodos -  por default é publico
  private - propriedade só pode ser acessada por dentro da classe e metodos
  protected - só pode ser enxergado dentro da classe e metodos e classes que herdam
*/

class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;
  
    constructor(name: string, stregth: number, skill: number) {
      this.name = name;
      this.stregth = stregth;
      this.skill = skill;
    }
  
    attack(): void {
      console.log(`Attack with ${this.stregth} points`);
    }
  }
  
  //Character: superclass
  //Magician: subclass
  class Magician extends Character {
    magicPoints: number;
    constructor(
      name: string,
      stregth: number,
      skill: number,
      magicPoints: number
    ) {
      super(name, stregth, skill);
      this.magicPoints = magicPoints;
    }
  }
  
  const p1 = new Character("Ryu", 10, 98);
  const p2 = new Magician("Mago", 9, 30, 100);
  p1.skill = 12;