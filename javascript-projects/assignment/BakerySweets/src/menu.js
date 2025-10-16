// menu.js
export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.innerHTML = `
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
  `;

  content.appendChild(menuDiv);

  const showCakesBtn = document.getElementById("show-cakes");
  const showCupcakesBtn = document.getElementById("show-cupcakes");
  const cakesSection = document.getElementById("cakes-section");
  const cupcakesSection = document.getElementById("cupcakes-section");

  function updateMenuDisplay() {
    // Detect if user is on mobile (width ≤ 768px)
    if (window.innerWidth <= 768) {
      // Show only one section at a time on mobile
      cakesSection.style.display = "block";
      cupcakesSection.style.display = "none";
      document.querySelector(".menu-buttons").style.display = "flex";
    } else {
      // Show both sections on desktop
      cakesSection.style.display = "block";
      cupcakesSection.style.display = "block";
      document.querySelector(".menu-buttons").style.display = "none";
    }
  }

  // Initialize display state
  updateMenuDisplay();

  // Listen for window resize (handle device rotation or resizing)
  window.addEventListener("resize", updateMenuDisplay);

  // Button events (only work in mobile view)
  showCakesBtn.addEventListener("click", () => {
    cakesSection.style.display = "block";
    cupcakesSection.style.display = "none";
  });

  showCupcakesBtn.addEventListener("click", () => {
    cakesSection.style.display = "none";
    cupcakesSection.style.display = "block";
  });
}
