import sirv from "sirv";
import compression from "compression";
import polka from "polka";
import * as sapper from "@sapper/server";

const { Node_ENV } = process.env;
const dev = Node_ENV === "development";

polka()
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleweare()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
