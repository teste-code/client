import ContainerAutofit from '@/components/global/containers/ContainerAutofit'
import MainCard from '@/components/sounds/cards/MainCard'
import { sounds } from '@/utils/data/Sound'
import React from 'react'

const NewSounds = () => {
    return (
        <section>
            <ContainerAutofit>
                {sounds.map((sound, index) => (
                    <MainCard key={index} sound={sound} />
                ))}
            </ContainerAutofit>
        </section>
    )
}

export default NewSounds
