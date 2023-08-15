import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter name of the course"],
      },
      desc: {
        type: String,
      },
      code: {
          type: String,
          required: [true, "Please enter course code"],
          unique: true,
      },
  
      credit: {
        type: Number,
        required: [true, "Enter course credit"],
      },
  
    }
  );


  export default mongoose.model("Course", CourseSchema);