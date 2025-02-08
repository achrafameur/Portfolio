import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Backend Development",
      desc: "Building scalable and efficient web applications using Django as the main framework, along with other backend technologies.",
      icon: "fas fa-server",
    },
    {
      name: "API Development",
      desc: "Designing and implementing RESTful APIs to ensure smooth and secure communication between applications.",
      icon: "fas fa-code",
    },
    {
      name: "Database Management",
      desc: "Optimizing relational databases, handling queries efficiently, and ensuring data integrity with MySQL and PostgreSQL.",
      icon: "fas fa-database",
    },
    {
      name: "Interactive Dashboards",
      desc: "Creating dynamic dashboards with data visualization to provide insightful analytics and improve decision-making.",
      icon: "fas fa-chart-line",
    },
    {
      name: "Geolocation & Mapping",
      desc: "Integrating geolocation services to enhance user experience and provide location-based features using Google Maps API.",
      icon: "fas fa-map-marker-alt",
    },
    {
      name: "Full-Stack Development",
      desc: "Developing complete web applications with a focus on both backend logic and frontend integration using modern frameworks.",
      icon: "fas fa-laptop-code",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
