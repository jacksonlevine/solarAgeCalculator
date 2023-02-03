export class asciiMap extends Map {
  constructor() {
    super();
    this.bigLetters = new Map([
      ["a",
        "0@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@@@@@@@" +
        "@00000@" +
        "@00000@" +
        "@00000@"],
      ["b",
        "0@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@@@@@@0"],
      ["c",
        "0@@@@@0" +
        "@000000" +
        "@000000" +
        "@000000" +
        "@000000" +
        "@000000" +
        "0@@@@@0"],
      ["d",
        "@@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@@@@@@0"],
      ["e",
        "@@@@@@@" +
        "@000000" +
        "@000000" +
        "@@@@@@0" +
        "@000000" +
        "@000000" +
        "@@@@@@@"],
      ["f",
        "@@@@@@@" +
        "@000000" +
        "@000000" +
        "@@@@@@@" +
        "@000000" +
        "@000000" +
        "@000000"],
      ["g",
        "0@@@@@0" +
        "@00000@" +
        "@000000" +
        "@000000" +
        "@000@@@" +
        "@00000@" +
        "0@@@@@@"],
      ["h",
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@@@@@@@" +
        "@00000@" +
        "@00000@" +
        "@00000@"],
      ["i",
        "@@@@@@@" +
        "000@000" +
        "000@000" +
        "000@000" +
        "000@000" +
        "000@000" +
        "@@@@@@@"],
      ["j",
        "@@@@@@@" +
        "0000@00" +
        "0000@00" +
        "0000@00" +
        "0000@00" +
        "@000@00" +
        "0@@@000"],
      ["k",
        "@00000@" +
        "@00000@" +
        "@0000@0" +
        "@@@@@00" +
        "@0000@0" +
        "@00000@" +
        "@00000@"],
      ["l",
        "@000000" +
        "@000000" +
        "@000000" +
        "@000000" +
        "@000000" +
        "@000000" +
        "@@@@@@@"],
      ["m",
        "@@000@@" +
        "@0@0@0@" +
        "@00@00@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@"],
      ["n",
        "@00000@" +
        "@@0000@" +
        "@0@000@" +
        "@00@00@" +
        "@000@0@" +
        "@0000@@" +
        "@00000@"],
      ["o",
        "@@@@@@@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@@@@@@@"],
      ["p",
        "@@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@@@@@@0" +
        "@000000" +
        "@000000" +
        "@000000"],
      ["q",
        "0@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00@00@" +
        "@000@0@" +
        "0@@@@@@"],
      ["r",
        "0@@@@@0" +
        "@00000@" +
        "@00000@" +
        "@@@@@@@" +
        "@00@000" +
        "@000@00" +
        "@0000@0"],
      ["s",
        "0@@@@@@" +
        "@000000" +
        "@000000" +
        "0@@@@@0" +
        "000000@" +
        "000000@" +
        "@@@@@@0"],
      ["t",
        "@@@@@@@" +
        "000@000" +
        "000@000" +
        "000@000" +
        "000@000" +
        "000@000" +
        "000@000"],
      ["u",
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@@@@@@@"],
      ["v",
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "0@000@0" +
        "00@0@00" +
        "000@000"],
      ["w",
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00000@" +
        "@00@00@" +
        "@0@0@0@" +
        "@@000@@"],
      ["x",
        "@00000@" +
        "0@000@0" +
        "00@0@00" +
        "000@000" +
        "000@000" +
        "00@0@00" +
        "@@000@@"],
      ["y",
        "@00000@" +
        "0@000@0" +
        "00@0@00" +
        "000@000" +
        "000@000" +
        "000@000" +
        "000@000"],
      ["z",
        "@@@@@@@" +
        "00000@0" +
        "0000@00" +
        "000@000" +
        "00@0000" +
        "0@00000" +
        "@@@@@@@"]
    ]);
  }

  setArray(string, width, height, x, y) {
    for (let j = height - 1; j > -1; j -= 1) {
      for (let i = 0; i < width; i += 1) {
        let spotX = i + x;
        let spotY = j + y;
        let stringSnippet = string[(((height - 1) * width) - (j * width)) + i];
        if (stringSnippet != "0") {
          this.set(spotX + ',' + spotY, stringSnippet);
        }
      }
    }
  }
}