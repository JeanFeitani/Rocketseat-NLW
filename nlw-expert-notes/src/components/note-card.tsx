export function NoteCard() {
    return (
        <button className="rounded-md text-left outline-none bg-slate-800 space-y-3 overflow-hidden relative p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 ">
            <span className='text-sm font-medium text-slate-300'>
                Há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus a eaque omnis, voluptas culpa inventore accusamus nemo doloribus cum ducimus impedit corrupti quia possimus laboriosam eos veritatis nisi nobis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus a eaque omnis, voluptas culpa inventore accusamus nemo doloribus cum ducimus impedit corrupti quia possimus laboriosam eos veritatis nisi nobis.
            </p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}