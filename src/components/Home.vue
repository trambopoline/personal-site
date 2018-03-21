<template>
  <div class="home">
    <section class="hero is-fullheight is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Hello, there!</h1>
          <h1 class="subtitle is-3">I'm Devin.</h1>
          <h1 class="subtitle is-4">I'm mostly a front-end developer, but I also like to take a stroll through the rest of the stack on occasion.</h1>
          <div class="buttons">
            <div class="container">
              <a class="button is-primary is-inverted is-outlined is-large" data-scroll href="#projects">Projects</a>
              <a class="button is-primary is-inverted is-outlined is-large" data-scroll href="#skills">Skills</a>
              <a class="button is-primary is-inverted is-outlined is-large" data-scroll href="#other-stuff">Other Stuff</a>
            </div>
          </div>
          <div class="buttons">
            <div class="container">
              <a class="button is-primary is-inverted is-outlined is-large" href="https://github.com/trambopoline" target="_blank">
                <span class="icon is-large">
                  <i class="fa fa-github fa-lg"></i>
                </span>
                <span>GitHub</span>
              </a>
              <a class="button is-primary is-inverted is-outlined is-large" href="https://www.linkedin.com/in/devin-dodson-0b891698/" target="_blank">
                <span class="icon is-large">
                  <i class="fa fa-linkedin fa-lg"></i>
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">

      </div>
    </section>
    <section class="section container" id="projects">
      <div class="columns has-text-centered">
        <div class="column">
          <ProjectCard icon="chrome" title="New Domain in New Tab" description="A highly configurable Chrome extension to automatically open off-site links in a new tab." >
            <a class="card-footer-button card-footer-item is-primary is-inverted" target="_blank" href="https://chrome.google.com/webstore/detail/new-domain-in-new-tab/nokdeeoiaiicgnonknihiccadnnmpeoh">
              <span>Get it for Chrome</span>
              <span class="icon ">
                <i class="fa fa-download fa-lg "></i>
              </span>
            </a>
            <a class="card-footer-button card-footer-item is-primary is-inverted" target="_blank" href="https://github.com/trambopoline/new-domain-in-new-tab">
              <span>Source</span>
              <span class="icon ">
                <i class="fa fa-code fa-lg "></i>
              </span>
            </a>
          </ProjectCard>
        </div>
        <div class="column">
          <ProjectCard icon="bomb" title="React Minesweeper" description="A minimalistic minesweeper game with customizable board size and mines." >
            <a class="card-footer-button card-footer-item is-primary is-inverted" target="_blank" href="https://minesweeper.devindodson.com/">
              <span>Play it here</span>
              <span class="icon ">
                <i class="fa fa-gamepad fa-lg "></i>
              </span>
            </a>
            <a class="card-footer-button card-footer-item is-primary is-inverted" target="_blank" href="https://github.com/trambopoline/react-minesweeper">
              <span>Source</span>
              <span class="icon ">
                <i class="fa fa-code fa-lg "></i>
              </span>
            </a>
          </ProjectCard>
        </div>
        <div class="column">
          <div class="box">
            Third column
          </div>
        </div>
      </div>
    </section>
    <section class="section container" id="skills">Skills Placeholder</section>
    <section class="section container" id="other-stuff">Other Stuff Placeholder</section>
  </div>
</template>

<script>
import SweetScroll from "sweet-scroll";
import "font-awesome/css/font-awesome.css";
import ProjectCard from "@/components/ProjectCard";

const scroller = new SweetScroll({
	/* some options */
});

export default {
	components: {
		ProjectCard
	}
};
</script>

<style>
.project-hero {
	justify-content: center;
}

/* Adding a custom 'card-footer-button that isn't yet supported by Bulma, courtesy of:
https://codepen.io/timacdonald/pen/bLGXxd
 */
.mw-30 {
	max-width: 30rem;
}

.mb-3 {
	margin-bottom: 3rem;
}

.card-footer-button {
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	background-color: white;
	color: #363636;
	cursor: pointer;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	padding: 0.75rem;
}

.card-footer-button strong {
	color: inherit;
}

