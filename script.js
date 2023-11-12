const words = ["Python", "Rust", "Javascript", "Mathematics"];
let word = document.querySelector("switching");
let i = 0;
while (true) {
    if (i === 4) {
        i = 0;
    }
    word.textContent = words[i];
    i += 1;
    await new Promise(r => setTimeout(r, 2000));
} 