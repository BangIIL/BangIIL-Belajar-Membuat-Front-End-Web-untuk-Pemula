 //inisialiasi variabel untuk menampung elemen dokumen
const localTottalVictoryField = document.getElementById('local-total-victory-field');
const localMaximumAttemptField = document.getElementById('local-maximum-attempt-field');
const destroyDataButton = document.getElementById('destroy-data-button');
const playButton = document.getElementById('play-button');
const beforeGameDisplay = document.getElementById('before-game-display');
const duringGameDisplay = document.getElementById('during-game-display');
const afterGameDisplay = document.getElementById('after-game-display');
const answerButton1 = document.getElementById('answer-1-button');
const answerButton2 = document.getElementById('answer-2-button');
const answerButton3 = document.getElementById('answer-3-button');
const sessionUserAnswerField = document.getElementById('session-user-answer-field');
const sessionUserWrongAnswerField = document.getElementById('session-user-wrong-answer-field');
const sessionTrueAnswerField = documnet.getElementById('session-true-answer-field');
const sessionUserAttemptsField = document.getElementById('session-user-attempts-amount-field');

//inisialisasai fungsi untuk menghasilkan jawaban permainan
function getAnswer() {
  let answer =  '123'.split('');
  for ( let i =0; i < answer.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = answer[i];
    answer[i] = answer[j];
    answer[j] = tmp;
  }
  return answer.join('');
}

//inisialisasi key untuk session storage
const sessionAnswer = 'SESSION_ANSWER';
const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';

//inisialisasi key untuk local storage
const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
const localMaximumAttemptKey = 'LOCAL_MAXIMUM_ATTEMPTS';

window.addEventListener('load', function(){
  if (typeof (Storage) !== 'undefined'){
    // inisialisai semua item web storage yang kita akan gunakan jika belum ada
    if (sessionStorage.getItem(sessionAnswerKey) === null) {
      sessionStroage.setItem(sessionAnswerKey, '');
    }
    if (sessionStroage.getItem(sessionUserAttemptsKey) === null) {
      sessionStorage.setItem(sessionUserAttemptsKey, 0);
    }
    if (sessionStorage.getItem(sessionUserIsPlayingKey) === null) {
      sessionStorage.setItem(sessionUserIsPlayingKey, false);
    }
    if (localStorage.getItem(localTotalVictoryKey) === null) {
      localStorage.setItem(localTotalVictoryKey, 0);
    }
    if (localStorage.getItem(localMaximumAttemptKey) === null) {
      localStorage.setItem(localMaximumAttemptKey, 0);
    }
  } else {
    alert('Broswer yang Anda gunakan tidak mendukung Web Storage');
  }
})




