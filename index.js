// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each.

// If one of the flowers has an even number of petals and
// the other has an odd number of petals
// it means they are in love.

// Write a function that will take the number of petals of each flower and
// return true if they are in love and
// false if they aren't.

function isOdd(num) {
  return num % 2;
}

// Even = 0; Odd = 1

function lovefunc(flower1, flower2) {
  if (isOdd(flower1) == 0 && isOdd(flower2) == 1) return true;
  else if (isOdd(flower1) == 1 && isOdd(flower2) == 0) return true;
  else return false;
}

console.log(lovefunc(2, 2));

//   pseudo code baby
// if flower1 - odd number and flower 2 - even number
// in love

// if flower1 - even number and flower 2 - odd number
// in love
// else
// not in love
