const video = document.querySelector('.video');
const link = video.querySelector('.video__link');
const button = video.querySelector('.video__button');

function setupVideo() {
  const path = link.href;
  const id = parseVideoID(path);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
}

function parseVideoID(path) {
  const regexp = /(?!=)\w+$/;
  const match = path.match(regexp);

  return match[0];
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.classList.add('video__link');
  iframe.setAttribute('src', generateURL(id));
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');

  return iframe;
}

function generateURL(id) {
  const baseIframeURL = 'https://www.youtube.com/embed/';
  const query = '?rel=0&showinfo=0&autoplay=1';

  return baseIframeURL + id + query;
}

setupVideo();
