import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function MissionSection() {
    return (
        <section className="bg-white py-24 px-6 flex flex-col items-center text-center">
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed"
            >
                At Crisafi Realty, we believe finding a home should feel personal, not
                transactional. We take the time to understand what matters to you,
                guiding you through every step with honesty, patience, and genuine care —
                because your next chapter deserves nothing less.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Link
                    to="/contact"
                    className="mt-8 px-8 py-3 bg-navy text-white rounded-md font-medium hover:scale-105 transition-transform duration-200 inline-block"
                >
                    Contact Us
                </Link>
            </motion.div>
        </section>
    )
}

export default MissionSection