<script>
  import Image from "svimg";
</script>

<section>Hello world!</section>

<section>
  <figure>
        <img
          src="images/roma.jpg"
          alt="Roma"
          class="shadow"
          width="250"
        />
      <figcaption>Original</figcaption>
  </figure>
</section>

<section>
  <figure>
        <Image
          src="images/roma.jpg"
          alt="Roma"
          class="shadow"
          quality="60"
          immediate
          width="250"
        />
      <figcaption>Optimized</figcaption>
  </figure>
</section>

<style>
  .shadow {
    box-shadow: 0 8px 10px -5px rgb(0 0 0 / 25%);
  }
  section {
    margin-bottom: 40px;
  }
  figure {
    margin: 0;
  }
</style>