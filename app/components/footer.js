import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <div className="bg-gray flex flew-row items-center justify-between h-14">
                <div className="max-w-7xl sm:px-6 lg:px-8 flex flex-row items-center justify-start">
                    <img src={'/logo-petstarz-w.svg'} alt="description" className="h-10 w-auto"/>
                </div>
            </div>
        </footer>
    )
}
        