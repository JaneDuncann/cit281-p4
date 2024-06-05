const fastify = require("fastify")();
const { getQuestions } = require("./p4-module.js");
const { getAnswers } = require("./p4-module.js");
const { getQuestion } = require("./p4-module.js");
const { getAnswer } = require("./p4-module.js");
const { getQuestionsAnswers } = require("./p4-module.js");
const { getQuestionAnswer } = require("./p4-module.js");

fastify.get("/cit/question", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset = utf-8")
      .send({
        error: "",
        statusCode: 200,
        questions: getQuestions(),
      });
  }
);

fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset = utf-8")
      .send({
        error: "",
        statusCode: 200,
        questions: getAnswers(),
      });
  }
);

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset = utf-8")
      .send({
        error: "",
        statusCode: 200,
        questions: getQuestionsAnswers(),
      });
  }
);

fastify.get("/cit/question/:number", (request, reply) => {
  const { number } = request.params;
  const newNumber = parseInt(number)
  const questions = getQuestions();
  if (newNumber !== undefined) {
    if (newNumber >= 1 && newNumber <= questions.length) {
      reply
        .code(200)
        .header("Content-Type", "application/json; charset = utf-8")
        .send({
          error: "",
          statusCode: 200,
          question: getQuestion(newNumber).question,
          number: newNumber,
        });
    } else {
      reply
        .code(404)
        .header("Content-Type", "application/json; charset = utf-8")
        .send({
          error:
            "Question number must be less than or equal to the number of questions (" +
            questions.length +
            ") and greater than 1",
        });
    }
  } else {
    reply
      .code(404)
      .header("Content-Type", "application/json; charset = utf-8")
      .send({ error: "No number entered" });
  }
});

fastify.get("/cit/answer/:number", (request, reply) => {
  const { number } = request.params;
  const newNumber = parseInt(number)
  const answers = getAnswers();
  if (newNumber !== undefined) {
    if (newNumber >= 1 && newNumber <= answers.length) {
      reply
        .code(200)
        .header("Content-Type", "application/json; charset = utf-8")
        .send({
          error: "",
          statusCode: 200,
          answer: getAnswer(newNumber).answer,
          number: newNumber,
        });
    } else {
      reply
        .code(404)
        .header("Content-Type", "application/json; charset = utf-8")
        .send({
          error:
            "Answer number must be less than or equal to the number of questions (" +
            answers.length +
            ") and greater than 1",
        });
    }
  } else {
    reply
      .code(404)
      .header("Content-Type", "application/json; charset = utf-8")
      .send({ error: "No number entered" });
  }
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const { number } = request.params;
  const newNumber = parseInt(number)
  const questions = getQuestions();
  if (newNumber !== undefined) {
    if (newNumber >= 1 && newNumber <= questions.length) {
      reply
        .code(200)
        .header("Content-Type", "application/json; charset = utf-8")
        .send({
          error: "",
          statusCode: 200,
          question: getQuestionAnswer(newNumber).question,
          answer: getQuestionAnswer(newNumber).answer,
          number: newNumber,
        });
    } else {
      reply
        .code(404)
        .header("Content-Type", "application/json; charset = utf-8")
        .send({
          error:
            "Question number must be less than or equal to the number of questions (" +
            questions.length +
            ") and greater than 1",
        });
    }
  } else {
    reply
      .code(404)
      .header("Content-Type", "application/json; charset = utf-8")
      .send({ error: "No number entered" });
  }
});

fastify.get("*", (request, reply) => {
  reply
    .code(404)
    .header("Content-Type", "application/json; charset = utf-8")
    .send({
      error: "Route not found",
      statusCode: 404,
    });
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
