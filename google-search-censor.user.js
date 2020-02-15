// ==UserScript==
// @name         google-seach-censor
// @include      /^(http|https):\/\/www\.google\..+\/search.*/
// @version      0.1.3
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
  'https://stackoverflow.com/search?back2stackoverflow=*',
  'http://qaru.site/questions/*',
  'https://qaru.site/questions/*',
  'http://fooobar.com/questions/*',
  'https://fooobar.com/questions/*',
  'http://askdev.info/questions/*',
  'https://askdev.info/questions/*',
  'https://ubuntugeeks.com/questions/*',
  'http://programmerz.ru/questions/*',
  'https://programmerz.ru/questions/*',
  'http://www.4answered.com/questions/*',
  'https://www.4answered.com/questions/*',
  'http://4answered.com/questions/*',
  'https://4answered.com/questions/*',
  'https://code-examples.net/*/q/*',
  'http://code.i-harness.com/*/q/*',
  'https://code.i-harness.com/*/q/*',
  'http://quabr.com/*/*',
  'https://quabr.com/*/*',
  'https://stackovernet.com/*/q/*',
  'https://*.stackovernet.com/*/q/*',
  'https://stackoverrun.com/*/q/*',
  'https://qna.one/*',
  'https://qa-help.ru/questions/*',
  'https://exceptionshub.com/*',
  'https://kotaeta.com/*',
  'https://ciupacabra.com/*',
  'https://de-vraag.com/*',
  'https://switch-case.ru/*',
  'https://switch-case.com/*',
  'https://es.switch-case.com/*',
  'https://pt.switch-case.com/*',
  'https://de.switch-case.com/*',
  'https://bn.switch-case.com/*',
  'https://ar.switch-case.com/*',
  'https://answer-id.com/*',
  'https://while-do.com/*',
  'https://365airsoft.com/*/questions/*',
  'https://codeday.me/*/*',
  'https://publish.codeday.me/post/*',
  'https://issue.life/questions/*',
  'https://*.coredump.biz/questions/*',
  'http://www.code-adviser.com/detail_*',
  'https://www.code-adviser.com/detail_*',
  'https://ask-ubuntu.ru/questions/*',
  'https://stackru.com/questions/*',
  'https://xbuba.com/questions/*',
  'http://web-answers.ru/*/*',
  'https://web-answers.ru/*/*',
  'https://sprosi.pro/questions/*',
  'https://askvoprosy.com/voprosy/*',
  'https://stackanswers.net/questions/*',
  'https://codengineering.ru/q/*',
  'https://overcoder.net/q/*',
  'https://coderquestion.ru/q/*',
  'http://qacode.ru/questions/*',
  'https://progaide.com/question/*',
  'http://stackz.ru/en/*/*',
  'http://stackz.ru/ru/*/*',
  'https://www.it-swarm.net/*/*',
  'https://bonprog.com/question/*',
  'https://bestecode.com/question/*',
  'https://progexact.com/question/*',
  'https://rstopup.com/*',
  'https://profikoder.com/question/*',
  'https://itranslater.com/qa/details/*',
  'https://www.itranslater.com/qa/details/*',
  'http://*.voidcc.com/question/*',
  'https://*.voidcc.com/question/*',
  'http://v-resheno.ru/*',
  'https://v-resheno.ru/*',
  'https://src-bin.com/*/q/*',
  'https://intellipaat.com/community/*/*',
  'https://oipapio.com/question-*',
  'https://www.oipapio.com/question-*',
  'https://qarus.ru/*',
  'https://quick-geek.github.io/answers/*',
  'https://weekly-geekly.github.io/articles/*',
  'https://askdev.ru/q/*',
  'https://vike.io/*/*/*',
  'http://www.uwenku.com/question/*',
  'https://www.uwenku.com/question/*',
  'https://www.soinside.com/question/*',
  'https://qa.1r1g.com/sf/ask/*',
  'https://icode9.com/*',
  'https://www.icode9.com/*',
  'https://e-learn.cn/topic/*',
  'https://www.e-learn.cn/topic/*',
  'https://stackoom.com/question/*',
  'https://codeindex.ru/q/*',
  'https://kompsekret.ru/q/*',
  'https://xszz.org/*/question-*',
  'https://www.xszz.org/*/question-*',
  'https://*.developreference.com/article/*',
  'https://*.develop-bugs.com/article/*',
  'https://www.thinbug.com/q/*',
  'https://*.programqa.com/question/*',
  'https://husl.ru/questions/*',
  'https://www.husl.ru/questions/*',
  'https://myht.ru/question/*',
  'https://www.myht.ru/question/*',
  'https://qarchive.ru/*',
  'https://*.switch-case.com/*',
  'https://bildiredi.com/*',
  'https://donolik.com/*',
  'https://pytannie.com/*',
  'https://sozdizimi.com/*',
  'https://zapytay.com/*',
  'https://coderoad.ru/*',
  'https://qastack.ru/*',
  'https://answeright.com/*',
  'https://www.answeright.com/*',
  'https://riptutorial'
  'https://ffff65535.com/*/q/*',
  'https://www.it-swarm.xyz/*/*',
  'https://www.it-swarm.asia/*/*',
  'https://www.it-swarm.dev/*/*',
  'http://uwenku.com/question/*',
  'https://uwenku.com/question/*',
  'http://*.uwenku.com/question/*',
  'https://*.uwenku.com/question/*',
  'https://brokencontrollers.com/faq/*',
  'https://www.brokencontrollers.com/faq/*',
  'https://itdaan.com/blog/*',
  'https://www.itdaan.com/blog/*',
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
