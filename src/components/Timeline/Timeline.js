import React, {useEffect, useState} from 'react'
import TimeBlock from './TimeBlock'
import { TimelineStyle } from '../style/TimelineStyle';


export default function Timeline()
{
    const [observer, setObserver] = useState()

    useEffect(() => {
        const options = {
            // родитель целевого элемента - область просмотра
            root: null,
            // без отступов
            rootMargin: '0px',
            // процент пересечения - половина изображения
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries, observer) => {
            // для каждой записи-целевого элемента
            entries.forEach(entry => {
                // если элемент является наблюдаемым
                if (entry.isIntersecting) {
                    const item = entry.target
                    item.classList.add("in-view");
                }
            })
        }, options)

        setObserver(observer)
    }, [])

    let dates = [
        {
            year:1937,
            info:`Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. 
            Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius
             et pulvinar in, pretium non nisi.`
        },
        {
            year: 1940,  
            info: `Proin iaculis, nibh eget efficitur varius, 
            libero tellus porta dolor, at pulvinar tortor ex eget ligula. 
            Integer eu dapibus arcu, sit amet sollicitudin eros. 
            Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor,
            at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit 
            amet sollicitudin eros.`
        },
        {
            year: 1943,
            info: ` In mattis elit vitae odio posuere, nec maximus massa varius.
             Suspendisse varius volutpat mattis. Vestibulum id magna est.`
        },
        {
            year: 1946,
            info: `In mattis elit vitae odio posuere, nec maximus massa varius. 
            Suspendisse varius volutpat mattis. Vestibulum id magna est.`
        },
        {
            year: 2000,
            info: `In mattis elit vitae odio posuere, nec maximus massa varius. 
            Suspendisse varius volutpat mattis. Vestibulum id magna est.`
        },
    ]
    return (
        <TimelineStyle>
            <section className="intro">
                <div className="container">
                    <h1 className="main">Vertical Timeline &darr;</h1>
                </div>
            </section>
            <section className="timeline">
                <ul>   
                    {dates.map(date => 
                        <TimeBlock key={date.year} observer={observer} year={date.year}>
                            {date.info}
                        </TimeBlock>)}
                </ul>
            </section>
        </TimelineStyle>
    )
}