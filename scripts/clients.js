const clientImg = document.querySelector('.client-img');
const clientQuote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-container .author');
const clients = document.querySelectorAll('.client-list .client');

function changeClientsOpinion(){

  if(this.classList.contains('active')) return;

  const lastActive = document.querySelector('.client-list .client.active');

  lastActive.classList.remove('active');
  this.classList.add('active');

  clientImg.classList.add('change');
  clientQuote.classList.add('change');
  quoteAuthor.classList.add('change');

  clientImg.addEventListener('transitionend' , () => {
    clientImg.src = this.dataset.src;
    clientQuote.textContent = this.dataset.quote;
    quoteAuthor.textContent = this.dataset.author;
    clientImg.classList.remove('change');
    clientQuote.classList.remove('change');
    quoteAuthor.classList.remove('change');
  })
}

clients.forEach(client => client.addEventListener('click', changeClientsOpinion));
