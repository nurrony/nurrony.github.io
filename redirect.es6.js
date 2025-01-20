{
  const ready = (fn) => {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  const changeLink = () => {
    const element = document.body.querySelector('#fallback-link');
    const newLink = 'https://www.nurrony.info';
    element.setAttribute('href', newLink);
  }

  ready(() => {
    changeLink();
    setTimeout(() => {
      window.location = 'https://www.nurrony.info';
    }, 5000);
  });
}
