import React from "react";
import s from "./LandingPage.module.css";
import hero_desktop from "../../images/hero-desktop.png"
import arrow from "../../images/acc_arrow.svg"
// ----- icons -----
import icon1 from "../../images/icons/dog.png"
import icon2 from "../../images/icons/passport.png"
import icon3 from "../../images/icons/photo-shoot.png"
import icon4 from "../../images/icons/earth.png"
import icon5 from "../../images/icons/bagpack.png"

function LandingPage() {
  return(
    <div>
      {/* --- header --- */}
      <header>
        <nav>
          <span className={s.logo}>DOGS</span>
          <button className={s.acceder}>Acceder</button>
        </nav>
      </header>
      {/* --- main --- */}
      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>Porque todos los días es un día del <span className={s.titulo_perro}>Perro</span></h1>
          <p className={s.sub_titulo}>Tu mejor amigo te conoce mejor que nadie, tu lo conoces a el? averígualo con la mejor app sobre nuestros peludos favoritos.</p>
          <button className={s.acceder_grande}>Acceder<img className={s.arrow} src={arrow} alt="arrow" /></button>
        </div>

        <div className={s.main_right}>
          <img className={s.hero} src={hero_desktop} alt="hero desktop" />
        </div>
      </main>
      {/* --- button --- */}
      <div className={s.button}>
        <div className={s.funciones}>
          <img className={s.icon} src={icon1} alt="icon" />
          <p className={s.funcion_desc}>Busca a tu  perro favorito</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon2} alt="icon" />
          <p className={s.funcion_desc}>Filta por raza o temperamento</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon3} alt="icon" />
          <p className={s.funcion_desc}>Agrega un nuevo amigo</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon4} alt="icon" />
          <p className={s.funcion_desc}>Razas de <br /> todo el mundo</p>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon5} alt="icon" />
          <p className={s.funcion_desc}>llevalos <br /> siempre contigo</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;