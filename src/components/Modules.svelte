<script>
  const modules = [
    {
      image:
        'images/digitando-na-franca.webp',
      title: 'Modulo 0',
      content:
        ' Neste módulo, você vai aprender as técnicas e ferramentas para poder aproveitar os conteúdos e realizar as tarefas dos módulos seguintes.',
    },
    {
      image:
        'images/cafe-frances.webp',
      title: 'Modulo 1',
      content:
        ' Nesta etapa, você vai aprender a cumprimentar, se despedir e a se apresentar em francês, treinando a pronúncia desde a primeira aula.',
    },
    {
      image:
        'images/estudando-frances.webp',
      title: 'Modulo 2',
      content:
        ' Aqui, você aprenderá a falar dos seus gostos, estudos, trabalho e atividades semanais em francês.',
    },
    {
      image:
        'images/10-min.webp',
      title: 'Modulo 3',
      content:
        ' Aqui, estudaremos itinerários e lugares na cidade, e você aprenderá a se locomover em francês.',
    },
    {
      image:
        'images/11-min.webp',
      title: 'Modulo 4',
      content:
        ' Neste módulo, você aprenderá a falar da sua rotina, dos seus horários e das suas obrigações em francês.',
    },
    {
      image:
        'images/9-min.webp',
      title: 'Modulo 5',
      content:
        ' Nesta etapa, você saberá como propor uma saída em francês e como se expressar em lugares turísticos e no restaurante.',
    },
  ]
  import Card from './Card.svelte'
</script>

<div>
  <h1 class="font-poppins font-extrabold text-4xl text-center m-12">
    Veja o que você vai aprender no curso:
  </h1>
  <div class="flex justify-center items-center w-full 2xl:w-3/4 lg:w-11/12 m-auto flex-wrap">
    {#each modules as module}
      <Card
        image={module.image}
        title={module.title}
        content={module.content}
        classWidth='md:w-[360px]' />
    {/each}
  </div>
</div>
