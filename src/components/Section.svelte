<script>
    import { faLaptop } from '@fortawesome/free-solid-svg-icons';
    import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
    import { faComments } from '@fortawesome/free-regular-svg-icons';
    import { FontAwesomeIcon } from 'fontawesome-svelte';

</script>

<div class="bg-[#003869] text-white p-16 flex justify-around text-center font-poppins flex-wrap">
    <div class="mt-8"> 
        <FontAwesomeIcon icon={faLaptop} size="4x"/>
        <h2 class="text-xl font-semibold">Curso 100% Online</h2>
        <span>Acesso imediato</span>
    </div>
    <div class="mt-8">
        <FontAwesomeIcon icon={faCheckSquare} size="4x"/>
        <h2 class="text-xl font-semibold">Curso 100% Online</h2>
        <span>Acesso imediato</span>
    </div>
    <div class="mt-8">
        <FontAwesomeIcon icon={faComments} size="4x"/>
        <h2 class="text-xl font-semibold">Curso 100% Online</h2>
        <span>Acesso imediato</span>
    </div>
</div>