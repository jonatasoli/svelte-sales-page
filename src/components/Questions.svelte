<script>
  import Button from './Button.svelte'
  import Warranty from './Warranty.svelte';
</script>
<div>
  <Warranty />
  <div class="text-center">
    <h1 class="text-5xl font-poppins text-[#000032] font-bold">Perguntas e respostas</h1>
    <p class="font-poppins text-[#000032] font-bold pb-16 w-full md:w-2/4 m-auto">
      Seguem abaixo algumas dúvidas recorrentes que você pode vir a ter, assim
      você pode tirar todas as dúvidas necessárias e seguir tranquilo(a) na sua
      decisão.
    </p>
  </div>
  <div class="bg-[#f2f2f2]">
    <div class="flex justify-center  w-full 2xl:w-3/4 lg:w-11/12 m-auto flex-wrap">
      <div class="p-8 lg:w-2/5">
        <p class="font-poppins font-bold text-[#000032] text-sm ">Q. Onde receberei os dados para acessar o curso?</p>
        <p class="font-poppins text-sm">
          A. Após o pagamento, você receberá automaticamente em seu e-mail
          cadastrado os seus dados de acesso. É importante que você guarde este
          e-mail e, como sugestão, pode "favoritar" em seu navegador a página de
          acesso ao curso. Caso não encontre este e-mail, procure em sua caixa de
          spam e, ainda não encontrando, entre em contato com a equipe de suporte
          através do e-mail suporte@fabiananano.com
        </p>
        <p class="font-poppins font-bold text-[#000032] text-sm mt-8">Q. Como funciona a garantia?</p>
        <p class="font-poppins text-sm">
          A.Depois da compra, você tem 7 dias de garantia incondicional. Se por
          algum motivo você achar que o programa não correspondeu às suas
          expectativas, você pode pedir 100% do seu dinheiro de volta. A garantia
          é respaldada pelo Hotmart, o maior site de vendas de produtos digitais
          do Brasil.
        </p>
      </div>
      <div class="lg:h-[450px] lg:border-l border-gray-600 w-0 m-0"></div>
      <div class="p-8 lg:w-2/5">
        <p class="font-poppins font-bold text-[#000032] text-sm">Q. As aulas são todas online?</p>
        <p class="font-poppins text-sm">
          A. Sim, todas as aulas são online, em vídeo e com disponibilização de
          materiais de apoio, como PDFs. Não temos cursos presenciais. A partir do
          momento da efetivação do seu pagamento em nosso sistema, você terá
          acesso imediato ao conteúdo do curso, e poderá acessá-lo por 1 ano. Os
          dados de acesso serão enviados para o e-mail que você cadastrou no ato
          da compra do curso.
        </p>
        <p class="font-poppins font-bold text-[#000032] text-sm mt-8">Q. Quais as formas de pagamento?</p>
        <p class="font-poppins text-sm">
          A.Você poderá realizar o pagamento de três formas: no seu cartão de
          crédito, sendo possível realizar o parcelamento em até 12 vezes; através
          do Paypal; ou por boleto bancário. Caso opte por boleto bancário, sua
          inscrição será efetivada somente após a compensação do boleto. Não é
          possível realizar o parcelamento do pagamento através de boleto
          bancário.
        </p>
      </div>
      <Button />
    </div>
  </div>
</div>
