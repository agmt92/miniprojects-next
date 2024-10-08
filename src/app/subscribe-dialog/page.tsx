"use client";
import React, { useState, useEffect, CSSProperties } from "react";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import Button from "../ui/components/Button";
import "./Bounce.css";

const SubscribeDialog: React.FC<{ width?: number }> = ({ width = 350 }) => {
  const [subscribe, setSubscribe] = useState({
    title: "Hey!",
    text: "Subscribe to us",
    state: false,
    justifyContent: "space-between",
  });

  const handleSubscribe = () => {
    setSubscribe({
      title: "Thank you!",
      text: "You are now subscribed",
      state: true,
      justifyContent: "flex-end",
    });
  };

  const handleUnsubscribe = () => {
    setSubscribe({
      title: "Sorry to see you go!",
      text: "You have unsubscribed",
      state: false,
      justifyContent: "flex-end",
    });
  };

  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const iconStyle: CSSProperties = {
        fontSize: "80px",
        justifySelf: "center",
        color: subscribe.state ? "rgba(59,137,90,0.4)" : "rgba(25,118,160,0.4)",
      };
      if (subscribe.state) {
        setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
        document.body.style.background = "rgba(59,137,90,0.4)";
      } else {
        setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
        document.body.style.background = "rgba(25,118,160,0.4)";
      }
    }
  }, [subscribe.state]);

  const [bounce, setBounce] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        setBounce("");
      }, 500);
      setBounce("bounce");
      return () => clearTimeout(timer);
    }
  }, [subscribe.state]);

  return (
    <div className={`card bg-light m-auto mt-4 ${bounce}`} style={{ width: width }}>
      <div className="card-body">
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <section>
            <h2 className="card-title">{subscribe.title}</h2>
            <h3 className="card-text">{subscribe.text}</h3>
          </section>
          <div>{icon}</div>
        </div>
      </div>
      <hr />
      <div
        className="d-flex mb-2 px-1"
        style={{
          width: "100%",
          justifyContent: subscribe.state ? "space-between" : "center",
        }}
      >
        {subscribe.state ? (
          <>
            <Button text="Cancel" onClick={handleUnsubscribe} btnClass="btn-light" />
            <Button text="Unsubscribe" btnClass="btn-danger" onClick={handleUnsubscribe} />
          </>
        ) : (
          <Button text="Subscribe" btnClass="btn-danger" onClick={handleSubscribe} style={{ width: "100%" }} />
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return <SubscribeDialog width={350} />;
};

export default Page;
