
export default function Contact () {

    const config = {
        email : 'gssivaakm2001@gmail.com',
        phone: '+91 6383408106',
        address:'Kangayam, Tirupur,Tamilnadu'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-5 text-white'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
            <p className='py-2'><span className='font-bold'>Address :</span> {config.address}</p>
        </div>
    </section>
}