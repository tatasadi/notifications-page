import Image, { StaticImageData } from "next/image"
import React from "react"

export type NotificationType =
  | "reaction"
  | "follow"
  | "groupJoin"
  | "privateMessage"
  | "comment"
  | "groupLeave"

interface NotificationProps {
  avatar: StaticImageData
  name: string
  type: NotificationType
  read: boolean
  data: {
    postName?: string
    groupName?: string
    messageText?: string
    picture?: StaticImageData
  }
  time: string
}

const Notification: React.FC<NotificationProps> = ({
  avatar,
  name,
  type,
  read,
  data,
  time,
}) => {
  const getNotificationText = (): React.ReactNode => {
    switch (type) {
      case "reaction":
        return (
          <>
            reacted to your recent post{" "}
            <span className="font-bold">{data.postName}</span>
          </>
        )
      case "follow":
        return <>followed you</>
      case "groupJoin":
        return (
          <>
            has joined your group{" "}
            <span className="text-primary-blue font-bold">
              {data.groupName}
            </span>
          </>
        )
      case "privateMessage":
        return <>sent you a private message</>
      case "comment":
        return <>commented on your picture</>
      case "groupLeave":
        return (
          <>
            left the group{" "}
            <span className="text-primary-blue font-bold">
              {data.groupName}
            </span>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={`flex gap-3 rounded-lg p-4 ${
        read ? "white" : "bg-neutral-very-light-grayish-blue"
      }`}
    >
      <div>
        <div className="h-[2.4375rem] w-[2.4375rem]">
          <Image src={avatar} alt={name} className="rounded-full border " />
        </div>
      </div>
      <div>
        <div className="flex gap-6">
          <div className="text-sm">
            <span className="font-bold">{name}</span>{" "}
            <span className="text-neutral-dark-grayish-blue">
              {getNotificationText()}
            </span>
            {!read && (
              <span className="bg-primary-red ml-1 inline-block h-2 w-2 rounded-full"></span>
            )}
            <p className="text-neutral-grayish-blue">{time}</p>
          </div>
          {type === "comment" && data.picture && (
            <div className="w-[2.4375rem]">
              <Image src={data.picture} alt="Commented Picture" />
            </div>
          )}
        </div>
        {type === "privateMessage" && data.messageText && (
          <p className="text-neutral-dark-grayish-blue mt-3 rounded-[0.3125rem] border p-4 text-sm font-medium leading-normal">
            {data.messageText}
          </p>
        )}
      </div>
    </div>
  )
}

export default Notification