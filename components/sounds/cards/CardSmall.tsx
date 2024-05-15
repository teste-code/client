import { Sound } from '@/utils/types/soundsTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './cards.module.sass'
interface Sounds {
    sound: Sound
}
const CardSmall: React.FC<Sounds> = ({ sound }) => {
    return (
        <li className={style.CardSmall}>
            <Link href={sound.slug} >
                <div className={style.cover}>
                    <Image src={sound.cover} alt={sound.title} fill />
                </div>
                <div className={style.content}>
                    <h3> {sound.artist} </h3>
                    <h2> {sound.title} </h2>
                </div>

            </Link>
        </li>
    )
}

export default CardSmall