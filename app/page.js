
import Header from './components/header';


export default function Home() {
  return (
    <main>      
      <Header text="PetStarz" text2="The  Pawsitive  Online Source for Finding Pets."/>
              
      <div className="z-10 max-w-5xl w-screen h-screen items-center justify-between lg:flex ">
        <h1 
          className="text-3xl text-center hover:text-light-gray"
          style={{ fontFamily: 'Pacifico' }}>
            This is the home page.
        </h1>
        <p>
          This is some text.
        </p>
      </div>
    </main>
  );
}