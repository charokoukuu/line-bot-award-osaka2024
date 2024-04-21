import { User, Status, Team } from "../types/app.type";

// ユーザーモックデータ
export const mockUser: User = {
  userId: "123",
  name: "John Doe",
  status: Status.HOST,
};




/*
以下コピペして使う
SetPlayer(mockPlayer).then((res) => console.log(res));
SetTeam(mockTeam).then((res) => console.log(res));
SetTeamInfo(mockTeamInfo).then((res) => console.log(res));
*/
