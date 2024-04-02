import Header from './components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header text ="Welcome To Petstarz" text2="the pawsitive online source for finding pets."/>
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
            As PetStarz embarks on this journey, it&apos;s important to acknowledge that the challenges in the pet industry are complex 
            and multifaceted and it will take time and dedication to ensure the well-being, ethical treatment, and responsible ownership 
            of pets. However, our commitment to uniting various stakeholders, enhancing transparency, and providing valuable resources is 
            a testament to our dedication to driving positive change.
          </h1>
        </div>
        <div className="flex flex-row justify-center mt-20">                    
                    <div className="mx-28">                
                        <Link 
                                href="/tab/signup" 
                                className="bg-green hover:bg-gray text-white text-center font-bold text-4xl py-4 w-52 h-52 flex items-center justify-center rounded-full relative z-10 ">
                                Sign Up Today!
                            
                            <img 
                                src="/20220308_154331.jpg"
                                alt="Small Image"
                                className="absolute left-[-160px] top-[-50px] w-18 h-18 rounded-full"
                            />                 
                        </Link> 
                    </div>
                    <div className="flex justify-center my-8 text-2xl">OR</div>
                        <div className="flex justify-center m-28 relative h-28">
                        <Link href={"/tab/pets"} className="bg-green hover:bg-gray text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center relative z-10">
                            <p className='mt-10'>Check Available Pets</p>
                        <img 
                            src="/PetStarz3.png"
                            alt="Image Alt Text"
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-25 rounded z-0 cursor-pointer"
                            style={{ zIndex: -1, top: 'calc(50% - 120px)', borderRadius: '50px 50px 0 0'  }}
                        />
                        </Link>
                    </div>
                </div>
      </main>
    </div>
  );
}