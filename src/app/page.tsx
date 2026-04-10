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
        text: "Start Your Journey",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      title="Where Your Future Begins Abroad"
      description="Your dream of studying in Europe starts here. From application to arrival—and beyond—we guide you every step, so you can focus on succeeding."
      imageSrc="http://img.b2bpic.net/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product_1258-66833.jpg?_wi=1"
      buttons={[
        {
          text: "Start Your Journey",          href: "#contact"},
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
        "Global Study Hub is an international student support organization dedicated to making European education accessible and stress-free.",        "We provide expert guidance across three critical phases: pre-departure university placement, application processing, and comprehensive visa preparation.",        "Our mission is to bridge the gap between student potential and international success, ensuring every applicant feels confident, prepared, and welcomed."]}
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
          title: "University Placement",          description: "Customized guidance to match your academic profile with elite European institutions.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-icvduoa7.jpg",          titleIconSrc: "http://img.b2bpic.net/free-photo/minimalist-illustration-monument_23-2151902644.jpg",          buttonText: "Explore"},
        {
          title: "Visa & Application",          description: "Seamless handling of visa applications and documentation to ensure 100% compliance.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-qswhpu3u.jpg",          titleIconSrc: "http://img.b2bpic.net/free-photo/visa-application-form-smartphone_23-2149117803.jpg",          buttonText: "Learn More"},
        {
          title: "Arrival & Settlement",          description: "Post-arrival support, housing assistance, and local orientation to get you settled quickly.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-qswhpu3u.jpg",          titleIconSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775789344555-qswhpu3u.jpg",          buttonText: "Read More"},
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
        "Oxford Network",        "E-Study Alliance",        "Global Academic Union",        "European Placement Hub",        "International Scholar Group",        "Global Education Network",        "Campus Excellence Alliance"]}
      title="Trusted by Educational Partners"
      description="Our partner institutions and global networks help us deliver premium placement opportunities."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          date: "Jan 2024",          title: "University Student",          quote: "Global Study Hub made my dream of studying in Europe a reality. The process was smooth and stress-free.",          tag: "Placement",          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-talking-phone_23-2149235740.jpg",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9C4Q08C8xD7UAbWKXOEVzQwpC/uploaded-1775788811921-5hruy4vd.png",          imageAlt: "User provided image"},
        {
          id: "2",          name: "Michael Chen",          date: "Feb 2024",          title: "Supportive Parent",          quote: "As a parent, I was worried about my child moving abroad. Global Study Hub gave us peace of mind and full support.",          tag: "Parent",          avatarSrc: "http://img.b2bpic.net/free-photo/happy-father-hugging-his-son_23-2147562065.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product_1258-66833.jpg?_wi=7",          imageAlt: "abstract purple gradient background"},
        {
          id: "3",          name: "Emily Rodriguez",          date: "Mar 2024",          title: "Career-Focused Student",          quote: "Relocating for professional development was challenging, but the Hub's team made everything incredibly efficient.",          tag: "Career",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-blond-woman-student-standing-near-her-campus-with-notebooks-documents-wearing_1258-205475.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/college-students-different-ethnicities-cramming_23-2149891353.jpg",          imageAlt: "diverse students at university campus"},
        {
          id: "4",          name: "David Kim",          date: "Apr 2024",          title: "International Student",          quote: "Their visa guidance was impeccable. I didn't have to stress about a single document. Highly recommended.",          tag: "Visa",          avatarSrc: "http://img.b2bpic.net/free-photo/good-humored-woman-sits-outside_197531-24317.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-illustration-monument_23-2151902644.jpg?_wi=2",          imageAlt: "university application icon minimalist"},
        {
          id: "5",          name: "th ",          date: "May 2024",          title: "University Graduate",          quote: "The post-arrival orientation was a game changer. I felt at home from the very first week.",          tag: "Arrival",          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-graduate-girl-graduation-robe-shows-ok-sign-smiling-camera_496169-1324.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/visa-application-form-smartphone_23-2149117803.jpg?_wi=2",          imageAlt: "visa document icon flat style"},
      ]}
      title="Voices of Success"
      description="See what our students and parents have to say about their journey abroad."
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
          text: "Start Your Journey",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About",              href: "#about"},
            {
              label: "Services",              href: "#features"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Partners",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
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
