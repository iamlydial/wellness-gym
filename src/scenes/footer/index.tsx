import Logo from '@/assets/Logo.png'


const Footer = () => {
  return <footer className='bg-primary-100 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img alt='logo' src={Logo}/>
            <p className='my-5'>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
            <p>© Evogym All rights Reserved</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Massa orci senectus</p>
            <p className='my-5'>Etiam is gravida et</p>
            <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Tempus metus risus volutpat egestas.</p>
            <p>(333)425-6825</p>
        </div>
    </div>

  </footer>
}

export default Footer