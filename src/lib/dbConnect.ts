import mongoose from "mongoose";

type ConnectionObject = {
    isConnect?: number
}
const connection: ConnectionObject = {}
async function dbConnect(): Promise<void> {
    if (connection.isConnect) {
        console.log("Database is already connected")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || '', {})
        connection.isConnect = db.connections[0].readyState
        console.log('DB Connection Successfully')
    } catch (err) {
        console.log('Database connection failed', err)
        process.exit()
    }
}

export default dbConnect