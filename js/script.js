// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika humburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// About Section Start
<script>
  const images = [
    'img/tentang1.png',
    'img/tentang2.png',
    'img/tentang3.jpg'
  ];
  let currentIndex = 0;
  const imageElement = document.getElementById('about-image');

  function showImage(index) {
    imageElement.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
</script>
// About Section End