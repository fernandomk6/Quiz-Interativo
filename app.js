const form = document.querySelector('.quiz-form')
const modalResult = document.querySelector('.modal')
const correctAnswers = ['A', 'B', 'A', 'B', 'B']
const scoreParagraph = document.querySelector('#score')
const scoreFeedbackElement = document.querySelector('#result-feedback')
const closeModalResultButton = document.querySelector('#close-quiz')
const dangerScore = 40
const warningScore = 60
const sucessScore = 80
const maxScore = 100
let score = 0

const dangerFeedbackInfo = {
  className: 'text-danger',
  textContent: `Hmm... você errou a maioria das questões, 
    mas não desanime, você pode rever as aulas de etapa 1, e tentar novamente.`
}

const warningFeedbackInfo = {
  className: 'text-warning',
  textContent: `Você tirou uma nota razoável, mas é bom rever novamentes as aulas da etapa 1`
}

const successFeedbackInfo = {
  className: 'text-info',
  textContent: `Você acertou quase tudo, errou apenas uma questão. Você foi muito bem. =)`
}

const maxFeedbackInfo = {
  className: 'text-success',
  textContent: `Parabéns, Você acertou todas as questões. Você está pronto para a etapa 2`
}

const addToScore = questionScore => score += questionScore
const resetScore = () => score = 0
const renderScore = score => scoreParagraph.textContent = `${score}%`
const showModalResult = () => modalResult.style.display = 'block'
const closeModalResult = () => modalResult.style.display = 'none'

const renderFeedback = ({ className, textContent }) => {
  scoreFeedbackElement.textContent = textContent
  scoreFeedbackElement.setAttribute('class', className)
}

const checkAnswer = (userAnswer, index) => {
  const questionScore = maxScore / correctAnswers.length
  const isRightAnswer = userAnswer === correctAnswers[index]

  if(!isRightAnswer) return

  addToScore(questionScore)
}

const showScore = event => {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]

  userAnswers.forEach(checkAnswer)

  if (score <= dangerScore) renderFeedback(dangerFeedbackInfo)
  if (score === warningScore) renderFeedback(warningFeedbackInfo)
  if (score === sucessScore) renderFeedback(successFeedbackInfo)
  if (score === maxScore) renderFeedback(maxFeedbackInfo)

  renderScore(score)
  resetScore()
  showModalResult()
}

form.addEventListener('submit', showScore)
closeModalResultButton.addEventListener('click', closeModalResult)
