const Home = () => {
  return (
    <main class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">Welcome!</h1>
        <p class="leading-normal text-lg sm:text-xl md:text-2xl lg:text-3xl">Want to learn some quotes?<br/>See quotes from:</p>
        <br/>
        <ul class="pl-6 list-disc text-2xl">
            <li><a href="/aurelius" class="font-semibold transition duration-500 hover:text-green-800">Marcus Aurelius</a></li>
            <li><a href="/confucius" class="font-semibold transition duration-500 hover:text-green-800">Confucius</a></li>
            <li><a href="/plato" class="font-semibold transition duration-500 hover:text-green-800">Plato</a></li>
            <li><a href="/laozi" class="font-semibold transition duration-500 hover:text-green-800">Laozi</a></li>
            <li class="opacity-0"><a href="/doctor" class="font-semibold transition duration-500 hover:text-green-800">The Doctor</a></li>
        </ul>
    </main>
  );
  };
  
  export default Home;  