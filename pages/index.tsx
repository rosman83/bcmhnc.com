import Image from 'next/image'

export default function Home() {
  const Button = function(props: any) {
    return (
      <button className='bg-[#152D81] text-lg transition hover:bg-blue-700 text-white font-bold py-4 px-4 rounded'>
          <a href={props.href}>{props.label}</a>
        </button>
    )
  }
  return (
    <main className='min-w-screen min-h-screen w-full h-full flex items-center justify-center'>
      <div className='absolute top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center'>
    <div className='py-10 px-6  backdrop-blur-md bg-white/80 rounded-lg flex flex-col items-center justify-center w-fit gap-6'>
      <div className='flex flex-row gap-4 items-center px-3'>
        <Image src='/logo.png' width={72} height={72} />
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Frederick & <br/>Sandulache Lab</h1>
      </div>
      <div className='flex flex-col gap-2 w-full md:mt-4'>
         <Button href='https://gp.bcmhnc.com' label='GenePattern Server' />
      </div>
    </div>
    </div>
    </main>
  )
}
