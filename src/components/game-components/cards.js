const cards = [
  {
    name: 'TheStar',
    image: 'https://i.pinimg.com/564x/f6/74/30/f674305006e7ab11b5fd3ac09a9acb7f.jpg'
  }, 
  {
    name: 'TheStar',
    image: 'https://i.pinimg.com/564x/f6/74/30/f674305006e7ab11b5fd3ac09a9acb7f.jpg'
  },
  {
    name: 'TheVideoGame',
    image: 'https://i.pinimg.com/564x/8e/10/29/8e10296fa597ef8f291802471019acb1.jpg'
  }, 
  {
    name: 'TheVideoGame',
    image: 'https://i.pinimg.com/564x/8e/10/29/8e10296fa597ef8f291802471019acb1.jpg'
  },
  {
    name: 'ThePlanet',
    image: 'https://i.pinimg.com/564x/11/c3/1b/11c31b0a2e0a0deb861a817d88f9ecaf.jpg'
  },
  {
    name: 'ThePlanet',
    image: 'https://i.pinimg.com/564x/11/c3/1b/11c31b0a2e0a0deb861a817d88f9ecaf.jpg'
  },
  {
    name: 'TheWine',
    image: 'https://i.pinimg.com/564x/86/14/93/8614930460d3d8f977bb0d44b8dfb8ef.jpg'
  },
  {
    name: 'TheWine',
    image: 'https://i.pinimg.com/564x/86/14/93/8614930460d3d8f977bb0d44b8dfb8ef.jpg'
  }, 
  {
    name: 'TheSky',
    image: 'https://i.pinimg.com/564x/62/b1/61/62b16146785ba62614c3ca2efa95fc1c.jpg'
  }, 
  {
    name: 'TheSky',
    image: 'https://i.pinimg.com/564x/62/b1/61/62b16146785ba62614c3ca2efa95fc1c.jpg'
  },
  {
    name: 'TheFlower',
    image: 'https://i.pinimg.com/564x/e1/ed/13/e1ed13803916933d0518ada448d3d662.jpg'
  }, 
  {
    name: 'TheFlower',
    image: 'https://i.pinimg.com/564x/e1/ed/13/e1ed13803916933d0518ada448d3d662.jpg'
  },
  {
    name: 'TheButterfly',
    image: 'https://i.pinimg.com/564x/d2/e2/c4/d2e2c4b21ea3795c4e81f27426df53a7.jpg'
  }, 
  {
    name: 'TheButterfly',
    image: 'https://i.pinimg.com/564x/d2/e2/c4/d2e2c4b21ea3795c4e81f27426df53a7.jpg'
  }
]

//Shuffle:
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
} 

shuffleArray(cards)

export default cards