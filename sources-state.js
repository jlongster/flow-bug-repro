// @flow

const I = require("immutable");
const makeRecord = require("./record.js");

import type { Record } from "./record.js";

type Source = { id: string };

type SourcesState = {
  sources: I.Map<string, Source>,
  selectedSource: ?Source,
  sourcesText: I.Map<string, any>,
  tabs: I.List<any>
};

const initialState = makeRecord(({
  sources: I.Map({}),
  selectedSource: undefined,
  sourcesText: I.Map({}),
  tabs: I.List([])
} : SourcesState), "SourcesState");

exports.initialState = initialState;

exports.getSources = function(state: Record<SourcesState>) {
  return state.sources;
}

