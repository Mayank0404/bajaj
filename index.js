const express=require("express");
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors());

const authRouter=require("./src/router/auth");
app.use("/",authRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});