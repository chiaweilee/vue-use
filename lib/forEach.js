"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection, iteratee) {
  return Array.isArray(collection) ? collection.forEach(iteratee) : !function (collection, iteratee) {
    for (var index in collection) {
      if (collection.hasOwnProperty(index)) iteratee(collection[index], index);
    }
  }(collection, iteratee);
};