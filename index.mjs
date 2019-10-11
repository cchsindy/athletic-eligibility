import { CanvasService, SparkpostService, VNNService } from 'services'

const canvas = new CanvasService
const spark = new SparkpostService
const vnn = new VNNService

// canvas.getGrades(2359).then(data => {
//   for (const course of data) {
//     console.log(course.name, course.enrollments[0].computed_current_score)
//   }
// })
// spark.test()
// vnn.test()
canvas.getGrades2(2359)
