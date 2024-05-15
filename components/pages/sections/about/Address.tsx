import Image from 'next/image'
import React from 'react'
import style from './about.module.sass'

const Address  = () => {
    return (
        <section id='address' className={style.container}>
            <div className={style.cover}>
                <Image src={"/assets/images/banners/banner-contacts-2.jpg"} priority alt='banner home' fill />
            </div>
            <div className={style.contet}>
                <h2>Endereço</h2>
                <p>Nossos contactos</p>
            </div>
        </section>
    )
}

export default Address 