.card-footer-button .icon,
.card-footer-button .icon.is-small,
.card-footer-button .icon.is-medium,
.card-footer-button .icon.is-large {
	height: 1.5em;
	width: 1.5em;
}

.card-footer-button .icon:first-child:not(:last-child) {
	margin-left: calc(-0.375em - 1px);
	margin-right: 0.1875em;
}

.card-footer-button .icon:last-child:not(:first-child) {
	margin-left: 0.1875em;
	margin-right: calc(-0.375em - 1px);
}

.card-footer-button .icon:first-child:last-child {
	margin-left: calc(-0.375em - 1px);
	margin-right: calc(-0.375em - 1px);
}

.card-footer-button:hover,
.card-footer-button.is-hovered {
	color: #363636;
}

.card-footer-button:focus,
.card-footer-button.is-focused {
	color: #363636;
}

.card-footer-button:active,
.card-footer-button.is-active {
	color: #363636;
}

.card-footer-button.is-text {
	background-color: transparent;
	color: #4a4a4a;
	text-decoration: underline;
}

.card-footer-button.is-text:hover,
.card-footer-button.is-text.is-hovered,
.card-footer-button.is-text:focus,
.card-footer-button.is-text.is-focused {
	background-color: whitesmoke;
	color: #363636;
}

.card-footer-button.is-text:active,
.card-footer-button.is-text.is-active {
	background-color: #e8e8e8;
	color: #363636;
}

.card-footer-button.is-text[disabled] {
	background-color: transparent;
}

.card-footer-button.is-white {
	background-color: white;
	color: #0a0a0a;
}

.card-footer-button.is-white:hover,
.card-footer-button.is-white.is-hovered {
	background-color: #f9f9f9;
	color: #0a0a0a;
}

.card-footer-button.is-white:focus,
.card-footer-button.is-white.is-focused {
	color: #0a0a0a;
}

.card-footer-button.is-white:active,
.card-footer-button.is-white.is-active {
	background-color: #f2f2f2;
	color: #0a0a0a;
}

.card-footer-button.is-white[disabled] {
	background-color: white;
}

.card-footer-button.is-white.is-inverted {
	background-color: #0a0a0a;
	color: white;
}

.card-footer-button.is-white.is-inverted:hover {
	background-color: black;
}

.card-footer-button.is-white.is-inverted[disabled] {
	background-color: #0a0a0a;
	color: white;
}

.card-footer-button.is-white.is-loading:after {
	border-color: transparent transparent #0a0a0a #0a0a0a !important;
}

.card-footer-button.is-black {
	background-color: #0a0a0a;
	color: white;
}

.card-footer-button.is-black:hover,
.card-footer-button.is-black.is-hovered {
	background-color: #040404;
	color: white;
}

.card-footer-button.is-black:focus,
.card-footer-button.is-black.is-focused {
	color: white;
}

.card-footer-button.is-black:active,
.card-footer-button.is-black.is-active {
	background-color: black;
	color: white;
}

.card-footer-button.is-black[disabled] {
	background-color: #0a0a0a;
}

.card-footer-button.is-black.is-inverted {
	background-color: white;
	color: #0a0a0a;
}

.card-footer-button.is-black.is-inverted:hover {
	background-color: #f2f2f2;
}

.card-footer-button.is-black.is-inverted[disabled] {
	background-color: white;
	color: #0a0a0a;
}

.card-footer-button.is-black.is-loading:after {
	border-color: transparent transparent white white !important;
}

.card-footer-button.is-light {
	background-color: whitesmoke;
	color: #363636;
}

.card-footer-button.is-light:hover,
.card-footer-button.is-light.is-hovered {
	background-color: #eeeeee;
	color: #363636;
}

.card-footer-button.is-light:focus,
.card-footer-button.is-light.is-focused {
	color: #363636;
}

.card-footer-button.is-light:active,
.card-footer-button.is-light.is-active {
	background-color: #e8e8e8;
	color: #363636;
}

.card-footer-button.is-light[disabled] {
	background-color: whitesmoke;
}

.card-footer-button.is-light.is-inverted {
	background-color: #363636;
	color: whitesmoke;
}

.card-footer-button.is-light.is-inverted:hover {
	background-color: #292929;
}

