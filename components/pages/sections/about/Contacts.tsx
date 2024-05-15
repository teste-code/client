import Image from 'next/image'
import React from 'react'
import style from './about.module.sass'

const Contacts = () => {
    return (
        <section id='contacts' className={style.container}>
            <div className={style.cover}>
                <Image src={"/assets/images/banners/banner-contacts-3.jpg"} priority alt='banner home' fill />
            </div>
            <div className={style.contet}>
                <h2>Contactos</h2>
                <p>Nossos contactos</p>
                <ul>
                    
                </ul>
            </div>
        </section>
    )
}

export default Contacts
