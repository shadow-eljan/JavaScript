import fs from "fs"
const blogLogger = (req, res, next) => {
    const today = new Date();
    const time = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} Time: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const start = Date.now();
    res.on("finish", ()=>{
        const end = Date.now();
        let responseTime = `${time} :: ${req.method}, ${req.originalUrl}, ${end - start}ms\n`;
        console.log(responseTime);
        fs.appendFile("../Logging/StoreBlog.txt", responseTime, (err)=> {
            if(err) console.log("Error.")
            else console.log("Successfully stored logging details.");
        })
    })
    next();
}
export default blogLogger;