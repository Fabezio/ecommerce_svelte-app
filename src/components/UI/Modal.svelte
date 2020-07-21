<div class="backdrop"></div>
<div class="modal">
  <header>
    titre
  </header>
  <body>
  je suis une boite modal exterieure
    <slot name='content' />
  </body>
  <footer>
    <slot name='button' />
  </footer>
</div>


<style>
  .backdrop {
    position: absolute;
    top: 0;
    display: block;
    background-color: rgba(0,0,0,0.25);
    width: 100%;
    height: 100vh;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    display: block;
    background: white;
    z-index: 10;
  }
  header {
    background: #666;
    border-radius: 10px 10px 0 0;
    padding: 3px;
  }

  body {
    /* display: inline-block; */
    padding-top: 1rem;
    height: 50vh;
    border-top: 1px solid rgba(0,0,0,0.5);
  }

  footer {
    padding-top: 1rem;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
    display: block;
    width: 100%;
    height: 2rem;
    border-radius: 0 0 10px 10px;
  }
</style>