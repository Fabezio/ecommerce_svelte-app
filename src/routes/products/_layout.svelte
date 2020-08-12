<script>
    import products from '../../store/products'
    $: console.log(products)
</script>

<div>
    <slot />
</div>