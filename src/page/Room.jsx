import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 1583532495;
    const serverSecret = "4ae8c455d0018055828c28d623b8f83c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Moknine"
    );
    const zegoCloud = ZegoUIKitPrebuilt.create(kitToken);
    zegoCloud.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;
