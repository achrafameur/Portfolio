import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2019 - 2022",
      title: "Licence en Sciences Informatiques et Multimédia",
      place: "Institut Supérieur d'Informatique et des Techniques de Communication, Hammam Sousse (ISITCOM)",
      desc: "Acquisition des bases en développement logiciel, bases de données et conception d’applications web et mobiles.",
    },
    {
      yearRange: "2021",
      title: "Formation FullStack JS",
      place: "GOMYCODE",
      desc: "Approfondissement des compétences en développement web moderne avec ReactJS et NodeJS.",
    },
    {
      yearRange: "2022 - 2024",
      title: "Mastère Expert en Développement Web",
      place: "Aix Ynov Campus",
      desc: "Spécialisation en développement FullStack avec un focus sur Django, ReactJS, et les méthodologies agiles.",
    },
  ];
  
  const experienceDetails = [
    {
      yearRange: "Sept 2023 - Présent",
      title: "Développeur FullStack",
      place: "APTEED (Aubagne, France)",
      desc: "Développement web et mobile en utilisant Django, ReactJS et PHP. Travail en méthodologie Scrum.",
    },
    {
      yearRange: "Oct 2022 - Juil 2023",
      title: "Développeur FullStack (Alternance)",
      place: "MVH Solutions EURL (Cavaillon, France)",
      desc: "Développement d’applications avec ReactJS, Django et Flutter. Participation au développement d’un ERP et d’une application mobile.",
    },
    {
      yearRange: "Fév 2022 - Juin 2022",
      title: "Développeur FullStack (Stage PFE)",
      place: "PROXYM-IT (Sousse, Tunisie)",
      desc: "Développement d’une solution de gestion des sinistres avec ASP.NET et Angular. Utilisation de l'Onion Architecture.",
    },
    // {
    //   yearRange: "Juil 2021 - Août 2021",
    //   title: "Développeur FullStack (Stage d'été)",
    //   place: "PROXYM-IT (Sousse, Tunisie)",
    //   desc: "Développement d’une plateforme de gestion des réclamations avec Angular et Spring Boot. Implémentation d’un système d’authentification JWT.",
    // },
  ];
  
  const skills = [
    {
      name: "Django",
      percent: 95,
    },
    {
      name: "ReactJS",
      percent: 90,
    },
    {
      name: "NodeJS",
      percent: 85,
    },
    {
      name: "Python",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 90,
    },
    {
      name: "MySQL / PostgreSQL",
      percent: 85,
    },
    {
      name: "Docker",
      percent: 75,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
