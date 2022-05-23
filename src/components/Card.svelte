<script>
  export let image;
  export let title;
  export let content;
  export let classWidth;
</script>
<div class="rounded-b-3xl shadow-2xl w-full md:{classWidth} m-2">
  <img src="{image}" alt="" class="h-[205px] w-full" >  
  <div class="p-8">
      <p class="font-poppins font-bold text-center text-xl">{title}</p>
      <p class="font-poppins font-medium text-[#212529CC] tracking-wider text-justify pt-8 h-44">
        {content}
      </p>
  </div>
</div>
