'use strict';

let candidateNumber = parseInt(prompt("How many candidates?"));
let candidateDict = [];
for (let i = 0; i < candidateNumber; i++) {
  let candidateName = prompt("What is the name of candidate " + (i+1) + "?");
  let candidate = {
    name: candidateName,
    votes: 0,
  }
  candidateDict.push(candidate);
}

let voterNumber = parseInt(prompt("How many voters?"));
for (let i = 0; i < voterNumber; i++) {
  let vote = prompt("Who do you vote for?");
  if (vote === "") {
    continue;
  }
  for (let candidate of candidateDict) {
    if (candidate.name === vote) {
      candidate.votes += 1;
    }
  }
}

candidateDict.sort((a, b) => {
  return b.votes - a.votes;
});

console.log(`The winner is ${candidateDict[0].name} with ${candidateDict[0].votes} votes.`)
for (let candidate of candidateDict) {
  console.log(`${candidate.name}: ${candidate.votes} vote(s)`)
}

