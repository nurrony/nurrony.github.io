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
    const newLink = 'http://www.nmrony.info';
    element.setAttribute('href', newLink);
  }

  ready(() => {
    changeLink();
    setTimeout(() => {
      window.location = 'http://www.nmrony.info';
    }, 5000);
  });
}
