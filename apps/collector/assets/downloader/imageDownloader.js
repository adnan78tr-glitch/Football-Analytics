import axios from "axios";
import fs from "fs-extra";
import path from "path";

export async function downloadImage(url, outputFile) {

    await fs.ensureDir(path.dirname(outputFile));

    const response = await axios({

        url,

        method: "GET",

        responseType: "stream",

        timeout: 15000

    });

    return new Promise((resolve, reject) => {

        const writer = fs.createWriteStream(outputFile);

        response.data.pipe(writer);

        writer.on("finish", resolve);

        writer.on("error", reject);

    });

}