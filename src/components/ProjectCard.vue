<template>
   <div class="card bm--card-equal-height">
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

<style lang="scss">

.bm--card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.bm--card-equal-height .card-footer {
   margin-top: auto;
}
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/base/_all";
@import '~bulma/sass/elements/_all';



/* Adding a custom 'card-footer-button that isn't yet supported by Bulma, courtesy of:
https://codepen.io/timacdonald/pen/bLGXxd
 */
 .card-footer-button {
  align-items: center;
  background-color: $button-background-color;
  color: $button-color;
  cursor: pointer;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;

  strong {
    color: inherit;
  }

  .icon {
    &,
    &.is-small,
    &.is-medium,
    &.is-large {
      height: 1.5em;
      width: 1.5em;
    }

    &:first-child:not(:last-child) {
      margin-left: calc(-0.375em - 1px);
      margin-right: 0.1875em;
    }

    &:last-child:not(:first-child) {
      margin-left: 0.1875em;
      margin-right: calc(-0.375em - 1px);
    }

    &:first-child:last-child {
      margin-left: calc(-0.375em - 1px);
      margin-right: calc(-0.375em - 1px);
    }
  }

  // States
  &:hover,
  &.is-hovered {
    color: $button-hover-color;
  }

  &:focus,
  &.is-focused {
    color: $button-focus-color;
  }

  &:active,
  &.is-active {
    color: $button-active-color;
  }

  // Colors
  &.is-text {
    background-color: transparent;
    color: $button-text-color;
    text-decoration: underline;

    &:hover,
    &.is-hovered,
    &:focus,
    &.is-focused {
      background-color: $button-text-hover-background-color;
      color: $button-text-hover-color;
    }

    &:active,
    &.is-active {
      background-color: darken($button-text-hover-background-color, 5%);
      color: $button-text-hover-color;
    }

    &[disabled] {
      background-color: transparent;
    }
  }

  @each $name, $pair in $colors {
    $color: nth($pair, 1);
    $color-invert: nth($pair, 2);

    &.is-#{$name} {
      background-color: $color;
      color: $color-invert;

      &:hover,
      &.is-hovered {
        background-color: darken($color, 2.5%);
        color: $color-invert;
      }

      &:focus,
      &.is-focused {
        color: $color-invert;
      }

      &:active,
      &.is-active {
        background-color: darken($color, 5%);
        color: $color-invert;
      }

      &[disabled] {
        background-color: $color;
      }

      &.is-inverted {
        background-color: $color-invert;
        color: $color;

        &:hover {
          background-color: darken($color-invert, 5%);
        }

        &[disabled] {
          background-color: $color-invert;
          color: $color;
        }
      }

      &.is-loading {
        &:after {
          border-color: transparent transparent $color-invert $color-invert !important;
        }
      }
    }
  }

  // Modifiers
  &[disabled] {
    background-color: $button-disabled-background-color;
    opacity: $button-disabled-opacity;
  }

  &.is-loading {
    color: transparent !important;
    pointer-events: none;

    &:after {
      @include loader;
      @include center(1em);

      position: absolute !important;
    }
  }

  &.is-static {
    background-color: $button-static-background-color;
    color: $button-static-color;
    pointer-events: none;
  }
}


</style>
