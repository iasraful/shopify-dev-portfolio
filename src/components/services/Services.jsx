import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Shopify Theme Customization</h2>
          <p>
            With a deep understanding of Shopify's Liquid templating language
            and a keen eye for design, I specialize in customizing Shopify
            themes to perfectly align with your brand’s identity. Whether it's
            tweaking layouts, adjusting styles, or adding custom features, I
            ensure your online store not only looks stunning but also offers an
            intuitive and seamless user experience.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Shopify Theme Development</h2>
          <p>
            From concept to completion, I develop bespoke Shopify themes
            tailored to your unique business needs. My expertise in HTML, CSS,
            JavaScript, and Liquid enables me to create responsive,
            fast-loading, and visually appealing themes that enhance the
            shopping experience. I focus on clean, maintainable code and ensure
            that every theme is optimized for performance and scalability.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Shopify App Development</h2>
          <p>
            I develop custom Shopify apps that extend the functionality of your
            online store, providing solutions to meet specific business
            requirements. Whether you need to automate tasks, integrate
            third-party services, or add unique features, my apps are built to
            be robust, secure, and user-friendly. I focus on delivering seamless
            integration and ensuring that the apps enhance both the merchant's
            and the customer's experience.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Shopify SEO</h2>
          <p>
            Driving traffic and increasing sales through strategic SEO
            optimization is at the core of what I do. I optimize your Shopify
            store to rank higher in search engine results by focusing on keyword
            research, on-page SEO, site speed, and mobile responsiveness. My
            goal is to ensure your store not only attracts more visitors but
            also converts them into loyal customers.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
