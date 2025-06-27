import { IconCalendar, IconCap, IconPeople, IconHoja, IconArrowRight } from "../../helpers/icons";
import ImagenAlumnos from '../../assets/images/alumnos-header.jpg'

function Enlaces() {

    const ENLACES = [
        {
            title: "Convocatorias",
            icono: (props) => <IconHoja {...props} />,
            link: "https://www.utsma.edu.mx/convocatorias",
        },
        {
            title: "Oferta Educativa",
            icono: (props) => <IconCap {...props} />,
            link: "https://www.utsma.edu.mx/oferta-educativa",
        },
        {
            title: "Aspirantes",
            icono: (props) => <IconPeople {...props} />,
            link: "https://www.utsma.edu.mx/aspirantes",
        },
        {
            title: "Calendario Escolar",
            icono: (props) => <IconCalendar {...props} />,
            link: "https://www.utsma.edu.mx/calendario-escolar",
        }
    ];

    return (
        <section className="w-full py-[100px]">
            <div className="contenedor">
                <div className="grid grid-cols-4 gap-4">
                    {ENLACES.map((enlace, index) => (
                        <a href="{enlace.link}" target="_blank" rel="noopener noreferrer" key={index} className="flex flex-row items-center justify-center gap-3 bg-grisclaroutsma py-4 rounded-lg hover:bg-grisoscuroutsma transition-colors group">
                            {enlace.icono({
                                className: "w-8 h-8 text-gray-500 group-hover:text-cyanutsma transition-colors"
                            })}
                            <h3 className="font-normal group-hover:text-cyanutsma">{enlace.title}</h3>
                        </a>
                    )
                    )}

                </div>

                <div className="grid grid-cols-2 pt-[80px] gap-4">
                    <div className="bg-grisoscuroutsma flex rounded-lg min-h-32 border-3 border-cyanutsma">
                        <img src={ImagenAlumnos} alt="Alumnos" className="size-32 object-cover rounded-l-[4px]" />
                        <div className="flex grow items-center justify-center gap-3">
                          <h4 className="text-white text-2xl uppercase">Alumnos</h4><IconArrowRight className='size-8 text-cyanutsma' />  
                        </div>
                    </div>
                    <div className="bg-cyanutsma flex rounded-lg min-h-32">
                        <img src={ImagenAlumnos} alt="Alumnos" className="w-32 h-full object-cover rounded-l-[4px]" />
                        <div className="flex grow items-center justify-center gap-3">
                          <h4 className="text-grisoscuroutsma text-2xl uppercase">Egresados</h4><IconArrowRight className='size-8 text-grisoscuroutsma' />   
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Enlaces