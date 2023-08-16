import { fromJS } from 'immutable';

export default function accessImmutableObject (object, array) {
  const nested = fromJS(object);
  const nestedArray = nested.getIn(array, undefined);
  return nestedArray;
};

// const accessImmutableObjectConstructor = accessImmutableObject({
//   name: {
//     first: 'Guillaume',
//     last: 'Salva'
//   }
// }, ['name', 'first'])

// console.log(accessImmutableObjectConstructor)
