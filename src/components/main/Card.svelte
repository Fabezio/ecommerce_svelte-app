<div class="card">
  <slot />
</div>

<style lang='scss'>
@import '../../style/theme.scss';
  .card {
    width: 200px;
    // box-shadow: 1rem 1rem 1rem $primary-color;
    border-radius: 1rem;
    border: 1px solid transparent;
    padding: 1rem;
    margin: 1rem auto;
    background: $accent-color;
  }
</style>