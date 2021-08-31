  
  const inputForm = document.getElementById("num-game")
  const finishNum = document.getElementById("finishNum")
  const GuessNum = document.querySelector("#GuessNum")
  const Result = document.querySelector(".result-message")
  const playbtn = document.querySelector("#play-btn")

  function getRandomNum(min, max) {
      min = Math.ceil(min);
      max = Math.ceil(max);
      return parseInt(Math.ceil(Math.random() * (min + max) + min));
  }

  function NumberGame(event) {
      event.preventDefault();
      const FinishNum = parseInt(finishNum.value);
      if (FinishNum < 0) {
          alert("please write number over 0")
          return
      } else {
          localStorage.setItem('FinishNum', FinishNum);

      }
      const userNum = parseInt(GuessNum.value);
      if (userNum < 0) {
          alert("please write number over 0")
      } else {
          localStorage.setItem('userNum', userNum)
      }
      localStorage.setItem('machineNum', (getRandomNum(0, localStorage.getItem('FinishNum'))))
  }

  function PrintResult(event) {
      event.preventDefault();

      const userNum = localStorage.getItem('userNum')
      const machineNum = localStorage.getItem('machineNum')
      const UserMess = inputForm.querySelector(".number-message")
      const ResultMess = inputForm.querySelector(".result-message")

      if (machineNum === userNum) {
          UserMess.innerHTML = `you choose: ${userNum}, the machine choose:${machineNum}`;
          ResultMess.innerHTML = "You Won!"
      } else {
          UserMess.innerHTML = `you choose: ${userNum}, the machine choose:${machineNum}`;
          ResultMess.innerHTML = "You Lost!"
      }
  }
  playbtn.addEventListener("click", PrintResult)
  playbtn.addEventListener("click", NumberGame)