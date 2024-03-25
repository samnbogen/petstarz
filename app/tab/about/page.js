import Header from '/app/components/header.js';
import Link from 'next/link';

export default function About() {
    return (
        <main style={{ 
            position: "relative",
            minHeight: "180vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <Header text="About Us"/>
            <div className="flex flex-col justify-between text-sm pt-36 p-20">
                <p className="text-lg">
                    At PetStarz, our vision is to revolutionize the pet sourcing industry by providing a trusted, safe, and ethical online platform where people can find and connect with reputable pet suppliers. We strive to create a centralized hub that empowers individuals and families to make informed decisions when bringing a new furry (or non-furry) friend into their lives. By fostering transparency, promoting responsible pet ownership, and combating industry fraud, we aim to ensure the well-being and happiness of both pets and their human companions.
                </p>
                <h1 className='text-5xl my-6 text-green'>
                    Core Values:
                </h1>
                <h1 className='text-2xl my-6'>
                    Trust and Transparency: 
                </h1>
                <p className="text-lg">
                    We believe in building trust through transparency. We are committed to providing accurate and reliable information about pet suppliers, including their practices, certifications, and customer reviews. We strive to be open and honest in all our interactions, ensuring that our users can make well-informed choices.
                </p>
                <h1 className='text-2xl my-6'>
                    Ethical Sourcing: 
                </h1>
                <p className="text-lg">
                    We are passionate about promoting ethical sourcing of pets. We work closely with reputable breeders, shelters, and rescue organizations, ensuring that the pets featured on our platform come from responsible and caring environments. We encourage adoption and aim to reduce the demand for pets from unscrupulous sources.
                </p>
                <h1 className='text-2xl my-6'>
                    Pet Welfare: 
                </h1>
                <p className="text-lg">
                    The well-being of pets is at the heart of everything we do. We advocate for responsible pet ownership and provide educational resources to help individuals understand the needs and requirements of different pet species. We support initiatives that prioritize the health, happiness, and welfare of all animals.
                </p>
                <h1 className='text-2xl my-6'>
                    User Empowerment: 
                </h1>
                <p className="text-lg">
                    We believe in empowering our users to make informed decisions. Our platform offers access to knowledgeable professionals that have comprehensive information about various pet species, including their characteristics, care requirements, and potential challenges. We provide tools and resources to help individuals find the perfect pet that suits their lifestyle and preferences.
                </p>
                <h1 className='text-2xl my-6'>
                    Community and Support:
                </h1>
                <p className="text-lg">
                    We strive to build a strong community of pet lovers and suppliers. We encourage collaboration, knowledge sharing, and positive interactions among our users. We offer a supportive environment where individuals can connect with each other, seek advice, and share their experiences as pet owners.
                </p>
                <p className="text-lg">
                    By embodying these core values, PetStarz aims to create a reliable and reputable platform that sets new industry standards for safe and ethical pet sourcing. Together with our community, we aspire to make a meaningful and lasting impact on the lives of pets and their human companions.
                </p>
                <div className="mx-auto relative" style={{ marginTop: '100px' }}>
                <Link 
                        href="/tab/signup" 
                        className="bg-green hover:bg-gray text-white text-center font-bold text-4xl py-4 w-52 h-52 flex items-center justify-center rounded-full relative z-10"> {/* Add relative positioning and z-index to bring the button to the front */}
                        Sign Up Today!
                    
                    <img 
                        src="/20220308_154331.jpg"
                        alt="Small Image"
                        className="absolute left-[-160px] top-[-50px] w-18 h-18 rounded-full"
                    />                 
                    </Link> 
                </div>
                <div className="flex justify-center my-8 text-2xl">OR</div>
                <div className="flex justify-center mt-4 relative" style={{ marginTop: '208px' }}>
                <Link href={"/tab/pets"} className="bg-green hover:bg-gray text-white font-bold py-2 px-4 rounded flex items-center justify-center relative z-10">
                    Check Available Pets
                <img 
                    src="/PetStarz3.png"
                    alt="Image Alt Text"
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-25 rounded z-0 cursor-pointer"
                    style={{ zIndex: -1, top: 'calc(50% - 120px)' }}
                />
                </Link>
            </div>
            </div>
        </main>
    );
}