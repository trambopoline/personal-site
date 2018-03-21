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
					<ProjectCard icon="chrome" 
								title="New Domain in New Tab" 
								description="A highly configurable Chrome extension to automatically open off-site links in a new tab."
								button1Text="Get it for Chrome"
								button1Link="https://chrome.google.com/webstore/detail/new-domain-in-new-tab/nokdeeoiaiicgnonknihiccadnnmpeoh"
								button1Icon="download"
								sourceLink="https://github.com/trambopoline/new-domain-in-new-tab"
								/>
				</div>
				<div class="column">
					<ProjectCard icon="bomb"
								title="React Minesweeper" 
								description="A minimalistic minesweeper game with customizable board size and mines."
								button1Text="Play it here"
								button1Link="https://minesweeper.devindodson.com/"
								button1Icon="gamepad"
								sourceLink="https://github.com/trambopoline/react-minesweeper"
								/>
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

<style lang="scss">





</style>
