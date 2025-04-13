document.querySelectorAll('a.NavLink').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwK5xzdCQqwEuCjNGlKzgoJG7E-Z4trIKDPcQV6ec4B7MQBjesaaCbqjOP8hnf03k_r1g/exec'

const form = document.forms['formContato']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Sua mensaguem foi enviada com sucesso" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})