import React from 'react'

const Intro = () => {
    return (
        <>
            <div className="w-full h-screen border bg-[url(https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75)] bg-cover bg-left-top NewHero_heroContainer__M77cV" id="top">
               
                <div className="NewHero_heroLightContent__H6F5T">
                    <h1 className=" NewHero_sectionHeadingLight__wqJ1M">We are at the forefront of AI</h1>
                    <p className="NewHero_subHeadingLight__i7EVe">
                        From Conserving Wildlife to Automatically Generating Caricatures-
                        <span className='font-bold'> {" "}We Do It All</span>
                    </p>
                    <a href="./about">
                        <button className="Buttons_primaryButton__TNkjJ">Learn More</button>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Intro
