const toggleQuestion = (questionSelected) => {
  if (questionSelected >= 1 && questionSelected <= 4) {
    // Busco el estado actual de la respuesta
    const answerList = document.getElementsByClassName("answer-text");
    const answerSelected = Array.from(answerList).filter(
      (answer) =>
        Number(answer.getAttribute("data-answer-id")) ===
        Number(questionSelected)
    )[0];
    const answerHidden = Boolean(
      answerSelected.getAttribute("data-hidden") === "true"
    );

    const questionList = document.getElementsByClassName("question-container");

    if (answerHidden) {
      // Si la respuesta esta oculta

      // Oculto el boton hide de todas las preguntas
      Array.from(questionList).forEach((questionItem) => {
        const questionItemShowButton = Array.from(questionItem.children).filter(
          (children) => children.getAttribute("data-icon-type") === "show-icon"
        )[0];
        const questionItemHideButton = Array.from(questionItem.children).filter(
          (children) => children.getAttribute("data-icon-type") === "hide-icon"
        )[0];
        questionItemShowButton.setAttribute("data-hidden", "false");
        questionItemHideButton.setAttribute("data-hidden", "true");
      });

      // Muestro el icono hide de la pregunta seleccionada
      const questionItem = Array.from(questionList).filter(
        (question) =>
          Number(question.getAttribute("data-question-id")) ===
          Number(questionSelected)
      )[0];
      const questionItemShowButton = Array.from(questionItem.children).filter(
        (children) => children.getAttribute("data-icon-type") === "show-icon"
      )[0];
      const questionItemHideButton = Array.from(questionItem.children).filter(
        (children) => children.getAttribute("data-icon-type") === "hide-icon"
      )[0];
      questionItemShowButton.setAttribute("data-hidden", "true");
      questionItemHideButton.setAttribute("data-hidden", "false");

      // Oculto todas las respuestas
      Array.from(answerList).forEach((answer) =>
        answer.setAttribute("data-hidden", "true")
      );

      // Muestro la respuesta seleccionada
      answerSelected.setAttribute("data-hidden", "false");
    } else {
      // Si la respuesta estaba visible

      // Cambio el icono de la pregunta
      const questionItem = Array.from(questionList).filter(
        (question) =>
          Number(question.getAttribute("data-question-id")) ===
          Number(questionSelected)
      )[0];
      const questionItemShowButton = Array.from(questionItem.children).filter(
        (children) => children.getAttribute("data-icon-type") === "show-icon"
      )[0];
      const questionItemHideButton = Array.from(questionItem.children).filter(
        (children) => children.getAttribute("data-icon-type") === "hide-icon"
      )[0];
      questionItemShowButton.setAttribute("data-hidden", "false");
      questionItemHideButton.setAttribute("data-hidden", "true");

      // Oculto la respuesta
      answerSelected.setAttribute("data-hidden", "true");
    }
  } else {
    throw Error("Error al seleccionar pregunta en showQuestion()");
  }
};
