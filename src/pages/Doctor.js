import QuoteGen from '../components/quote-gen.js';
const Doctor = () => {
    return (
      <main class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">You've found the secret Doctor Who page!<br/><br/>The Doctor Quotes:</h1>
            <QuoteGen author="doctor" />  
      </main>
    );
  };
  
  export default Doctor;  