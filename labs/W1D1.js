// Iteration 1: Names and Input

let hacker1 = "Gareth" // Driver
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Anna" // Navigator
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1 
let spaciousHacker1 = ""

for (let i = 0; i < hacker1.length; i++) {
    spaciousHacker1 += hacker1.charAt(i);
    if (i < hacker1.length-1) {
        spaciousHacker1 = spaciousHacker1 + " ";
    }
}
console.log(spaciousHacker1.toUpperCase())

// 3.2
let reverseHacker2 = ""

for (let i = hacker2.length; i > 0; i--) {
    reverseHacker2 += hacker2.charAt(i-1);
}
console.log(reverseHacker2)

// 3.3
if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus Time!
// Bonus 1

let placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Id interdum velit laoreet id donec. Turpis egestas integer eget aliquet. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Ut placerat orci nulla pellentesque dignissim enim sit. Adipiscing commodo elit at imperdiet. Gravida in fermentum et sollicitudin ac orci phasellus. Nulla malesuada pellentesque elit eget gravida cum sociis. Vulputate ut pharetra sit amet. Nibh sed pulvinar proin gravida hendrerit lectus a. Vivamus et augue eget arcu dictum varius duis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. A arcu cursus vitae congue mauris rhoncus aenean. Nibh sed pulvinar proin gravida hendrerit lectus a. Donec massa sapien faucibus et molestie ac. Gravida cum sociis natoque penatibus et magnis dis parturient. Lacus luctus accumsan tortor posuere ac. Amet purus gravida quis blandit turpis cursus in hac. Imperdiet sed euismod nisi porta lorem. Nunc et cursus metus aliquam. Aliquet enim tortor at auctor urna nunc id cursus. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Natoque penatibus et magnis dis parturient montes nascetur. Elit duis tristique sollicitudin nibh sit. Nunc sed id semper risus in hendrerit gravida. In arcu cursus euismod quis viverra nibh cras pulvinar."

// Count the number of words
let totalSpaces = 0

for (let i = 0; i < placeholder.length; i++) {
  if (placeholder.charAt(i) == " ") {
    totalSpaces = totalSpaces+1
  }
}
console.log(`Wow! ${totalSpaces} whole spaces!`)

let totalWords = totalSpaces+1
console.log(`So, how many words? Mmmmmm ${totalWords}?`)

// Count the number of times `et` appears
let etOccurrences = 0

for (let i = 0; i < placeholder.length; i++) {
  if (placeholder.charAt(i) == " "){
    if (placeholder.charAt(i+1) == "e" || placeholder.charAt(i+1) == "E"){
      if (placeholder.charAt(i+2) == "t"){
        if (placeholder.charAt(i+3) == " " || placeholder.charAt(i+3) == "."){
            etOccurrences = etOccurrences+1
        }
      }
    }
  }
}

console.log(`Oh! What's occuring? ${etOccurrences} et occurrences!`)

