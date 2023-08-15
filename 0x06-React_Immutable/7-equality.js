import { Map, is } from 'immutable';

export const areMapsEqual = (map1, map2) => {
  const newMap1 = new Map(map1);
  const newMap2 = new Map(map2);
  const equalMaps = is(newMap1, newMap2);
  return equalMaps;
};

// const map1 = new Map(
//   {
//     firstName: 'Guillaume',
//     lastName: 'Salva'
//   }
// )
// const map2 = new Map(
//   {
//     firstName: 'Guillaume',
//     lastName: 'Salva'
//   }
// )

// const equality = areMapsEqual(map1, map2)
// console.log(equality)
