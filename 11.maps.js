//  11.Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer.');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question')); //'What is the official name of the latest major JavaScript version?'
console.log(question.size); //8

if (question.has(4)) {
  // question.delete(4);
}

// question.clear();

question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`)); //works fine.
for (let [key, value] of question.entries()) {
  console.log(`This is ${key}, and it's set to ${value}`); //works fine.

  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`); //works fine.
  }
}

const ans = parseInt(prompt('Write the corrrect answer'));
question.get(ans === question.get('correct')); // correct answer if its correct. Wrong, please try again if it's incorrect.