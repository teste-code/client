import { Sound } from '@/utils/types/soundsTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './cards.module.sass'
interface Sounds {
    sound: Sound
}
const MainCard: React.FC<Sounds> = ({ sound }) => {
    return (
        <li className={style.MainCard}>
            <Link href={sound.slug} >
                <div className={style.cover}>
                    <Image src={sound.cover} alt={sound.title} fill />
                </div>
                <h3> {sound.artist} </h3>
                <h2> {sound.title} </h2>
            </Link>
        </li>
    )
}

export default MainCard
