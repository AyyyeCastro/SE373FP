
const playButton = document.getElementById("part2ColRightKirbyVideoPlayBtn");
const videoLink = 'https://youtu.be/H3LAkr0ANgw';

playButton.addEventListener("click", function() {
  Swal.fire({
    title: "Open YouTube?",
    text: "Kirby and the Forgotten Land's Trailer",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, Play",
    cancelButtonText: "Cancel",
    icon: '',
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(videoLink);
    }
  });
});

const playButtonFeatures = document.getElementById("part3ColLeftKirbyVideoPlayBtn");
const videoLinkFeatures = 'https://youtu.be/RiPcRCWzcGo';

playButtonFeatures.addEventListener("click", function() {
  Swal.fire({
    title: "Open YouTube?",
    text: "Kirby and the Forgotten Land's Power Trailer",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, Play",
    cancelButtonText: "Cancel",
    icon: '',
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(videoLink);
    }
  });
});