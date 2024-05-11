import React, { useState } from 'react';

const OurBlogs = () => {
    const [blogs] = useState([
        {
            id: 1,
            date: "New!",
            title: "Generative AI",
            description: "In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....",
            color: "#F86360",
            backgroundColor: "#FFF6CD",
            link: "https://lenscorp.ai/blogs/Generative%20AI",
            hoveBackgroundColor: "rgb(255, 251, 234)"
        },
        {
            id: 2,
            date: "April 25, 2024",
            title: "The Evolution of AI in Games",
            description: "The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...",
            color: "#656565",
            backgroundColor: "#E2F2FF",
            link: "https://lenscorp.ai/blogs/The%20Evolution%20of%20AI%20in%20Games",
            hoveBackgroundColor: "rgb(242, 249, 255)"
        },
        {
            id: 3,
            date: "April 18, 2024",
            title: "Unmasking the Misconceptions of Artificial Intelligence in the Workplace",
            description: "The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....",
            color: "#656565",
            backgroundColor: "#FFECEB",
            link: "https://lenscorp.ai/blogs/Unmasking%20the%20Misconceptions%20of%20Artificial%20Intelligence%20in%20the%20Workplace",
            hoveBackgroundColor: "rgb(255, 248, 248)"
        }
    ]);

    const [hoveredBlogId, setHoveredBlogId] = useState(null);

    const handleMouseEnter = (id) => setHoveredBlogId(id);
    const handleMouseLeave = () => setHoveredBlogId(null);

    return (
        <div className="NewBlog_Container__TDE_m" id="blogs">
            <div className="NewBlog_headingCont__SQ_P9">
                <h2 className="NewBlog_heading__ZIOBD">OUR BLOGS</h2>
                <div className="NewBlog_underline__Mywh_"></div>
            </div>
            <p className="NewBlog_subHead__VqRmF">Inhouse Mindscape</p>
            <div className="NewBlog_main_container___nQla">
                {blogs.map((blog) => (
                    <div
                        className="NewBlog_sub_container__1gftM"
                        key={blog.id}
                        onMouseEnter={() => handleMouseEnter(blog.id)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            backgroundColor: hoveredBlogId === blog.id ? blog.hoveBackgroundColor : '#fff'
                        }}
                    >
                        <div className={`NewBlog_indicator__${blog.color}`}></div>
                        <div className="NewBlogCard_card__Elobm">
                            <div className="NewBlogCard_container__fdu5h">
                                <div style={{ textAlign: "left" }}>
                                    <span className="NewBlogCard_date__DE1td" style={{ color: blog.color }}>
                                        {blog.date}
                                    </span>
                                    <h2 className="NewBlogCard_title__16ac3">{blog.title}</h2>
                                </div>
                                <div className="NewBlogCard_box__wxNla" style={{ backgroundColor: blog.backgroundColor }}>
                                    <p className="NewBlogCard_para__OCasQ">{blog.description}</p>
                                </div>
                            </div>
                            <div className="NewBlogCard_btn__aHb0S">
                                <a href={blog.link}>
                                    <button className="Buttons_readButtonBlog__yJfUQ">
                                        Read More<span></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="./blogs">
                <button className="NewBlog_aboutBtn__JdaGk">
                    Explore More 
                    <span></span>
                </button>
            </a>
        </div>
    );
}

export default OurBlogs;