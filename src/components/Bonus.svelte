<script>
    const modules = [
      {
        image:
          'images/conversando-em-frances.webp',
        title: 'Bônus 1',
        content:
          ' Uma aula ensinando como treinar a sua escuta do francês, com bastante material para estudar.',
      },
      {
        image:
          'images//bliblioteca-em-paris.webp',
        title: 'Bônus 2',
        content:
          ' Uma aula útil ensinando o alfabeto e como soletrar seu nome e falar seu e-mail em francês.',
      },
      {
        image:
          'images/noite-em-paris.webp',
        title: 'Bônus 3',
        content:
          'Uma aula cultural ensinando como dizer número de telefone na França.',
      },
      {
        image:
          'images/cidade-francesa.webp',
        title: 'Bônus 4',
        content:
          'Uma aula cultural ensinando sobre os arrondissements (distritos) em Paris, Lyon e Marseille.',
      },
    ]
    import Card from './Card.svelte'
  </script>
  
  <div>
    <h1 class="font-poppins font-extrabold text-4xl text-center m-12">
        E ainda vou te dar<br/>
        4 bônus especiais:
    </h1>
    <div class="flex justify-center items-center 2xl:w-3/4 lg:w-11/12 m-auto flex-wrap grow-0">
      {#each modules as module}
        <Card
          image={module.image}
          title={module.title}
          content={module.content}
          classWidth='md:w-[265px]' />
      {/each}
    </div>
  </div>
  