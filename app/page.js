import Header from './components/header';
import AuthProvider from './auth-provider';

export default function Home() {
  return (
    <div>
      <Header text="PetStarz" text2="The  Pawsitive  Online Source for Finding Pets."/>
      <main style={{ margin: '0px 300px' }}>      
        <h1 
          className="text-5xl hover:text-light-gray"
          style={{ fontFamily: 'Pacifico', fontWeight: 'bold', marginBottom: '40px', marginTop: '100px' }}>
          Why Should You Choose PetStarz?
        </h1>
        <h1 
          className="text-3xl hover:text-light-gray"
          style={{ fontFamily: 'Pacifico', fontWeight: 'bold', marginBottom: '20px' }}>
          We are tackling the hard issues within the pet industry!
        </h1>
        <h1 
          className="text-2xl hover:text-light-gray"
          style={{ fontFamily: 'Pacifico', marginBottom: '20px' }}>
          At PetStarz, we are a dynamic and innovative startup on a mission to revolutionize the pet industry. Our vision
          is to create a groundbreaking SaaS online platform that transforms the way people source pets-ethically and safely.
          We believe in the power of responsible pet ownership and the profound impact it has on the lives of both humans and
          their pets.
        </h1>
        <h1 
          className="text-2xl hover:text-light-gray"
          style={{ fontFamily: 'Pacifico', marginBottom: '20px'  }}>
          As PetStarz embarks on this journey, it's important to acknowledge that the challenges in the pet industry are complex 
          and multifaceted and it will take time and dedication to ensure the well-being, ethical treatment, and responsible ownership 
          of pets. However, our commitment to uniting various stakeholders, enhancing transparency, and providing valuable resources is 
          a testament to our dedication to driving positive change.
        </h1>
      </main>
    </div>
  );
}
