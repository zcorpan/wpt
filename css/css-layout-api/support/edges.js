import {areArraysEqual} from '/common/arrays.js';

function parseNumber(value) {
  const num = parseInt(value.toString());
  if (isNaN(num)) return 0;
  return num;
}

registerLayout('test', class {
  static get inputProperties() {
    return [
      '--border-inline-start-expected',
      '--border-inline-end-expected',
      '--border-block-start-expected',
      '--border-block-end-expected',
      '--scrollbar-inline-start-expected',
      '--scrollbar-inline-end-expected',
      '--scrollbar-block-start-expected',
      '--scrollbar-block-end-expected',
      '--padding-inline-start-expected',
      '--padding-inline-end-expected',
      '--padding-block-start-expected',
      '--padding-block-end-expected',
    ];
  }

  *intrinsicSizes() {}
  *layout(children, edges, constraints, styleMap) {
    const actual = this.constructor.inputProperties.map(
      prop => parseNumber(styleMap.get(prop))
    );

    const expected = [
      edges.border.inlineStart,
      edges.border.inlineEnd,
      edges.border.blockStart,
      edges.border.blockEnd,
      edges.scrollbar.inlineStart,
      edges.scrollbar.inlineEnd,
      edges.scrollbar.blockStart,
      edges.scrollbar.blockEnd,
      edges.padding.inlineStart,
      edges.padding.inlineEnd,
      edges.padding.blockStart,
      edges.padding.blockEnd,
    ];

    if (!areArraysEqual(expected, actual)) {
      return {autoBlockSize: 0, childFragments: []};
    }

    return {autoBlockSize: 100, childFragment: []};
  }
});
