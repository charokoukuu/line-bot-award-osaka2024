import { Request, Response } from "express";
import { LinePush } from "../api/app.api";
import { EXAMPLE_USER_ID } from "../config/app.config";
export const test = async (req: Request, res: Response) => {
  await setTeamInfo();
  LinePush(EXAMPLE_USER_ID, [{
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://courrier.jp/media/2020/10/10194009/GettyImages-182710825-e1602294056127-1600x900.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "label": "Action",
          "uri": "https://linecorp.com"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "action": {
          "type": "uri",
          "label": "Action",
          "uri": "https://linecorp.com"
        },
        "contents": [
          {
            "type": "text",
            "text": "BoTreasure",
            "weight": "bold",
            "size": "xxl",
            "contents": []
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "チーム",
                "weight": "bold",
                "size": "lg",
                "align": "start",
                "contents": []
              },
              {
                "type": "text",
                "text": "hogehoge",
                "offsetStart": "15px",
                "contents": []
              }
            ]
          },
          {
            "type": "separator"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "メンバー",
                "weight": "bold",
                "size": "lg",
                "align": "start",
                "contents": []
              },
              {
                "type": "text",
                "text": "たかし",
                "offsetStart": "15px",
                "contents": []
              },
              {
                "type": "text",
                "text": "太郎",
                "offsetStart": "15px",
                "contents": []
              },
              {
                "type": "text",
                "text": "みちたか",
                "offsetStart": "15px",
                "contents": []
              },
              {
                "type": "text",
                "text": "じゅんぺい",
                "offsetStart": "15px",
                "contents": []
              },
              {
                "type": "text",
                "text": "かよこ",
                "offsetStart": "15px",
                "contents": []
              },
              {
                "type": "text",
                "text": "りか",
                "offsetStart": "15px",
                "contents": []
              }
            ]
          },
          {
            "type": "separator"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "宝の数",
                "weight": "bold",
                "size": "lg",
                "align": "start",
                "contents": []
              },
              {
                "type": "text",
                "text": "3",
                "offsetStart": "15px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "さあはじめましょう！",
            "weight": "bold",
            "size": "sm",
            "color": "#AAAAAA",
            "align": "center",
            "wrap": true,
            "contents": []
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "プレイする！",
              "text": "プレイする"
            },
            "color": "#905C44",
            "style": "primary"
          }
        ]
      }
    }
  }

  ])
  res.sendStatus(200);
  console.log("test");
};
export const TestService = async () => {
  LinePush(EXAMPLE_USER_ID, [{
    type: "text",
    text: "test",
  }])
};

const setTeamInfo = async () => {
  // await SetTeamInfo();
};
