import { Map } from 'immutable';

export const mergeDeeplyElements = (page1, page2) => {
  const addedObjects = Map(page1).mergeDeep(Map(page2));
  return addedObjects;
};

// const page1 = {
//   'user-1': {
//     id: 1,
//     name: 'test',
//     likes: {
//       1: {
//         uid: 1234
//       }
//     }
//   }
// }

// const page2 = {
//   'user-1': {
//     likes: {
//       2: {
//         uid: 134
//       }
//     }
//   }
// }

// const merged = mergeDeeplyElements(page1, page2).toJS()
// console.log(merged)
