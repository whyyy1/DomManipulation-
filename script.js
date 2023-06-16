let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];



document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  const head = document.querySelector('#main-title')

  head.innerText = 'shorter'

  // Part 2
  const bd = document.querySelector('body')

  bd.style.backgroundColor = 'green'

  // Part 3
  const favList = document.querySelector('#favorite-things')
  console.log(favList)
  favList.removeChild(favList.lastElementChild)

  // Part 4
  const speT = document.querySelectorAll('.special-title')
  for (let i of speT) {
    i.style.fontSize = '2rem';
  }
  console.log(speT)

  // Part 5
  const pastRaces = document.querySelector('#past-races')
  for (let i of pastRaces.childNodes) {
    if (i.textContent === 'Chicago') {
      i.remove()
    }

  }


  // Part 6
  let den = document.createElement('li')
  den.innerText = 'Denver'

  pastRaces.appendChild(den)


  // Part 7

  const mainDiv = document.querySelector('.main')
  let denBlog = document.createElement('div')
  denBlog.setAttribute('class', 'blog-post purple')
  console.log(denBlog)
  denBlog.classList.add('purple')
  denBlog.innerHTML = `<h1>${den.innerText}</h1>
  <p>The Mile High!</p>`
  mainDiv.appendChild(denBlog)

  // Part 8
  const ranQ = document.querySelector('#quote-title')

  ranQ.addEventListener('click', (event) => {

    randomQuote()

  })
  // Part 9

  const allBlogs = document.querySelectorAll('.blog-post')

  for (const i of allBlogs) {

    for (j of i.children) {

      j.style.pointerEvents = 'none'
    }
    i.addEventListener('mouseout', (event) => {



      event.target.classList.toggle('purple')
      event.target.classList.toggle('red')




    })
    i.addEventListener('mouseenter', (event) => {





      event.target.classList.toggle('red')
      event.target.classList.toggle('purple')

    })
  }

});
