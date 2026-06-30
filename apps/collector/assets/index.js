import path from "path";

import { downloadImage } from "./downloader/imageDownloader.js";
import { success } from "./utils/logger.js";

const output = path.resolve(

    "../../assets/cache/test.png"

);

await downloadImage(

    "https://via.placeholder.com/64",

    output

);

success("Test image downloaded.");