import mongoose from 'mongoose'
import chalk from 'chalk'

export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(chalk.blue(`MongoDB connected: ${conn.connection.host}`));

    } catch (error) {
        console.error(`Erorr: ${error.message}`);
        process.exit(1);
    }
}

