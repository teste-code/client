import Image from 'next/image'
import React from 'react'
import style from './sections.module.sass'

const HeroHome = () => {
    return (
        <section className={style.containerHero}>
            <div className={style.cover}>
                <Image src={"/assets/images/banners/hero-1.png"} priority alt='banner home' fill />
                <div className={style.contet}>
                    <h2>Track-ON</h2>
                    <p>Ouça e baixe músicas de forma gratuita, sem alguma restrição,
                        Ou torna-te na proxima celebridade...</p>
                </div>
            </div>
        </section>
    )
}

export default HeroHome
