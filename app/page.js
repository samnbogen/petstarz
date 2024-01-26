

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 
          className="text-3xl text-center text-white hover:text-light-violet z-40"
          style={{ fontFamily: 'Pacifico' }}>
            This is the home page.
        </h1>
        <p className="text-3xl text-center">
          This is some text.
        </p>
      </div>
    </main>
  );
}
