<template>
	<div class="home">
		<section class="hero is-fullheight is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title is-1">Hello, there!</h1>
					<h1 class="subtitle is-3">I'm Devin.</h1>
					<h1 class="subtitle is-4">I'm mostly a front-end developer, but I also like to take a stroll through the rest of the stack on occasion.</h1>
					<div class="level">
						<div class="container">
							<a class="button is-primary is-inverted is-outlined is-large" data-scroll href="#projects">Projects</a>
							<a class="button is-primary is-inverted is-outlined is-large" data-scroll href="#skills">Skills</a>
							<a class="button is-primary is-inverted is-outlined is-large" data-scroll href="#other-stuff">Other Stuff</a>
						</div>
					</div>
					<div class="level">
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
		<section class="section container" id="projects">Projects Placeholder</section>
		<section class="section container" id="skills">Skills Placeholder</section>
		<section class="section container" id="other-stuff">Other Stuff Placeholder</section>
	</div>
</template>

<script>
import SweetScroll from "sweet-scroll";
import "font-awesome/css/font-awesome.css";
const scroller = new SweetScroll({
  /* some options */
});

export default {
  components: {}
};
</script>

<style>

</style>
