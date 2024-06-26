"use client"
import Image from 'next/image'
import React from 'react'
import style from "./not.module.sass"
import { usePathname } from 'next/navigation'

const NotFound = () => {
    const path = usePathname()
    return (
        <section className={style.conatiner}>
            <div>
                <div className="">
                    <h1>Erro 404</h1>
                    <p>Pagina não encontrada </p>
                </div>

                <div className={style.cover}>
                    <Image src={"/assets/images/svg/not-found-1.svg"} priority property='n+os' alt='not found' fill />
                </div>
                <div className="">
                    <p className={style.desc}>Não conseguimos encontrar esta pagina:
                        <span> &quot;http://trackon.ao{path}&quot; </span>
                        talvez ela foi eleminada
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NotFound
