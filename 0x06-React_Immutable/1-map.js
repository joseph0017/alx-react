import { Map } from 'immutable';

const getImmutableObject = (object) => {
  return Map(object);
};

export default getImmutableObject;

// const test_object = {
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// }

// const new_object = getImmutableObject(test_object)

// console.log(new_object)
