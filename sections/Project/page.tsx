"use client";

// imports
import cx from "@styles/MainStyle.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { setCursorVariant } from "@utils/cursorState";

// data
import dataValue from "@utils/data.json";

// Icons
import Modal from "@components/ModalPage";

const Project = () => {
  const projects: {
    url: string;
    title: string;
    role: string;
    responsibilities: string;
    githubUrl: string;
    imagePath: string;
    techstack: { tech: string }[];
  }[] =
    dataValue.find((item) => item.name === "projectsection-details")
      ?.projects || [];

  const [cardHover, setCardHover] = useState<boolean[]>(
    projects.map(() => false)
  );

  const handleCardHover = (index: number, isHovering: boolean) => {
    const newCardHover = [...cardHover];
    newCardHover[index] = isHovering;
    setCardHover(newCardHover);
  };

  const refs = Array.from({ length: projects.length }).map(() => useRef(null));
  const isInView = refs.map((ref) => useInView(ref));

  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // State to hold the selected project

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  // Lock and unlock scroll when modal opens or closes
  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto"; // Reset scroll when component unmounts
    };
  }, [isModalOpen]);

  return (
    <section className={cx["proj-section"]}>
      <div className={cx["proj-section--main-div"]}>
        <h1 className={cx["proj-section--main-font"]}>My Recent Work</h1>
        <hr className={cx["proj-section--hr"]} />
        <h2 className={cx["proj-section--sub-font"]}>
          Here are projects that I take a part of as a Software Engineer.
        </h2>
        <div className={cx["proj-section--proj-div"]}>
          {projects.map(
            (
              {
                url,
                title,
                role,
                responsibilities,
                githubUrl,
                imagePath,
                techstack,
              },
              index
            ) => (
              <motion.div
                className={cx["proj-card-div"]}
                key={url}
                whileHover={{
                  y: -8,
                  backgroundColor: "var(--sub_body_background)",
                }}
                transition={{ type: "tween", stiffness: 300, damping: 15 }}
              >
                <div className={cx["proj-card-div"]}>
                  <div className={cx["proj-section--title-div"]}>
                    <h2 className={cx["proj-section--title"]}>{title}</h2>
                    <motion.div
                      ref={refs[index]}
                      initial={{ width: 0 }}
                      animate={
                        isInView[index] ? { width: "100%" } : { width: 0 }
                      }
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <hr className={cx["proj-section--title-hr"]} />
                    </motion.div>
                  </div>
                  <div
                    className={clsx(cx["proj-section--card"], {
                      [cx["proj-section--card-hovered"]]: cardHover[index],
                    })}
                  >
                    <button
                      onClick={() =>
                        handleOpenModal({
                          title,
                          role,
                          responsibilities,
                          githubUrl,
                          imagePath,
                          techstack,
                          url,
                        })
                      }
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    >
                      <Image
                        fill
                        key={index}
                        src={imagePath || "/path/to/default-image.jpg"} // Fallback to a default image if path is undefined
                        alt={title}
                        sizes="(max-width: 768px) 187px, (max-width: 1200px) 217px, 289px"
                        className={cx["proj-section--image"]}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Modal Section */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject?.title}
      >
        <div className={cx["modal-content"]}>
          {/* <h2>Role: {selectedProject?.role}</h2> */}
          <h1 className={cx["cert-slides-containers--third-font"]}>
            <b>Role:</b> {selectedProject?.role}
          </h1>
          {/* <p>Responsibilities: {selectedProject?.responsibilities}</p> */}
          <h1 className={cx["cert-slides-containers--third-font"]}>
            <b>Responsibilities:</b> {selectedProject?.responsibilities}
          </h1>
          <h1 className={cx["cert-slides-containers--third-font"]}>
            <b>Tech Stack:</b>{" "}
            {selectedProject?.techstack?.map((tech: any, index: number) => (
              <span key={index}>
                {tech.tech}
                {index < selectedProject.techstack.length - 1 ? ", " : ""}
              </span>
            ))}
          </h1>
          {selectedProject?.githubUrl && (
            <div
              className={cx["proj-button"]}
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
            >
              <a
                className=""
                href={`https://github.com/${selectedProject?.githubUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className={cx["cert-slides-containers--third-font"]}>
                  Visit GitHub Repo
                </h1>
              </a>
            </div>
          )}
          {selectedProject?.url && (
            <div
              className={cx["proj-button"]}
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
            >
              <a
                href={`https://${selectedProject?.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className={cx["cert-slides-containers--third-font"]}>
                  Visit Project Website
                </h1>
              </a>
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Project;
