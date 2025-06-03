document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="container">
      <div class="footer-links">
        <div class="footer-column">
          <h3>התקווה 8</h3>
          <ul>
            <li><a href="#">אודות</a></li>
            <li><a href="hazon.html">החזון שלנו</a></li>
            <li><a href="group.html">צוות</a></li>
            <li><a href="#">שאלות נפוצות</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>יזמים</h3>
          <ul>
            <li><a href="#">הצג יוזמה</a></li>
            <li><a href="#">מצא שותפים</a></li>
            <li><a href="#">סיפורי הצלחה</a></li>
            <li><a href="#">משאבים</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>שותפים</h3>
          <ul>
            <li><a href="">הירשם כשותף</a></li>
            <li><a href="initiatives.html">מצא יוזמות</a></li>
            <li><a href="#">אפשרויות התנדבות</a></li>
            <li><a href="#">עדויות</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>צור קשר</h3>
          <ul>
            <li><a href="#">צור קשר</a></li>
            <li><a href="#">תמיכה</a></li>
            <li><a href="#">שותפויות</a></li>
            <li><a href="#">דרושים</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        © 2025 כל הזכויות שמורות לתקווה 8
      </div>
    </div>
  `;
  document.body.appendChild(footer);
});
