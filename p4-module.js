const { data } = require("./p4-data.js");

function getQuestions() {
  let qArray = [];
  for (i = 0; i < data.length; i++) {
    qArray.push(data[i].question);
  }
  return qArray;
}
//console.log(getQuestions())

function getAnswers() {
  let aArray = [];
  for (i = 0; i < data.length; i++) {
    aArray.push(data[i].answer);
  }
  return aArray;
}
//console.log(getAnswers())

function getQuestionsAnswers() {
  const dataCopy = [];
  for (let i = 0; i < data.length; i++) {
    dataCopy.push({ ...data[i] });
  }
  return dataCopy;
}
//console.log(getQuestionsAnswers())

function getQuestion(number = "") {
  const questions = ["Q1", "Q2", "Q3"];
  if (number === "" || !Number.isInteger(number)) {
    return {
      error: "Question number must be an integer",
      question: "",
      number: "",
    };
  }

  if (number < 1) {
    return {
      error: "Question number must be >=  1",
      question: "",
      number: "",
    };
  }

  if (number > questions.length) {
    return {
      error:
        "Question number must be less than the number of questions (" +
        questions.length +
        ")",
      question: "",
      number: "",
    };
  } else {
    return {
      error: "",
      question: questions[number - 1],
      number: number,
    };
  }
}
//console.log(getQuestion(2))

function getAnswer(number = "") {
  const answers = ["A1", "A2", "A3"];
  if (number === "" || !Number.isInteger(number)) {
    return {
      error: "Answer number must be an integer",
      answer: "",
      number: "",
    };
  }

  if (number < 1) {
    return {
      error: "Answer number must be >=  1",
      answer: "",
      number: "",
    };
  }

  if (number > answers.length) {
    return {
      error:
        "Answer number must be less than the number of questions (" +
        answers.length +
        ")",
      answer: "",
      number: "",
    };
  } else {
    return {
      error: "",
      answer: answers[number - 1],
      number: number,
    };
  }
}

function getQuestionAnswer(number = "") {
  const questions = ["Q1", "Q2", "Q3"];
  const answers = ["A1", "A2", "A3"];
  if (number === "" || !Number.isInteger(number)) {
    return {
      error: "Question number must be an integer",
      question: "",
      number: "",
      answer: "",
    };
  }

  if (number < 1) {
    return {
      error: "Question number must be >=  1",
      question: "",
      number: "",
      answer: "",
    };
  }

  if (number > questions.length) {
    return {
      error:
        "Question number must be less than the number of questions (" +
        questions.length +
        ")",
      question: "",
      number: "",
      answer: "",
    };
  } else {
    return {
      error: "",
      question: questions[number - 1],
      number: number,
      answer: answers[number - 1],
    };
  }
}
//console.log(getQuestionAnswer())
//console.log(getQuestionAnswer(2))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
    getQuestions: getQuestions,
    getAnswers: getAnswers,
    getQuestionsAnswers: getQuestionsAnswers,
    getQuestion: getQuestion,
    getAnswer: getAnswer,
    getQuestionAnswer: getQuestionAnswer

};