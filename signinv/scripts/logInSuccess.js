"use strict";

function logInSuccessTmpl() {
    return `<div class="log-in-success-container wrapper">
<h1 class="h1">
  Hello, UserName!
  <span class="h1__subtitle">Choose your project:</span>
</h1>
<div class="scrollbar" id="style-1">
    <div class="force-overflow"></div>
    <ol id="projectList" class="project-list">
  <li class="project-list__item">Flirchi</li>
  <li class="project-list__item">io</li>
  <li class="project-list__item">company name</li>
  <li class="project-list__item">face.news</li>
  <li class="project-list__item">alpha</li>
  <li class="project-list__item">beta</li>
  <li class="project-list__item">gamma</li>
</ol>
</div>

</div>`
}

function logInSuccess() {
    let container = document.querySelector('.c-form');
    container.innerHTML = logInSuccessTmpl();
}