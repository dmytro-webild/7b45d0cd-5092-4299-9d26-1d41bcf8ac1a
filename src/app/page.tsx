"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

const INSTAGRAM_URL = "https://www.instagram.com/global.studyhub?igsh=MXZmZTIyY2ViZ3owcQ%3D%3D&utm_source=qr";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Support",          id: "features"},
        {
          name: "Testimonials",          id: "testimonials"},
      ]}
      brandName="Global Study Hub"
      button={{
        text: "Start Your Journey",        href: INSTAGRAM_URL}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      title="Where Your Future Begins Abroad"
      description="Your dream of studying all over the world starts here. From application to arrival and beyond, we guide you every step, so you can focus on succeeding."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775823695960-v76o60l0.png"
      buttons={[
        {
          text: "Start Your Journey",          href: INSTAGRAM_URL},
      ]}
      mediaAnimation="opacity"
      background={{ variant: "plain" }}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="About Global Study Hub"
      description={[
        "Global Study Hub is an international student support organization dedicated to making education all over the world accessible and stress-free.",        "We provide expert guidance across three critical phases: pre-departure university placement, application processing, and comprehensive visa preparation.",        "Our mission is to bridge the gap between student potential and international success, ensuring every applicant feels confident, prepared, and welcomed."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Guaranteed University Acceptance",          description: "Customized guidance to match your academic profile with elite global institutions.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-icvduoa7.jpg",          titleIconSrc: "http://img.b2bpic.net/free-photo/minimalist-illustration-monument_23-2151902644.jpg",          buttonText: "Explore",          buttonHref: INSTAGRAM_URL},
        {
          title: "Fast-Track Visa Processing",          description: "Seamless handling of visa applications and documentation to ensure 100% compliance.",          imageSrc: "http://img.b2bpic.net/premium-photo/us-visa-stamp-travel-passport-united-states-america-immigrant-work-travel-documents_1046681-1808.jpg?id=135777599",          titleIconSrc: "http://img.b2bpic.net/free-photo/visa-application-form-smartphone_23-2149117803.jpg",          buttonText: "Learn More",          buttonHref: INSTAGRAM_URL},
        {
          title: "Stress-Free Arrival Support",          description: "Post-arrival support, housing assistance, and local orientation to get you settled quickly.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-qswhpu3u.jpg?_wi=2",          titleIconSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-qswhpu3u.jpg",          buttonText: "Read More",          buttonHref: INSTAGRAM_URL},
      ]}
      title="Your Full-Cycle Support Partner"
      description="We remove the friction from studying abroad, providing specialized assistance for every phase of your journey."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Oxford Network",        "E-Study Alliance",        "Global Academic Union",        "Global Placement Hub",        "International Scholar Group",        "Global Education Network",        "Campus Excellence Alliance"]}
      title="Trusted by Educational Partners"
      description="Our partner institutions and global networks help us deliver premium placement opportunities."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Theresia Mouawnes", date: "2025", title: "Digital Marketing and Business Transformation", quote: "A seamless journey into my global studies program.", tag: "Italy", avatarSrc: "" },
        { id: "2", name: "Bchara Mhanna", date: "2022", title: "International Business", quote: "The team made moving to a new country incredibly easy.", tag: "Spain", avatarSrc: "" },
        { id: "3", name: "Marilyne Bassoulo", date: "2023", title: "MSc in Computer Animation and Visual Effects", quote: "Professional, efficient, and truly life-changing guidance.", tag: "UK", avatarSrc: "" },
        { id: "4", name: "Sarah Salemeh", date: "2021", title: "Medical Studies", quote: "I felt fully prepared to start my medical career abroad.", tag: "Cyprus", avatarSrc: "" }
      ]}
      title="Voices of Success"
      description="See what our students have to say about their journey to studying all over the world."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="Ready to launch your future abroad? Start your journey today with our dedicated support team."
      buttons={[
        {
          text: "Start Your Journey",          href: INSTAGRAM_URL},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",          items: [
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#features" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "FAQ", href: "#" },
            { label: "Contact", href: "#contact" },
            { label: "Partners", href: "#" },
          ],
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ],
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775788811921-5hruy4vd.png"
      logoText="Global Study Hub"
      copyrightText="© 2025 Global Study Hub. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}