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
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="../assets/new-domain-in-new-tab_bannerImage_920x680.png" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<!-- <div class="media-left">
									<figure class="image is-48x48">
										<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
									</figure>
								</div> -->
							</div>
							<div class="content">
								<div class="title">New Domain in New Tab</div>
							</div>
							<div class="content">
							<span class="icon is-large">
								<i class="fa fa-chrome fa-lg"></i>
							</span>
								Automatically open off-site links in a new tab. Configurable.
							</div>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="box">
						Second column
					</div>
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
const scroller = new SweetScroll({
  /* some options */
});

export default {
  components: {}
};
</script>

<style>

</style>
