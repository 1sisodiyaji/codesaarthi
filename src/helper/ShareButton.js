import React from 'react';
import toast from 'react-hot-toast';

export const handleCopyText = (url) => {
  navigator.clipboard
    .writeText(url)
    .then(() => toast.success("Link Copied Successfully"))
    .catch((err) => console.error("Failed to copy: ", err));
};

export const handleShareWhatsApp = (url) => {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
  window.open(whatsappUrl, "_blank");
};

export const handleShareLinkedIn = (url) => {
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  window.open(linkedinUrl, "_blank");
};

const ShareButton = ({url}) => {
  return (
    <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button">
      <i className="fi fi-sr-share"></i>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-black dark:bg-white dark:text-black text-white text-xs rounded-box  w-28 space-y-4 p-4 shadow text-center"
      >
        <li className="cursor-pointer" onClick={() => handleCopyText(url)}>
          Copy
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleShareWhatsApp(url)}>
          Whatsapp
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleShareLinkedIn(url)}>
          Linkedin
        </li>
      </ul>
    </div>
  </div>
  )
}

export default ShareButton