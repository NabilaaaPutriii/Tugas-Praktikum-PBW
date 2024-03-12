function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Contoh penggunaan
const jumlahAngka = 20;
for (let i = 0; i < jumlahAngka; i++) {
    console.log(fibonacci(i));
}
