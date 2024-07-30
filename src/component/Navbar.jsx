import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../assets/card 1.jpeg";
import logo from "../assets/logo.png";
import { FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center h-[96px] bg-neutral-900 px-3 pt-[20px] z-50 shadow-xl transform translate-z-10">
      <div className="absolute left-3 flex items-center pb-[18px]">
        <img src={logo} alt="Logo" className="h-[60px] w-[60px] rounded-full" />
      </div>
      <div className="flex space-x-4">
        <FlyoutLink href="#" FlyoutContent={VisitingCardsContent}>
          Visiting Card
        </FlyoutLink>
        <div className="h-6 border-l border-gray-500 mx-3" />
        <FlyoutLink href="#" FlyoutContent={PostcardsContent}>
          Postcards
        </FlyoutLink>
        <div className="h-6 border-l border-gray-500 mx-3" />
        <FlyoutLink href="#" FlyoutContent={EnvelopesContent}>
          Envelopes
        </FlyoutLink>
        <div className="h-6 border-l border-gray-500 mx-3" />
        <FlyoutLink href="#" FlyoutContent={BlueprintsContent}>
          Blueprints
        </FlyoutLink>
        <div className="h-6 border-l border-gray-500 mx-3" />
        <FlyoutLink href="#" FlyoutContent={AnnouncementsInvitationsContent}>
          Announcements & Invitations
        </FlyoutLink>
        <div className="h-6 border-l border-gray-500 mx-3" />
        <FlyoutLink href="#" FlyoutContent={BannersContent}>
          Banners
        </FlyoutLink>
      </div>
      <div className="flex items-center space-x-8">
        <div className="relative">
          <FiUser className="text-white cursor-pointer hover:text-indigo-300 transition-colors duration-300" />
        </div>
        <div className="relative">
          <FiShoppingCart className="text-white cursor-pointer hover:text-indigo-300 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        className="relative text-white px-3 py-2 hover:text-indigo-300 transition-colors duration-300"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black rounded-lg shadow-lg overflow-hidden z-10"
          >
            <div className="absolute left-1/2 top-0 h-4 w-4 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContentTemplate = ({ title, links }) => (
  <div className="w-[300px] bg-white p-4 shadow-xl mt-2 rounded-lg">
    <h3 className="font-semibold mb-3">{title}</h3>
    <div className="relative group">
      <img
        src={img1}
        alt={title}
        className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-3 space-y-2">
      {links.map((link, index) => (
        <a
          href="#"
          key={index}
          className="block text-sm hover:underline text-gray-700"
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);

const VisitingCardsContent = () => (
  <ContentTemplate
    title="Visiting Cards"
    links={[
      "Standard Visiting Cards",
      "Classic Visiting Cards",
      "Rounded Corner Visiting Cards",
      "Square Visiting Cards",
    ]}
  />
);

const PostcardsContent = () => (
  <ContentTemplate
    title="Postcards"
    links={[
      "Standard Postcards",
      "Premium Postcards",
      "Personalized Postcards",
    ]}
  />
);

const EnvelopesContent = () => (
  <ContentTemplate
    title="Envelopes"
    links={[
      "Standard Envelopes",
      "Premium Envelopes",
      "Personalized Envelopes",
    ]}
  />
);

const BlueprintsContent = () => (
  <ContentTemplate
    title="Blueprints"
    links={[
      "Standard Blueprints",
      "Premium Blueprints",
      "Personalized Blueprints",
    ]}
  />
);

const AnnouncementsInvitationsContent = () => (
  <ContentTemplate
    title="Announcements & Invitations"
    links={[
      "Standard Announcements",
      "Premium Invitations",
      "Personalized Invitations",
    ]}
  />
);

const BannersContent = () => (
  <ContentTemplate
    title="Banners"
    links={["Standard Banners", "Premium Banners", "Personalized Banners"]}
  />
);

export default Navbar;
