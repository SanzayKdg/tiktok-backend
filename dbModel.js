import mongoose from "mongoose";


// Define a Data schema/ structure
const tiktokSchema = mongoose.Schema(
    {
        url : String,
        channel : String,
        description: String,
        song : String,
        likes : String,
        shares : String,
        messages: String
    }
);

// Collection inside the database
export default mongoose.model('tiktokvideos', tiktokSchema);