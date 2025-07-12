import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-4">
        <ItemLayout className="w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-2xl capitalize mb-4">
            Architect Of Enchantment
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg leading-relaxed">
            Hello! I am Anjani Kumar, a passionate and detail-oriented Full Stack Web Developer with a solid foundation in modern web technologies and a keen interest in Cyber Security and Digital Forensics. I specialize in building responsive and dynamic web applications using tools like JavaScript, React, Tailwind, Express.js, and MongoDB.
            <br /><br />
            Currently pursuing my Master of Computer Applications (MCA) at Parul University, I combine technical expertise with strong leadership and communication skills. My approach to development is both creative and analytical, ensuring that every solution I craft is efficient, scalable, and user-friendly.
            <br /><br />
            I’ve built and deployed over a dozen real-world projects—from full-featured clones like TestBook and Zomato, to utility apps like Auto Theme Changer and System Connection Checker. My project "AI Automated Content Creation & Posting" even secured 2nd place at Parul University’s Tech Expo.
            <br /><br />
            I thrive in collaborative environments, love solving problems, and am always eager to explore new tools and technologies. Whether it's coding, debugging, or brainstorming UI/UX improvements—I'm always ready to dive in with full energy.
          </p>


export default AboutDetails;

        </ItemLayout>


       

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

       

       
      </div>
    </section>
  );
};

export default AboutDetails;
