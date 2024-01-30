"use client"
import Notification, { NotificationType } from "./components/Notification"
import Reference from "./components/Reference"
import avatarMarkWebber from "../public/images/avatar-mark-webber.webp"
import avatarAngelaGray from "../public/images/avatar-angela-gray.webp"
import avatarJacobThompson from "../public/images/avatar-jacob-thompson.webp"
import avatarRizkyHasanuddin from "../public/images/avatar-rizky-hasanuddin.webp"
import avatarKimberlySmith from "../public/images/avatar-kimberly-smith.webp"
import avatarNathanPeterson from "../public/images/avatar-nathan-peterson.webp"
import avatarAnnaKim from "../public/images/avatar-anna-kim.webp"
import imageChess from "../public/images/image-chess.webp"
import { useState } from "react"

const initNotifications = [
  {
    avatar: avatarMarkWebber,
    name: "Mark Webber",
    type: "reaction",
    read: false,
    data: {
      postName: "My first tournament today!",
    },
    time: "1m ago",
  },
  {
    avatar: avatarAngelaGray,
    name: "Angela Gray",
    type: "follow",
    read: false,
    data: {},
    time: "5m ago",
  },
  {
    avatar: avatarJacobThompson,
    name: "Jacob Thompson",
    type: "groupJoin",
    read: false,
    data: {
      groupName: "Chess Club",
    },
    time: "1 day ago",
  },
  {
    avatar: avatarRizkyHasanuddin,
    name: "Rizky Hasanuddin",
    type: "privateMessage",
    read: true,
    data: {
      messageText:
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    },
    time: "5 days ago",
  },
  {
    avatar: avatarKimberlySmith,
    name: "Kimberly Smith",
    type: "comment",
    read: true,
    data: {
      picture: imageChess,
    },
    time: "1 week ago",
  },
  {
    avatar: avatarNathanPeterson,
    name: "Nathan Peterson",
    type: "reaction",
    read: true,
    data: {
      postName: "5 end-game strategies to increase your win rate",
    },
    time: "2 weeks ago",
  },
  {
    avatar: avatarAnnaKim,
    name: "Anna Kim",
    type: "groupLeave",
    read: true,
    data: {
      groupName: "Chess Club",
    },
    time: "2 weeks ago",
  },
]

export default function Home() {
  const [notifications, setNotifications] = useState(initNotifications)

  const markAllAsRead = () => {
    setNotifications((notifications) =>
      notifications.map((notification) => ({ ...notification, read: true })),
    )
  }

  return (
    <main className="flex h-full min-h-screen w-full max-w-[45.625rem] flex-col items-center lg:min-h-0">
      <div className="flex w-full flex-col gap-6 bg-white px-4 py-6 shadow-[0_20px_60px_0_rgba(73,97,168,0.05)] lg:rounded-[0.9375rem]">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-extrabold leading-normal lg:text-2xl">
            Notifications
          </h1>
          <div className="bg-primary-blue rounded-md px-3 py-1 font-extrabold text-white">
            {notifications.filter((notification) => !notification.read).length}
          </div>
          <button
            className="text-neutral-dark-grayish-blue hover:text-primary-blue ml-auto cursor-pointer text-sm lg:text-base"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>
        </div>
        <div className="flex flex-col gap-[0.62rem]">
          {notifications.map((notification) => (
            <Notification
              key={notification.name}
              {...notification}
              type={notification.type as NotificationType}
            />
          ))}
        </div>
      </div>
      <Reference />
    </main>
  )
}
