import { Map, List } from 'immutable';

export const concatElements = (page1, page2) => {
  addedList = List(page1).concat(List(page2));
  return addedList;
};

export const mergeElements = (page1, page2) => {
  mergedMap = Map(page1).merge(Map(page2));
  return mergedMap;
};
