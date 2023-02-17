const count = {}

for (let i = 0; i < 10_000; i++) {
  const numero = Math.floor(Math.random() * 20 + 1)
  count[numero] = count[numero] ? count[numero] + 1 : 1
}
console.log(count)