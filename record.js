// @flow
"use strict";

const I = require("immutable");

export type Record<T: Object> = {
  get<A>(key: $Keys<T>): A;
  set<A>(key: $Keys<T>, value: A): Record<T>;
  setIn(keyPath: Array<any>, ...iterables: Array<any>): Record<T>;
  update<A>(key: $Keys<T>, updater: (value: A) => A): Record<T>;
  merge(values: $Shape<T>): Record<T>;
  mergeIn(keyPath: Array<any>, ...iterables: Array<any>): Record<T>;
  inspect(): string;
  toObject(): Object & T;
} & T;

/**
 * Make an immutable record type
 *
 * @param spec - the keys and their default values @return a state
 * record factory function
 */
function makeRecord<T>(
  spec: T & Object,
  name: string
): (init: $Shape<T>) => Record<T> {
  return I.Record(spec, name);
}

module.exports = makeRecord;

