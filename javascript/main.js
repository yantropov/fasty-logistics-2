


window.addEventListener('scroll', function() {
  let header = document.querySelector('header');

  header.classList.toggle('scrolling-active', window.scrollY > 0);
})



const counters = document.querySelectorAll('.counter');
const speed = 500;

counters.forEach(counter => {
  const updateCount = () => {
    const target = counter.getAttribute('data-target');

    console.log(target);
  }

  updateCount();

});
