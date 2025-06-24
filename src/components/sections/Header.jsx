import AlumnosHeader from '../../assets/images/alumnos-header.jpg';
import LogoGuanajuato from '../../assets/images/logo-guanajuato.png';
import LogoConaet from '../../assets/images/logo-conaet.png';
import LogoComeaa from '../../assets/images/logo-comeaa.png';
import LogoUtyp from '../../assets/images/logo-utyp.png';

function Header() {

  const INSTITUCIONES = [{
    nombre: 'Gobierno del Estado de Guanajuato',
    logo: LogoGuanajuato,
    link: 'https://guanajuato.gob.mx/'
  },
  {
    nombre: 'CONAET',
    logo: LogoConaet,
    link: 'https://www.conaet.edu.mx/'
  },
  {
    nombre: 'COMEAA',
    logo: LogoComeaa,
    link: 'https://comeaa.org.mx/'
  },
  {
    nombre: 'UTyP',
    logo: LogoUtyp,
    link: 'https://utyp.edu.mx/'
  }]



  return (
    <header className="w-full bg-grisoscuroutsma py-14">
      <div className='contenedor grid grid-cols-2'>
        <div className='h-full flex flex-col justify-center'>
          
          <h1 className='text-6xl text-white font-black mb-3'><span className='text-cyanutsma'>UT</span>SMA</h1>
          <p className='text-xl text-white/80 font-light mb-5'>Universidad Tecnológica de San Miguel de Allende</p> 
         
          <div className='flex flex-row gap-4 justify-start'>
            {INSTITUCIONES.map((institucion, index) => (
              <img src={institucion.logo} alt={institucion.nombre} key={index} className='aspect-auto w-[80px] object-contain' />
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={AlumnosHeader} alt="Alumnos Header" className="aspect-auto size-[320px] rounded-full" />
        </div>
        
      </div>

    </header>
  )
}

export default Header