<script lang="ts">
  let count = $state(0);
</script>

<button
  class="btn btn-lg btn-primary"
  onclick={() => {
    count++;
  }}
>
  {count}
  <div class="i-tabler:click size-5"></div>
</button>

