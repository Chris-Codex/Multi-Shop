import React, { useState } from 'react'
import { servicesData } from './ServicesData'


const Services = () => {
    const [service, setService] = useState(servicesData)

    return (
        <div className='service-container'>
            {service.map((list) => {
                const { id, Icons, name } = list
                return (
                    <div className='service-card' key={id}>
                        <Icons size={32} color="#FFC300" />
                        <h4 className='header-4'>{name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Services