.card-footer-button.is-light.is-inverted[disabled] {
	background-color: #363636;
	color: whitesmoke;
}

.card-footer-button.is-light.is-loading:after {
	border-color: transparent transparent #363636 #363636 !important;
}

.card-footer-button.is-dark {
	background-color: #363636;
	color: whitesmoke;
}

.card-footer-button.is-dark:hover,
.card-footer-button.is-dark.is-hovered {
	background-color: #2f2f2f;
	color: whitesmoke;
}

.card-footer-button.is-dark:focus,
.card-footer-button.is-dark.is-focused {
	color: whitesmoke;
}

.card-footer-button.is-dark:active,
.card-footer-button.is-dark.is-active {
	background-color: #292929;
	color: whitesmoke;
}

.card-footer-button.is-dark[disabled] {
	background-color: #363636;
}

.card-footer-button.is-dark.is-inverted {
	background-color: whitesmoke;
	color: #363636;
}

.card-footer-button.is-dark.is-inverted:hover {
	background-color: #e8e8e8;
}

.card-footer-button.is-dark.is-inverted[disabled] {
	background-color: whitesmoke;
	color: #363636;
}

.card-footer-button.is-dark.is-loading:after {
	border-color: transparent transparent whitesmoke whitesmoke !important;
}

.card-footer-button.is-primary {
	background-color: #00d1b2;
	color: #fff;
}

.card-footer-button.is-primary:hover,
.card-footer-button.is-primary.is-hovered {
	background-color: #00c4a7;
	color: #fff;
}

.card-footer-button.is-primary:focus,
.card-footer-button.is-primary.is-focused {
	color: #fff;
}

.card-footer-button.is-primary:active,
.card-footer-button.is-primary.is-active {
	background-color: #00b89c;
	color: #fff;
}

.card-footer-button.is-primary[disabled] {
	background-color: #00d1b2;
}

.card-footer-button.is-primary.is-inverted {
	background-color: #fff;
	color: #00d1b2;
}

.card-footer-button.is-primary.is-inverted:hover {
	background-color: #f2f2f2;
}

.card-footer-button.is-primary.is-inverted[disabled] {
	background-color: #fff;
	color: #00d1b2;
}

.card-footer-button.is-primary.is-loading:after {
	border-color: transparent transparent #fff #fff !important;
}

.card-footer-button.is-link {
	background-color: #3273dc;
	color: #fff;
}

.card-footer-button.is-link:hover,
.card-footer-button.is-link.is-hovered {
	background-color: #276cda;
	color: #fff;
}

.card-footer-button.is-link:focus,
.card-footer-button.is-link.is-focused {
	color: #fff;
}

.card-footer-button.is-link:active,
.card-footer-button.is-link.is-active {
	background-color: #2366d1;
	color: #fff;
}

.card-footer-button.is-link[disabled] {
	background-color: #3273dc;
}

.card-footer-button.is-link.is-inverted {
	background-color: #fff;
	color: #3273dc;
}

.card-footer-button.is-link.is-inverted:hover {
	background-color: #f2f2f2;
}

.card-footer-button.is-link.is-inverted[disabled] {
	background-color: #fff;
	color: #3273dc;
}

.card-footer-button.is-link.is-loading:after {
	border-color: transparent transparent #fff #fff !important;
}

.card-footer-button.is-info {
	background-color: #209cee;
	color: #fff;
}

.card-footer-button.is-info:hover,
.card-footer-button.is-info.is-hovered {
	background-color: #1496ed;
	color: #fff;
}

.card-footer-button.is-info:focus,
.card-footer-button.is-info.is-focused {
	color: #fff;
}

.card-footer-button.is-info:active,
.card-footer-button.is-info.is-active {
	background-color: #118fe4;
	color: #fff;
}

.card-footer-button.is-info[disabled] {
	background-color: #209cee;
}

.card-footer-button.is-info.is-inverted {
	background-color: #fff;
	color: #209cee;
}

.card-footer-button.is-info.is-inverted:hover {
	background-color: #f2f2f2;
}

.card-footer-button.is-info.is-inverted[disabled] {
	background-color: #fff;
	color: #209cee;
}

