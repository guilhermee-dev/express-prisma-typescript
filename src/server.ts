import { serverHttp } from "./app";

const Port = process.env.PORT;

serverHttp.listen(Port, () => console.log(`🚕 Server is running on PORT${Port}`));