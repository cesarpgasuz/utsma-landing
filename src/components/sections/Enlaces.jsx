import { IconCalendar, IconCap, IconPeople, IconHoja } from "../../helpers/icons";

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
                        <a href="{enlace.link}" target="_blank" rel="noopener noreferrer" key={index} className="flex flex-row items-center justify-center gap-3 bg-grisclaroutsma p-6 rounded-lg hover:bg-grisoscuroutsma transition-colors group">
                            {enlace.icono({
                                className: "w-8 h-8 text-gray-500 group-hover:text-cyanutsma transition-colors"
                            })}
                            <h3 className="font-normal group-hover:text-cyanutsma">{enlace.title}</h3>
                        </a>
                    )
                    )}

                </div>
            </div>
        </section>
    )
}

export default Enlaces