import React from 'react'

export default function AboutUsPage() {
    const aboutUsData = [
        {
            title: "Our Mission",
            image: "",
            description: "At Lumina, we are dedicated to making blood donation easier and more accessible for everyone. Our goal is to bridge the gap between donors, recipients, and hospitals by providing an efficient, reliable, and user-friendly platform that enhances the entire donation process. We believe that with the right tools, we can make a significant impact on healthcare and save more lives through seamless blood donation management."
        },
        {
            title: "Our Vision",
            image: "",
            description: "We envision a world where blood donation is no longer a challenge, but a simple and regular act of generosity. Lumina aims to become a leading platform for global blood donation coordination, fostering trust and collaboration among all stakeholders in the healthcare ecosystem."
        },
        {
            title: "Our Values",
            image: "",
            description: "We are guided by the core values of empathy, integrity, and innovation. At Lumina, we prioritize the needs of donors and recipients, ensuring every step of the donation process is secure and respectful. Our commitment to transparency and technology drives our continuous efforts to improve the platform."
        },
        {
            title: "Why Choose Lumina?",
            image: "",
            description: "Lumina stands out by offering a user-friendly interface, real-time tracking of blood donations, and personalized support for both donors and recipients. Whether you're a first-time donor or a hospital managing supplies, our platform simplifies the process, making it effective and trustworthy."
        }
    ];
    
  return (
    <div className='aboutUs'>
            {aboutUsData.map((data)=>{
                return <p>{data.title}</p>
            })}
        </div>
  )
}
