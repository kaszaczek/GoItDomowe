// Funkcja do podwajania liczb w tablicy
const doubleNumbers = (numbers) => {
    // Używamy metody map() do iteracji po tablicy i podwojenia każdej liczby
    return numbers.map(number => number * 2);
}

// Przypadek testowy dla funkcji doubleNumbers
const numbersArray = [1, 2, 3, 4, 5];
console.log("Oryginalna tablica liczb:", numbersArray);
console.log("Tablica liczb podwojonych:", doubleNumbers(numbersArray));





// Funkcja do pobierania imion studentów z tablicy obiektów
const getStudentNames = (students) => {
    // Używamy metody map() do iteracji po tablicy i pobrania imion każdego studenta
    return students.map(student => student.name);
}

// Przypadek testowy dla funkcji getStudentNames
const studentsArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
];
console.log("Oryginalna tablica obiektów studentów:", studentsArray);
console.log("Tablica zawierająca tylko imiona studentów:", getStudentNames(studentsArray));
