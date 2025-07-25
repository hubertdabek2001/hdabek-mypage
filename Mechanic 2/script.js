function locationOpen(){
    var link = "https://www.google.com/maps/place/WulKar+Mobilny+Serwis+Samochodowy+MIELEC/@50.3277604,21.516509,19.5z/data=!3m1!5s0x473d154ec096d6c5:0x354108b84407692b!4m6!3m5!1s0x473d15e204834625:0x8d1d23c4e4aa33e5!8m2!3d50.32794!4d21.5166968!16s%2Fg%2F11vs3nzg3z?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D";
    window.open(link, '_target')
    }
function callNow(){

    const phoneNumber = '+48691487759';
    window.location.href = `tel:${phoneNumber}`;
}

// Otwieranie modali
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

// Zamknięcie po kliknięciu X
document.querySelectorAll('.close-btn').forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.modal-overlay').style.display = 'none';
  });
});

// Zamknięcie po kliknięciu w overlay
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.style.display = 'none';
  }
});



const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');
let currentSlide = 0;

// Tworzenie kropek
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Auto-play co 5 sekund
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

 let selectedRating = 0;
const stars = document.querySelectorAll('.star');

// Klikanie w gwiazdki
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value);
    updateStars(selectedRating);
  });

  // Podświetlanie przy najechaniu
  star.addEventListener('mouseenter', () => {
    const hoverValue = parseInt(star.dataset.value);
    updateStars(hoverValue);
  });

  // Powrót do wybranej oceny gdy kursor wyjdzie
  star.addEventListener('mouseleave', () => {
    updateStars(selectedRating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    star.classList.toggle('selected', parseInt(star.dataset.value) <= rating);
  });
}


    function sendFeedback() {
      const feedback = document.getElementById("feedback").value;
      const status = document.getElementById("status");

      if (!feedback) {
        alert('Przed wysłaniem napisz nam kilka słów.');
        return;
      }
      if (selectedRating === 0) {
        alert('Wybierz chociaż jedną gwiazdkę');
        return;
      }

      // Adres POST do formResponse
      const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd7pa9dn-ZyWM9w3xU0zy8LcUsBZJggnxGSHvcUsk5a4nzxpA/formResponse";
      
      // Dwa różne entry ID dla opinii i oceny
      const ENTRY_OPINIA = "entry.1167484280"; // <-- Wklej ID pola opinii
      const ENTRY_OCENA = "entry.642827723";  // <-- Wklej ID pola oceny

      const formData = new FormData();
      formData.append(ENTRY_OPINIA, feedback);
      formData.append(ENTRY_OCENA, selectedRating);

      fetch(FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      }).then(() => {
        alert('Dziękujemy za przesłanie opinii!')
        document.getElementById("feedback").value = "";
        updateStars(0);
        selectedRating = 0;
      }).catch(() => {
        alert("Wystąpił błąd. Spróbuj ponownie.");
        
      });
    }



        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }


function animateValue(id, start, end, duration, suffix = '') {
      let obj = document.getElementById(id);
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = Math.min((timestamp - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    }

    // Animacje liczb
    animateValue("cars", 0, 500, 2000, "+");
    animateValue("clients", 0, 700, 2000, "+");
    animateValue("distance", 0, 250, 2000, "k");

     const containers = document.querySelectorAll('.container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

      }
    });
  }, {
    threshold: 0.1
  });

  containers.forEach(container => {
    observer.observe(container);
  });

  function scrollAndClick() {
  const button = document.getElementById('btn-top');

  button.scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    button.click();
  }, 600);
}