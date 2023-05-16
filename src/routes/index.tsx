import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {

  const pokemonId = useSignal(1);//primitivos, boolean, strings

  return (
    <>
      <span class="text-2xl">Buscador</span>
      <span class="text-9xl">{pokemonId}</span>

  <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}   alt="imagen pokemon" style={{ width: '200px' }} />

      <div>
        <button onClick$={ () => pokemonId.value--} class= "btn btn-primary mr-2">Anterior</button>
        <button onClick$={ () => pokemonId.value++} class="btn btn-primary ">Siguiente</button>
      </div>



    </>
  );
});










export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
