import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/small-card.tsx";
import { Link } from "react-router-dom";
import TimeConverter from "../helper/TimeConverter.js";
import { handleCopyText, handleShareLinkedIn, handleShareWhatsApp } from "../helper/Share.js";
import TruncateText from "../helper/TruncateText.js";

export function SmallCard({ title,type, slug, image, body, Author, createdAt }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 dark:bg-black relative group/card border
       border-black/[0.1] dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl 
       shadow-lg dark:shadow-emerald-500/[0.1]">

        <div className="rounded-lg shadow-md p-2">
          <div className="flex px-2 space-x-3">
            <CardItem translateZ="100" className="m-0 p-0">
              <img
                src={image}
                className="h-24 w-28 object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                loading="lazy"
              />
            </CardItem>
            <div className="">
              <Link
                to={`/${type}/${slug}`}
                className="text-blue-500 underline"
              >
                <CardItem
                  translateZ="50"
                  className="text-sm font-bold text-neutral-600 dark:text-white"
                >
                  <TruncateText text={title} maxLength={46} />
                </CardItem>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
                >
                  {body}
                </CardItem>
              </p>
            </div>
          </div>
          <div className="px-2 flex justify-between">
            <small>
              Asked By :
              {Author ? (
                <Link
                  to={`/profile/${Author}`}
                  className="text-blue-500 underline ml-1"
                >
                  {Author}
                </Link>
              ) : (
                <span>Unknown</span>
              )}
              <span> | </span>
              <TimeConverter date={createdAt} />
            </small>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <div className="dropdown">
                <div tabIndex={0} role="button">
                  Share <i className="fi fi-sr-share"></i>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-black dark:bg-white dark:text-black text-white text-xs rounded-box z-[-1] w-28 space-y-4 p-4 shadow text-center"
                  >
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleCopyText(
                          `${window.location.origin}/${type}/${slug}`
                        )
                      }
                    >
                      Copy
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleShareWhatsApp(
                          `${window.location.origin}/ask-freely/${slug}`
                        )
                      }
                    >
                      Whatsapp
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleShareLinkedIn(
                          `${window.location.origin}/ask-freely/${slug}`
                        )
                      }
                    >
                      Linkedin
                    </li>
                  </ul>
                </div>
              </div>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
