import dotenv from 'dotenv';
import bsky from "@atproto/api";
import moment from "moment-timezone";

dotenv.config();
const { BskyAgent } = bsky;

let self = null;
const agent = new BskyAgent({ service: "https://bsky.social" });

const login = async function () {
  try {
    const { success, data } = await agent.login({
      identifier: process.env.AUTHOR,
      password: process.env.PASSWORD,
    });
    self = data;
    return success ? data : null;
  } catch {
    return null;
  }
};

const post = async function (text) {
  return agent.api.app.bsky.feed.post.create(
    { repo: self.handle },
    {
      text: text,
      createdAt: new Date().toISOString(),
    }
  );
};

const result = await login();
if (result) {
  const time = moment().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss");
  post("なう(" + time + ")");
}
