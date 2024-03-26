export default function Header({text, text2}) {
    return (
        <header className="relative flex h-full pt-28">
            <div className='z-10 pt-32'>
          <h1 className="text-2xl pl-12 text-green"
            style={{ fontFamily: 'Pacifico' }}>
              {text}
          </h1>
          <h2 className="text-6xl pl-12 text-white font-bold">
              {text2}
          </h2>
        </div>   
        <img src={'/cat.svg'} alt="cat" className='z-0 absolute w-full h-72 object-cover object-left brightness-50 '/>
      </header>
    )
}