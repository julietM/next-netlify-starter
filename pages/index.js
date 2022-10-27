import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
       <h1>el tiburón</h1>
       <div className='box'>
        <p>Mora en el fondo de los océanos desde hace unos 350 a 400 millones de años. Los antepasados de la mayoría de las especies que conocemos hoy se remontan a la era jurásica. Hablamos del tiburón, una de las especies más letales que habitan el planeta. Pero en esta ocasión nos referiremos a dos tipos de tiburón en concreto, que se caracterizan 
        por su feroz instinto depredador. ¿Cuál es el tiburón más peligroso del mundo y dónde vive?</p>
        <div className="image">
        <Image src="/img/triburon.jpg" alt="Picture of the author"
         width={200}
         height={100}/>
         </div>
         <a href='https://www.ngenespanol.com/animales/cual-es-el-tiburon-mas-peligroso-del-mundo-y-como-es-su-caracter/'>la pagina es el tiburon</a>

       </div>
    </div>
  )
}
