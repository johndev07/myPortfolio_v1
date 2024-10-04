let wordList = [
  "A creative web developer",
  "With a passion for both functionality and aesthetics",
  "a designer",
];

function wait(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
}

async function addWord(word, wordTag) {
  let wordlength = word.length;
  let wordArr = word.split("");

  for (let i = 0; i < wordlength; i++) {
    await wait(200);
    wordTag.insertAdjacentText("beforeEnd", wordArr[i]);
  }
  return;
}

async function deleteWord(word, wordTag) {
  let wordlength = word.length;
  let wordArr = "";

  for (let i = wordlength; i >= 0; i--) {
    await wait(200);
    wordArr = word.slice(0, i);
    wordTag.innerText = wordArr;
  }
}

export async function wordCarousel(wordTag) {
  let i = 0;
  while (true) {
    await addWord(wordList[i], wordTag);
    await wait(400);
    await deleteWord(wordList[i], wordTag);
    await wait(400);
    i++;
    if (i > wordList.length - 1) {
      i = 0;
    }
  }
}
