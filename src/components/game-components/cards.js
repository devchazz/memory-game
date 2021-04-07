const cards = [
  {
    name: 'sla',
    image: 'https://i.pinimg.com/originals/d0/c5/da/d0c5dace3255ea0622810e39694e0362.png'
  }, 
  {
    name: 'sla',
    image: 'https://i.pinimg.com/originals/d0/c5/da/d0c5dace3255ea0622810e39694e0362.png'
  },
  {
    name: 'abc',
    image: 'https://i.pinimg.com/564x/d0/e4/07/d0e4075bb5603fb765c9fb7844493dd1.jpg'
  }, 
  {
    name: 'abc',
    image: 'https://i.pinimg.com/564x/d0/e4/07/d0e4075bb5603fb765c9fb7844493dd1.jpg'
  },
  {
    name: 'uiui',
    image: 'https://i.pinimg.com/564x/13/f3/db/13f3dbe0cd80c742a20db77607aab4b8.jpg'
  },
  {
    name: 'uiui',
    image: 'https://i.pinimg.com/564x/13/f3/db/13f3dbe0cd80c742a20db77607aab4b8.jpg'
  },
  {
    name: 'aiaiai',
    image: 'https://i.pinimg.com/564x/f4/47/9c/f4479c8434c4e93384cef642c871d5f9.jpg'
  },
  {
    name: 'aiaiai',
    image: 'https://i.pinimg.com/564x/f4/47/9c/f4479c8434c4e93384cef642c871d5f9.jpg'
  }, 
  {
    name: 'chazz',
    image: 'https://i.pinimg.com/564x/bf/02/fc/bf02fc06f97f702a6fc0958408467367.jpg'
  }, 
  {
    name: 'chazz',
    image: 'https://i.pinimg.com/564x/bf/02/fc/bf02fc06f97f702a6fc0958408467367.jpg'
  },
  {
    name: 'bea',
    image: 'https://i.pinimg.com/564x/71/f8/7c/71f87cc73affb601133862f10e0bfa63.jpg'
  }, 
  {
    name: 'bea',
    image: 'https://i.pinimg.com/564x/71/f8/7c/71f87cc73affb601133862f10e0bfa63.jpg'
  },
  {
    name: 'amanda',
    image: 'https://i.pinimg.com/564x/a8/9f/6a/a89f6aa061dd588eb81c3de73ca43e69.jpg'
  }, 
  {
    name: 'amanda',
    image: 'https://i.pinimg.com/564x/a8/9f/6a/a89f6aa061dd588eb81c3de73ca43e69.jpg'
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