"use client";
import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "These frames transformed my workspace! The premium quality and elegant design perfectly complement my home decor. Absolutely love the attention to detail.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Interior Designer",
  },
  {
    text: "The quality exceeded my expectations. These frames are not just beautiful but incredibly durable. The perfect addition to my art collection.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Art Collector",
  },
  {
    text: "Outstanding customer service and premium frames. The team helped me choose the perfect frames for my gallery wall. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Gallery Owner",
  },
  {
    text: "These frames have elevated my home decor. The seamless integration with my existing pieces and the premium quality make them worth every penny.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "Home Stylist",
  },
  {
    text: "The robust design and elegant finish have transformed my living space. These frames are both functional and beautiful - exactly what I was looking for.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Design Consultant",
  },
  {
    text: "The smooth ordering process exceeded expectations. The frames arrived perfectly packaged and look stunning in my home. Couldn't be happier!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Home Decor Enthusiast",
  },
  {
    text: "My home decor improved dramatically with these premium frames. The user-friendly website and positive reviews led me here, and I'm so glad they did!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Interior Designer",
  },
  {
    text: "They delivered frames that exceeded expectations, understanding my style needs and enhancing my home's aesthetic perfectly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Stylist",
  },
  {
    text: "Using these frames, my home's visual appeal and overall design significantly improved, boosting the entire space's aesthetic.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Home Decor Specialist",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-gray-800 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-blue-500/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-normal m-0 transition-colors duration-300 text-sm sm:text-base font-inter">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700 group-hover:ring-blue-500/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-gray-900 dark:text-white transition-colors duration-300 font-inter">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-gray-500 dark:text-gray-400 mt-0.5 transition-colors duration-300 font-inter">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-12 md:py-16 lg:py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 sm:px-6 lg:px-8 z-10 mx-auto max-w-7xl"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12 md:mb-16">
          <div className="flex justify-center">
            <div className="border border-gray-300 dark:border-gray-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 transition-colors font-inter">
              Testimonials
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-6 text-center bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent transition-colors font-playfair">
            What our customers say
          </h2>
          <p className="text-center mt-5 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-sm transition-colors font-inter">
            Discover how thousands of customers transform their spaces with our premium frames.
          </p>
        </div>

        <div 
          className="flex justify-center gap-4 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main Component ---
export default function TestimonialV2() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <TestimonialsSection />
    </div>
  );
}

