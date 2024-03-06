
let currentImageIndex = 0;
  const images = document.querySelectorAll('#part3Row3ColLeftCustomContainer img');
  const kirbyDescription = {
    sleepKirby: "Zzz... Just one more minute, please... Zzz... Oh, c'mon... I'm too sleepy... Zzz... Just let me recover some health with a bit of rest... Zzz... Zzz... Zzzzz…",
    rangerKirby: "Time for some shooting-star sharpshooting! Pew, pew! Hold the button down to charge and aim, then let go to send a sparkling shot flying. Charge it up for bigger blasts!",
    fireKirby: "This ability is hot, hot, hot! Light fuses, burn through obstacles, and toast your enemies with the power of a raging fire. Run, jump, then attack to blast forward as a fireball!",
  };
  const kirbyName = {
    sleepKirby: "Sleep",
    rangerKirby: "Ranger",
    fireKirby: "Fire",
  };
         
  function showImage(index) {
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');

    // ID of current image.
    const activeImageId = images[index].id;

    // when image changes, update that ID.
    const kirbyDescText = document.getElementById('kirbyDescription');
    kirbyDescText.textContent = kirbyDescription[activeImageId] || "Kirby list empty.";

    const KirbyNameText = document.getElementById('kirbyName');
    KirbyNameText.textContent = kirbyName[activeImageId] || "Kirby list empty.";
  }

  function prevImage() {
  currentImageIndex = (currentImageIndex === 0) ? (images.length - 1) : (currentImageIndex - 1);
  showImage(currentImageIndex);
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : (currentImageIndex + 1);
    showImage(currentImageIndex);
  }
               
  // first image at index 0 is shown. Not a previous or next image, the origin.
  showImage(currentImageIndex);

  function animateIn(image) {
  gsap.fromTo(image, {
    opacity: 0,
    x: -50 // off sets origin, so it can animate in.
  }, {
    opacity: 1,
    x: 0, // slide in from left since it's origin was off-set (on purpose)
    duration: 0.1 
  });
}

// Function to animate the image out
function animateOut(image) {
  gsap.to(image, {
    opacity: 0,
    x: 50, // Slide out right, since it's the next button, not previous.
    duration: 0.1, 
    onComplete: () => {
      image.classList.remove('active'); 
    }
  });
}

function showImage(index) {
  images.forEach(image => {
    if (image.classList.contains('active')) {
      animateOut(image);
    }
  });

  images[index].classList.add('active');
  animateIn(images[index]);
  
  const activeImageId = images[index].id;
  const kirbyDescText = document.getElementById('kirbyDescription');
  kirbyDescText.textContent = kirbyDescription[activeImageId] || "Kirby list empty.";
  const KirbyNameText = document.getElementById('kirbyName');
  KirbyNameText.textContent = kirbyName[activeImageId] || "Kirby list empty.";
}
