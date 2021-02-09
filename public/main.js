function main() {
  const numbers = [3, 4, 5, 6, 7, 8]
  const doubled = numbers => {
    return numbers * 2
  }
  const _map = numbers.forEach(doubled)
  console.log(_map)
}

document.addEventListener('DOMContentLoaded', main)
