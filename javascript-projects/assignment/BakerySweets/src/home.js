export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  homeDiv.innerHTML = `
    <div class="inner home-content">
      <h1>Sweet Treats</h1>
      <p>Welcome to Sweet Treats, your go-to spot for delicious desserts!</p>
    </div>
  `;

  content.appendChild(homeDiv);
}
