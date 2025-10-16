export function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = `
<div class="inner">
  <h1>Contact Us</h1>
  <p>📍 123 Sweet Street, Cake City</p>
  <p>📞 Phone: (555) 123-4567</p>
  <p>📧 Email: hello@sweettreats.com</p>
  <p>🕐 Hours: Mon-Sat 9am-6pm</p>
</div>
  `;

  content.appendChild(contactDiv);
}
