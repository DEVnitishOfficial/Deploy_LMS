import app from './app.js'
import connectToDB from './config/dbConnection.js';
import cloudinary from 'cloudinary'
import Razorpay from 'razorpay'

const PORT = process.env.PORT || 3000;

cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

export const razorpay = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_SECRET
})
app.use('*', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})
app.listen(PORT, async () => {
    await connectToDB()
    console.log(`Server is listening at http://localhost:${PORT}`)
})

