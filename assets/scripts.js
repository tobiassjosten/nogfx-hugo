const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'logs'
    }
  }
}).mount('#logs')


/******************************************************************************
 * ANSI colors for logs
 */

var ansi_up = new AnsiUp;

document.querySelectorAll('.log--body').forEach(log => {
  const html = log.dataset.log.replaceAll('\\r\\n', '\n')
  log.innerHTML = ansi_up.ansi_to_html(html);
})


/******************************************************************************
 * Grow main element to position footer in bottom
 */

const html = document.querySelector('html');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

(window.setmainsize = function() {
if (html !== null && main !== null && footer !== null) {
  main.style.minHeight = 'auto'
  let fmt = window.getComputedStyle(footer, null).getPropertyValue('margin-top')
  fmt = Number(fmt.substring(0, fmt.length-2))

  main.style.minHeight = (main.offsetHeight + (
    html.offsetHeight - footer.offsetHeight - footer.offsetTop + fmt
  )) + 'px'
}
})()

window.addEventListener('resize', function(event){
  setmainsize()
});
