console.log("Hello, Node.js!");
import axios from "axios";
axios
  .get("https://www.javbus.com/studio/3w/3", {
    headers: {
      authority: "www.javbus.com",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      cookie: "PHPSESSID=5gjonk6q5pjp6u0cki43ena7t2; existmag=all",
      referer: "https://www.javbus.com/studio/3w/2",
      "sec-ch-ua":
        '"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.62",
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
