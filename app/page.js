import Header from './components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header text="PetStarz" text2="The  Pawsitive  Online Source for Finding Pets."/>
      <main className='mt-20 p-20'>      
        <h1 
          className="text-6xl text-green font-black  text-center"
          style={{ fontFamily: 'Pacifico' }}>
          Why Should You Choose PetStarz?
        </h1>
        <div className='p-20'>
          <h1 
            className="text-4xl font-bold mb-6">
            We are tackling the hard issues within the pet industry!
          </h1>
          <h1 
            className="text-2xl mb-5 text-justify">
            At PetStarz, we are a dynamic and innovative startup on a mission to revolutionize the pet industry. Our vision
            is to create a groundbreaking SaaS online platform that transforms the way people source pets-ethically and safely.
            We believe in the power of responsible pet ownership and the profound impact it has on the lives of both humans and
            their pets.
          </h1>
          <h1 
            className="text-2xl text-justify">
            As PetStarz embarks on this journey, it's important to acknowledge that the challenges in the pet industry are complex 
            and multifaceted and it will take time and dedication to ensure the well-being, ethical treatment, and responsible ownership 
            of pets. However, our commitment to uniting various stakeholders, enhancing transparency, and providing valuable resources is 
            a testament to our dedication to driving positive change.
          </h1>
        </div>
        <div class="flex justify-center">
        <Link 
          href="/tab/signup" 
          className="bg-green hover:bg-gray text-white text-center font-bold text-4xl py-4 w-52 h-52 flex items-center justify-center rounded-full">
          Sign Up Today!
        </Link>                  
        </div>
        <div className="border-t border-gray w-full my-8"></div>
        <div class="flex justify-center mt-4">          
          <Link
            href={"/tab/pets"}
            className="bg-green hover:bg-gray text-white font-bold py-2 px-4 rounded">
            Check Available Pets
          </Link> 
        </div>
      </main>
    </div>
  );
}
