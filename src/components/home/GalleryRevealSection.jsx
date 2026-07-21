import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import pic1 from '../../assets/carousel1.png'
import pic2 from '../../assets/carousel2.png'
import pic3 from '../../assets/carousel3.png'
import pic4 from '../../assets/carousel4.png'
import pic5 from '../../assets/carousel5.png'
import pic6 from '../../assets/carousel6.png'

const photos = [pic1, pic2, pic3, pic4, pic5, pic6]

function RevealImage({ src }) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start 0.4'],
    })

    const clipPath = useTransform(
        scrollYProgress,
        [0,1],
        ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
    )
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

    return (
        <div ref={ref} className="overflow-hidden rounded-lg aspect-[4/3]">
            <motion.img
                src={src}
                alt="Property"
                style={{ clipPath, scale}}
                className="w-full h-full object-cover"
                />
        </div>
    )
}

function GalleryRevealSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {photos.map((photo, index) => (
                    <RevealImage key={index} src={photo} />
                ))}
            </div>
        </section>
    )
}

export default GalleryRevealSection