"use strict";function hasScrolled(){var e=tekiJS.window.scrollTop(),t=tekiJS.window.height(),i=tekiJS.document.height(),n="";if(!(Math.abs(lastScrollTop-e)<=delta)){for(var o in n=e>lastScrollTop?"down":e<lastScrollTop?"up":"none",0===e?n="start":e>=i-t&&(n="end"),throttleArr)"function"==typeof throttleArr[o]&&throttleArr[o](n,e,lastScrollTop,tekiJS.window);lastScrollTop=e}}function toggleArticles(){hiddenArticles.forEach(e=>{e.classList.toggle("d-none")}),areHiddenArticlesVisible=!areHiddenArticlesVisible,toggleButton.textContent=areHiddenArticlesVisible?"View Less Posts":"View More Posts"}var tekiJS={window:jQuery(window),document:jQuery(document),html:jQuery("html"),body:jQuery("body"),is_safari:/^((?!chrome|android).)*safari/i.test(navigator.userAgent),is_firefox:navigator.userAgent.toLowerCase().indexOf("firefox")>-1,is_chrome:/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),is_ie10:-1!==navigator.appVersion.indexOf("MSIE 10"),transitionEnd:"transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",animIteration:"animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration",animationEnd:"animationend webkitAnimationEnd"};tekiJS.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return tekiJS.isMobile.Android()||tekiJS.isMobile.BlackBerry()||tekiJS.isMobile.iOS()||tekiJS.isMobile.Opera()||tekiJS.isMobile.Windows()}};var resizeTimeout,resizeArr=[];tekiJS.window.on("load resize orientationchange",function(e){resizeArr.length&&(clearTimeout(resizeTimeout),resizeTimeout=setTimeout(function(){for(var t=0;t<resizeArr.length;t++)resizeArr[t](e)},250))}),tekiJS.debounceResize=function(e){"function"==typeof e?resizeArr.push(e):window.dispatchEvent(new Event("resize"))},tekiJS.addLedingZero=function(e){return("0"+e).slice(-2)};var didScroll,throttleArr=[],delta=5,lastScrollTop=0;tekiJS.window.on("load resize scroll orientationchange",function(){throttleArr.length&&(didScroll=!0)}),setInterval(function(){didScroll&&(didScroll=!1,window.requestAnimationFrame(hasScrolled))},250),tekiJS.throttleScroll=function(e){"function"==typeof e&&throttleArr.push(e)},"undefined"!=typeof cssVars&&cssVars({onlyVars:!0});const toggleButton=document.getElementById("toggleButton"),hiddenArticles=document.querySelectorAll(".col-md-4.d-none");let areHiddenArticlesVisible=!1;toggleButton.addEventListener("click",toggleArticles);const openModalButton=document.getElementById("openModal"),closeModalButton=document.getElementById("closeModal"),videoModal=document.getElementById("videoModal");openModalButton.addEventListener("click",()=>{videoModal.style.display="block"}),closeModalButton.addEventListener("click",()=>{videoModal.style.display="none"});