.card-footer-button.is-info.is-loading:after {
	border-color: transparent transparent #fff #fff !important;
}

.card-footer-button.is-success {
	background-color: #23d160;
	color: #fff;
}

.card-footer-button.is-success:hover,
.card-footer-button.is-success.is-hovered {
	background-color: #22c65b;
	color: #fff;
}

.card-footer-button.is-success:focus,
.card-footer-button.is-success.is-focused {
	color: #fff;
}

.card-footer-button.is-success:active,
.card-footer-button.is-success.is-active {
	background-color: #20bc56;
	color: #fff;
}

.card-footer-button.is-success[disabled] {
	background-color: #23d160;
}

.card-footer-button.is-success.is-inverted {
	background-color: #fff;
	color: #23d160;
}

.card-footer-button.is-success.is-inverted:hover {
	background-color: #f2f2f2;
}

.card-footer-button.is-success.is-inverted[disabled] {
	background-color: #fff;
	color: #23d160;
}

.card-footer-button.is-success.is-loading:after {
	border-color: transparent transparent #fff #fff !important;
}

.card-footer-button.is-warning {
	background-color: #ffdd57;
	color: rgba(0, 0, 0, 0.7);
}

.card-footer-button.is-warning:hover,
.card-footer-button.is-warning.is-hovered {
	background-color: #ffdb4a;
	color: rgba(0, 0, 0, 0.7);
}

.card-footer-button.is-warning:focus,
.card-footer-button.is-warning.is-focused {
	color: rgba(0, 0, 0, 0.7);
}

.card-footer-button.is-warning:active,
.card-footer-button.is-warning.is-active {
	background-color: #ffd83d;
	color: rgba(0, 0, 0, 0.7);
}

.card-footer-button.is-warning[disabled] {
	background-color: #ffdd57;
}

.card-footer-button.is-warning.is-inverted {
	background-color: rgba(0, 0, 0, 0.7);
	color: #ffdd57;
}

.card-footer-button.is-warning.is-inverted:hover {
	background-color: rgba(0, 0, 0, 0.7);
}

.card-footer-button.is-warning.is-inverted[disabled] {
	background-color: rgba(0, 0, 0, 0.7);
	color: #ffdd57;
}

.card-footer-button.is-warning.is-loading:after {
	border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}

.card-footer-button.is-danger {
	background-color: #ff3860;
	color: #fff;
}

.card-footer-button.is-danger:hover,
.card-footer-button.is-danger.is-hovered {
	background-color: #ff2b56;
	color: #fff;
}

.card-footer-button.is-danger:focus,
.card-footer-button.is-danger.is-focused {
	color: #fff;
}

.card-footer-button.is-danger:active,
.card-footer-button.is-danger.is-active {
	background-color: #ff1f4b;
	color: #fff;
}

.card-footer-button.is-danger[disabled] {
	background-color: #ff3860;
}

.card-footer-button.is-danger.is-inverted {
	background-color: #fff;
	color: #ff3860;
}

.card-footer-button.is-danger.is-inverted:hover {
	background-color: #f2f2f2;
}

.card-footer-button.is-danger.is-inverted[disabled] {
	background-color: #fff;
	color: #ff3860;
}

.card-footer-button.is-danger.is-loading:after {
	border-color: transparent transparent #fff #fff !important;
}

.card-footer-button[disabled] {
	background-color: white;
	opacity: 0.5;
}

.card-footer-button.is-loading {
	color: transparent !important;
	pointer-events: none;
}

.card-footer-button.is-loading:after {
	-webkit-animation: spinAround 500ms infinite linear;
	animation: spinAround 500ms infinite linear;
	border: 2px solid #dbdbdb;
	border-radius: 290486px;
	border-right-color: transparent;
	border-top-color: transparent;
	content: "";
	display: block;
	height: 1em;
	position: relative;
	width: 1em;
	position: absolute;
	left: calc(50% - (1em / 2));
	top: calc(50% - (1em / 2));
	position: absolute !important;
}

.card-footer-button.is-static {
	background-color: whitesmoke;
	color: #7a7a7a;
	pointer-events: none;
}
</style>
