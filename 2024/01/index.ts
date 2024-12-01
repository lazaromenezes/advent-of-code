type Hello = {
  name: string
}

const main = () => {
  const greet: Hello = {name: 'Lazaro'}

  console.log(`Hello ${greet.name}`)
}

main()
