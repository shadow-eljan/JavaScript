const http = require("http");
const url = require("url");

const notes = [
    {id: 1, title: "Apple a", Content: " I love eating apples."},
    {id: 2, title: "Banana", Content: "I love eating banana."}
];

const server = http.createServer((req,res) => {
    const method = req.method;
    const urlobj = url.parse(req.url, true);
    console.log(urlobj)
    res.setHeader("Content-Type", "application/json");
    if(method == "GET"){
        if(urlobj.pathname == "/api/notes"){
            const noteId = urlobj.query?.id; // ? needed if there is no object 
            const titleId = urlobj.query?.title;
            if(noteId){
                const filterNotes = notes.filter((note) => note.id == noteId)
                res.end(JSON.stringify(filterNotes));
            }else{
                res.end(JSON.stringify(notes));
            }
            // if(titleId){
            //     const filterTitle = notes.filter((note) => note.title == titleId);
            //     res.end(JSON.stringify(filterTitle))
            // }else{
            //     res.end(JSON.stringify(notes));
            // }
        }
    }else if (method == "POST") {
        if(urlobj.pathname == "/api/notes"){
            let body = "";
            req.on("data", (chunk) => body += chunk);
            req.on("end", ()=> {
                const data = JSON.parse(body);
                notes.push({...data, id:notes.length + 1});
                res.end(JSON.stringify({message: "Node Created."}));
            });
        }
    }
})

server.listen(4000, ()=> console.log("Server is up."))
