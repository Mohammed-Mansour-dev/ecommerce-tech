import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="/login.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
       

        <h2 className="mt-6 [text-shadow:_5px_-1px_7px_black;] text-[#f36b16]  text-2xl font-bold sm:text-3xl md:text-4xl">
          Welcome to Tech-Academy
        </h2>

        <p className="mt-4 [text-shadow:_5px_-1px_7px_black;] text-[#f36b16]  leading-relaxed ">
          Start your learning right now
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-10 block lg:hidden">
       
          <h1 className="mt-5  [text-shadow:_5px_-1px_7px_white;] text-black  text-2xl font-bold sm:text-3xl md:text-4xl">
          Welcome to Tech-Academy
          </h1>

          <p className="mt-4 leading-relaxed  [text-shadow:_5px_-1px_7px_white;] text-black ">
          Start your learning right now
          </p>
        </div>

     <div className="max-md:mt-5" >
        <SignIn/>
     </div>
      </div>
    </main>
  </div>
</section>
  )
}