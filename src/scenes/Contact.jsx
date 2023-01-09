import LineGradient from '../components/LineGradient';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm("meqwqvqe");
  if (state.succeeded) {
      return (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-4xl font-semibold font-playfair text-yellow'>Thanks for your message!</p>
        </div>
      )
  }

  return (
    <section id="contact" className='py-48'>
      {/* HEADINGS */}
      <motion.div
        className='flex justify-end w-full'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow'>CONTACT ME</span> TO GET STARTED
          </p>
          <div className='flex md:justify-end my-5'>
          <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM and IMAGE */}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
          className='basis-1/2 flex justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt='contact' />
        </motion.div>

        <motion.div
          className='basis-1/2 mt-10 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            onSubmit={handleSubmit}
          >
            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
              type='text'
              placeholder='NAME'
              id="name"
              name="name"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />

            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='email'
              placeholder='EMAIL'
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='text'
              rows='4'
              cols='50'
              placeholder='MESSAGE'
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type='submit'
              disabled={state.submitting}
              className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500'
            >
              Send me a message
            </button>


          </form>
        </motion.div>
      </div>
    </section>
  )

}

export default Contact;
