import { evenOrOdd, greeting, welcome } from '../src/basic';

//Ejercicio 1
describe('Las variables en Javascript', () => {
    it('pueden contener strings', () => {
        const a = "Javascript"
        expect(a).toBe("Javascript");
    });
    it('pueden contener números', () => {
        // Añade la línea que falta
        const b = 14.64;

        expect(b).toBe(14.64);
    });
    it('pueden contener booleanos', () => {
        // Añade la línea que falta
        const c = false;
        expect(c).toBeFalsy();
    });
});

//Ejercicio 2
describe('Comparaciones en Javascript', () => {
    it("usando ===", () => {
        const number = 20;
        //completa la asignación usando number y el comparador ===
        const expresion = (number === 10);
        expect(expresion).toBeFalsy();
    });
    it("usando !==", () => {
        const language = "Javascript";
        //completa la asignación usando language y el comparador !==
        const expresion = (language !== "Javascript");
        expect(expresion).toBeFalsy();
    });
});

//Ejercicio 3
describe("Operaciones aritméticas", () => {
    it("Usando suma", () => {
        //completa la asignación de a y b
        const a = 50;
        const b = 50;
        expect(a + b).toBe(100);
    });
    it("Usando multiplicación", () => {
        //completa la asignación de a y b
        const a = 1;
        const b = 13;
        expect(a * b).toBe(13);
    });
    it("Usando división", () => {
        //completa la asignación de a y b
        const a = 5;
        const b = 2;
        expect(a / b).toBe(2.5);
    });
});

//Ejercicio 4
describe('Algebra booleana', () => {
    it("Usando el operador AND (&&)", () => {
        const a = true;
        //completa la asignación de b
        const b = true;
        const expression = a && b;
        expect(expression).toBeTruthy();
    });
    it("Usando el operador OR (||)", () => {
        const a = false;
        //completa la asignación de b
        const b = false;
        const expression = a || b;
        expect(expression).toBeFalsy();
    });
});

//Ejercicio 5
// Para hacer pasar estos tests, completa el código correspondiente en el archivo "basic.js" 
// NO MODIFIQUES ESTOS TESTS
// Las funciones pueden tener o no parámetros, averigua que son y para que sirven, también busca la diferencia entre parámetros y argumentos.
describe("Ejemplos de funciones", () => {
    it('Función que nos dice Hello World', () => {
        expect(welcome()).toBe("Hello World");
    });
    it("Función que nos dice si un número es par (even) o impar (odd)", () => {
        expect(evenOrOdd(2)).toBe("even")
        expect(evenOrOdd(13)).toBe("odd")
    });
    it("Función que nos devuelve un saludo para cada nombre", () => {
        expect(greeting("Javi")).toBe("Hola, Javi!")
        expect(greeting("gente")).toBe("Hola, gente!")
        expect(greeting("Mary")).toBe("Hola, Mary!")
    })
})
