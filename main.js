import {initScrollSuave, scrollHome }from "/JS/modules/scroll-suave.js";
import initAnimacaoScroll from "/JS/modules/scroll-animacao.js";
import initAccordion from "/JS/modules/accordion.js";
import initTabNav from "/JS/modules/tab-nav.js";
import {initModal}  from "/JS/modules/modal.js";
import iniTooltips from "/JS/modules/tooltip.js";


window.addEventListener('scroll', scrollHome)
initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
iniTooltips();
