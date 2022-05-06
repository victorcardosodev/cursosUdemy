function Triangulo (a, b, c) {
    if (a == b, b == c, c == a) {
        return ('O tipo desse triagulo é Equilátero');
    } else if (a == b, b == c, c != a ) {
        return 'O tipo desse triangulo é Isósceles';
    } else if (a == b, b != c,  c == a) {
        return 'O tipo desse triangulo é Isósceles';
    } else if (a != b, b == c, c == a) {
        return 'O tipo desse triangulo é Isósceles';
    } else {
        return 'O tipo desse triangulo é Escaleno';
    }
}

console.log(Triangulo(5, 5, 5));
console.log(Triangulo(9, 9, 8));
console.log(Triangulo(7, 5, 5));
console.log(Triangulo(7, 0, 5));
