import Link from "next/link";

const CtaSection = () => (
  <section className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
      I&apos;am always open to new opportunities and exciting projects. Let&apos;s create something amazing together.
    </p>
    <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
      Get in Touch
    </Link>
  </section>
);

export default CtaSection;