// ==UserScript==
// @name         google-seach-censor
// @include      /^(http|https):\/\/www\.google\..+\/search.*/
// @version      0.1
// @namespace    hexium310
// @author       Hexin
// @downloadURL  https://raw.githubusercontent.com/hexium310/google-search-censor/master/google-search-censor.user.js
// @updateURL    https://raw.githubusercontent.com/hexium310/google-search-censor/master/google-search-censor.user.js
// @homepageURL  https://github.com/hexium310/google-search-censor
// @grant        none
// ==/UserScript==

const blacklist = [
  'sejuku.net',
  'wa3.i-3-i.info',
  'tutorialmore.com',
]; // insert before

const elements = document.getElementsByClassName("g");

for (const element of elements) {
  const link = element.querySelector('a[ping]').href;
  const hiddenContent = document.createElement('div');
  hiddenContent.insertAdjacentHTML('beforeend', 'This content was hidden.<br>');
  hiddenContent.insertAdjacentHTML('beforeend', `<cite>${ link }</cite>`);

  for (const blacklistLink of blacklist) {
    const blacklistRegExp = new RegExp(blacklistLink.replace(/(\.|\/)/g, '\\$1').replace(/\*/g, '.*'))
    if (!blacklistRegExp.test(link)) {
      continue;
    }

    element.firstElementChild.appendChild(hiddenContent);
    element.getElementsByClassName('rc')[0].remove();
  }
}
