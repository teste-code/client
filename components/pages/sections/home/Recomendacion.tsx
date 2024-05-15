import ContainerAutofit from '@/components/global/containers/ContainerAutofit'
import CardSmall from '@/components/sounds/cards/CardSmall'
import { sounds } from '@/utils/data/Sound'
import React from 'react'

const Recomendacion= () => {
    return (
        <section>
            <h2>Recomendacion</h2>
            <ContainerAutofit >
                {sounds.map((sound, index) => (
                    <CardSmall key={index} sound={sound} />
                ))}
            </ContainerAutofit>
        </section>
    )
}

export default Recomendacion
