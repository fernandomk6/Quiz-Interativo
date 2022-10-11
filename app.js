// configurar feedback
// configurar reiniciar quiz
// embaralhar as perguntas
// regra para verificar se todas as questões estão marcadas

const form = document.querySelector('.quiz-form')
const correctAnswers = ['A', 'B', 'A', 'B', 'B']
const scoreParagraph = document.querySelector('#score')

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      const maxScore = 100
      const scorePerQuestion = Math.round( maxScore / correctAnswers.length)

      score += scorePerQuestion
    }
  })

  scoreParagraph.textContent = score
})