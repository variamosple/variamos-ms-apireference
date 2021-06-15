import express from "express";
import indexRoutes from "../../EntryPoints/referenceEntryPoints";
import config from "../../Infraestructure/config.json";

const app = express();
var cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);

async function init() {
  await app.listen(config.port);
  console.log("Server on port", config.port);
}

init();
