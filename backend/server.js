import app from "./src/app.js"
import connectDB from "./src/config/database.js";


const PORT = process.env.PORT || 3000


app.listen(PORT, (req, res)=>{
    console.log("Server is listening at port 3000");
})

connectDB();