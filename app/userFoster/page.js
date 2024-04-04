import Header from '/app/components/header.js';

export default function Page() {

    return (
        <main>
            <Header text="Profile"/>
            <div className='flex flex-col md:flex-row mt-36 mb-12'>
                <p className='h-40'>SOMETHING</p>
            </div>
        </main>
    )
}