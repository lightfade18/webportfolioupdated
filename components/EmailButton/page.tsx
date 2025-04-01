"use client";

import cx from "@styles/MainStyle.module.scss";
import MailIcon from "@components/MailIcon";
import { motion } from "framer-motion";

const EmailButton = () => {
  const emailAddress = "pauljohnerodriguez@gmail.com";
  return (
    <a href={`mailto:${emailAddress}`} className={cx["email-button"]}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <MailIcon width="3.5rem" height="3rem" fill="#F5C300" />
      </motion.div>
    </a>
  );
};

export default EmailButton;
