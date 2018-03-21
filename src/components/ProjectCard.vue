<template>
   <div class="card">
            <header class="card-header">
              <div class="card-header-title project-hero">
                <span class="icon is-large has-text-primary">
                  <i :class="['fa fa-3x fa-' + icon]"></i>
                </span>
              </div>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="title">{{title}}</div>
              </div>
              <div class="content">
                {{description}}
              </div>
            </div>
            <footer class="card-footer">
				<slot>
					Placeholder
				</slot>
            </footer>
          </div>
</template>

<script>
export default {
	name: "ProjectCard",
	props: ["icon", "title", "description"]
}
</script>

<style>

</style>
