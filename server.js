const express = require("express");

const cookieSession = require("cookie-session");
const keys = require("./config/keys");

const db = require("./MYSQL_DB");
const requireLogin = require("./routes/requireLogin");

const cron = require("node-cron");

const {format} = require("date-fns");

db.connectDB();
const app = express();

app.use(express.json({extended:false}));
app.get("/",(req,res) => {
    res.json({msg:"React Auth Sample"});
});

app.use(
    cookieSession({
                      maxAge: 30 * 24 * 60 * 60 * 1000,  //30 days
                      keys: [keys.cookieKey]
                  })
);


if (keys.jwtSecret) {
     app.use("/authjwt", require("./routes/authJWT"));
 }
app.use("/admin", requireLogin, require("./routes/admin"));

cron.schedule("0 */1 * * * *", () => {
    console.log("Cron is running: " + format(Date.now(),"yyyy-MM-dd hh:mm:ss"));
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));

