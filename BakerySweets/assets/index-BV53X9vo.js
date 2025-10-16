(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`content`);e.innerHTML=``;let t=document.createElement(`div`);t.innerHTML=`
    <div class="inner home-content">
      <h1>Sweet Treats</h1>
      <p>Welcome to Sweet Treats, your go-to spot for delicious desserts!</p>
    </div>
  `,e.appendChild(t)}function t(){let e=document.getElementById(`content`);e.innerHTML=``;let t=document.createElement(`div`);t.innerHTML=`
    <h1>Menu</h1>

    <!-- Buttons visible only on mobile -->
    <div class="menu-buttons">
      <button id="show-cakes">Cakes</button>
      <button id="show-cupcakes">Cupcakes</button>
    </div>

    <div class="menu-container">
      <div class="menu-section" id="cakes-section">
        <h2>Cakes</h2>
        <ul>
          <li><span class="item-name">Chocolate Cake</span><span class="price">₱25</span></li>
          <li><span class="item-name">Vanilla Cake</span><span class="price">₱25</span></li>
          <li><span class="item-name">Red Velvet Cake</span><span class="price">₱30</span></li>
        </ul>
      </div>

      <div class="menu-section" id="cupcakes-section">
        <h2>Cupcakes</h2>
        <ul>
          <li><span class="item-name">Chocolate Cupcake</span><span class="price">₱3</span></li>
          <li><span class="item-name">Vanilla Cupcake</span><span class="price">₱3</span></li>
          <li><span class="item-name">Red Velvet Cupcake</span><span class="price">₱4</span></li>
        </ul>
      </div>
    </div>
  `,e.appendChild(t);let n=document.getElementById(`show-cakes`),r=document.getElementById(`show-cupcakes`),i=document.getElementById(`cakes-section`),a=document.getElementById(`cupcakes-section`);function o(){window.innerWidth<=768?(i.style.display=`block`,a.style.display=`none`,document.querySelector(`.menu-buttons`).style.display=`flex`):(i.style.display=`block`,a.style.display=`block`,document.querySelector(`.menu-buttons`).style.display=`none`)}o(),window.addEventListener(`resize`,o),n.addEventListener(`click`,()=>{i.style.display=`block`,a.style.display=`none`}),r.addEventListener(`click`,()=>{i.style.display=`none`,a.style.display=`block`})}function n(){let e=document.getElementById(`content`);e.innerHTML=``;let t=document.createElement(`div`);t.innerHTML=`
<div class="inner">
  <h1>Contact Us</h1>
  <p>📍 123 Sweet Street, Cake City</p>
  <p>📞 Phone: (555) 123-4567</p>
  <p>📧 Email: hello@sweettreats.com</p>
  <p>🕐 Hours: Mon-Sat 9am-6pm</p>
</div>
  `,e.appendChild(t)}e();var r=document.getElementById(`home-tab`),i=document.getElementById(`menu-tab`),a=document.getElementById(`contact-tab`);r.addEventListener(`click`,()=>{e()}),i.addEventListener(`click`,()=>{t()}),a.addEventListener(`click`,()=>{n()});