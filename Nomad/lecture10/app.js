function calculateBetweenDate() {
    const clockTitle = document.querySelector(".js-clock");
    const currentDate = new Date();
    const christmasDate = new Date(2021, 12, 25);

    const diffTime = christmasDate.getTime() - currentDate.getTime();
    const diffDate = new Date(0,0,0,0,0,0,diffTime)
    const diffDay = Math.floor(diffTime /(1000 * 60 * 60 * 24));
  
}

calculateBetweenDate();
