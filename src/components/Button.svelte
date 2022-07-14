<script>
  function addToCart() {
    fbq('track', 'AddToCart');
    fbq('track', 'InitiateCheckout');
    fbq('track', 'CompleteRegistration');
  }
</script>
<div class="my-12 h-30 bg-[#003869] rounded py-4 px-2  shadow-2xl  lg:w-[400px] lg:mx-auto m-4">
  <button on:click={addToCart}>
    <a
        class="text-white font-bold text-xl font-poppins text-center"
        href="https://pay.hotmart.com/D65291467L?checkoutMode=10"> 
        <p>> SIM, EU QUERO COMEÇAR AGORA!</p>
      </a> 
  </button>
</div>
