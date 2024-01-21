const carrersPath = document.querySelectorAll(".list_form");
const linesPath = document.querySelectorAll(".line_point");

console.log({ carrersPath, linesPath });

for (let i = 0; i < carrersPath.length; i++) {
  const currentCarrerPath = carrersPath[i];
  const height = currentCarrerPath.clientHeight;

  const linePath = linesPath[i];
  linePath.style.height = `${height}px`;
}


//------- Video//

const buttons = document.querySelectorAll('.btn');
const videosContainer = document.querySelectorAll('.video-container');
const buttonsCloses = document.querySelectorAll('.close');

for (let i = 0; i < buttons.length; i++) {
  const watchButton = buttons[i];
  const videoContainer = videosContainer[i];
  const modalClose = buttonsCloses[i];
  const videoElement = videoContainer.querySelector('video');

  watchButton.addEventListener('click', () => {
    videoContainer.classList.add('show');
    videoElement.play();
  });

  modalClose.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    videoElement.pause();
    videoElement.currentTime = 0;
  });
}
