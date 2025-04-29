document.querySelector('button').onclick = () => {
    document.querySelector('.card-info p').innerText = document.querySelectorAll('.placeholder')[0].value;
    document.querySelector('.card-number').innerText = document.querySelectorAll('.placeholder')[1].value;
    document.querySelectorAll('.card-info p')[1].innerText = document.querySelectorAll('.placeholder')[2].value + '/' + document.querySelectorAll('.placeholder')[3].value;
    document.querySelector('.card2 p').innerText = document.querySelectorAll('.placeholder')[4].value;
  }