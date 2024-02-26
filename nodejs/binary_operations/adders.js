export function halfAdder(a, b) {
    return [a & b, a ^ b]; // [carry, sum]
}

export function fullAdder(a, b, c) {
    const ha1 = halfAdder(a, b);
    const ha2 = halfAdder(ha1[1], c);
    // [carry, sum], i think I am wrong here and it is [sum, carry]
    return [ha2[1], ha1[0] | ha2[0]]; // | is a bitwise OR, while || is a logical OR
}
