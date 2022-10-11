// regra para verificar se todas as questões estão marcadas

const form = document.querySelector('.quiz-form')
const correctAnswers = ['A', 'B', 'A', 'B', 'B']
const scoreParagraph = document.querySelector('#score')
const scoreFeedbackElement = document.querySelector('#result-feedback')
const restartButton = document.querySelector('#re-start-quiz') 
const dangerScore = 40
const warningScore = 60
const sucessScore = 80
const masterScore = 100
let score = 0

const dangerFeedbackOpntions = {
  className: 'text-danger',
  textContent: `Hmm... você errou algumas questões chaves, 
    mas não desanime, você pode rever as aulas de etapa 1, e tentar novamente`
}

const warningFeedback = {
  className: 'text-warning',
  textContent: `Você acertou boa parte das questões, você foi bem`
}

const successFeedback = {
  className: 'text-success',
  textContent: `Parabéns! você acertou quase tudo, errou apenas uma questão. Arrazoou!`
}

const masterFeedback = {
  className: 'text-primary',
  textContent: `Você acertou tudo o_o' `
}

const addToScore = questionScore => score += questionScore
const resetScore = () => score = 0
const renderScore = score => scoreParagraph.textContent = score

const renderFeedback = ({className, textContent}) => {
  scoreFeedbackElement.textContent = textContent
  scoreFeedbackElement.setAttribute('class', className)
}

const checkAnswer = (userAnswer, index) => {
  const maxScore = 100
  const questionScore = maxScore / correctAnswers.length
  const isRightAnswer = userAnswer === correctAnswers[index]

  if (isRightAnswer) {
    addToScore(questionScore)
  }
}

const handleFormSubmit = event => {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]

  userAnswers.forEach(checkAnswer)

  if (score <= dangerScore) {
    renderFeedback(dangerFeedbackOpntions)
  }

  if (score === warningScore) {
    renderFeedback(warningFeedback)
  }

  if (score === sucessScore) {
    renderFeedback(successFeedback)
  }

  if (score === masterScore) {
    renderFeedback(masterFeedback)
  }

  renderScore(score)
  resetScore()
}

const restartQuiz = () => {
  const inputs = form.querySelectorAll('input')

  inputs.forEach(input => input.checked = false)
}

form.addEventListener('submit', handleFormSubmit)
restartButton.addEventListener('click', restartQuiz)
