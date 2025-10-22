import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ProjectSliderTwo = () => {
  return (
    <>
      <div className="projects-area style-two-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="projects-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="projects-bg-text">WORK</div>
                <span>PROJECTS</span>
                <h3>Our Latest Incredible Client&apos;s Project</h3>
                <p>
                  We are technology solutions providing company all over the
                  world doing over 40 years.
                </p>
                <div className="projects-section-btn">
                  <Link href="/projects/projects">
                    <a className="default-btn">Explore All Projects</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper projects-slides-two"
              >
                <SwiperSlide>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href="/projects/projects-details">
                        <a>
                          <img
                            src="/images/projects/projects-1.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/projects-details">
                          <a>3D Animation</a>
                        </Link>
                      </h3>
                      <Link href="/projects/projects-details">
                        <a className="projects-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href="/projects/projects-details">
                        <a>
                          <img
                            src="/images/projects/projects-2.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/projects-details">
                          <a>Online Banking Software</a>
                        </Link>
                      </h3>
                      <Link href="/projects/projects-details">
                        <a className="projects-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href="/projects/projects-details">
                        <a>
                          <img
                            src="/images/projects/projects-3.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/projects-details">
                          <a>Cashier Software</a>
                        </Link>
                      </h3>
                      <Link href="/projects/projects-details">
                        <a className="projects-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href="/projects/projects-details">
                        <a>
                          <img
                            src="/images/projects/projects-4.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/projects-details">
                          <a>Analytics Software</a>
                        </Link>
                      </h3>
                      <Link href="/projects/projects-details">
                        <a className="projects-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href="/projects/projects-details">
                        <a>
                          <img
                            src="/images/projects/projects-5.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/projects-details">
                          <a>Messaging App</a>
                        </Link>
                      </h3>
                      <Link href="/projects/projects-details">
                        <a className="projects-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSliderTwo;
