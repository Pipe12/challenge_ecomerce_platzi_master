document.addEventListener("DOMContentLoaded", (event) => {
  //Creo elementos 
  const cardOne = document.getElementById('card_one');
  const cardTwo = document.getElementById('card_two');
  const cardThree = document.getElementById('card_three');
  const btnClose = document.getElementById('btn_close');
  const modal = document.getElementById('modal');

  function toggleBtn() {
    modal.classList.toggle('hidden');
  }

  cardOne.addEventListener('click', toggleBtn)
  cardTwo.addEventListener('click', toggleBtn)
  cardThree.addEventListener('click', toggleBtn)
  btnClose.addEventListener('click', toggleBtn)
})