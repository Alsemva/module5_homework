const map = new Map([
    [1, "forest"],
    ["forest", 1],
    ["scorpion", "24.10 - 29.11"],
    [true, "associative array"]
]);

for (let key of map.keys()){
    console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
}
