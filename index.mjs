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
// vnn.getRoster().then(players => {
//   for (const player of players) {
//     canvas.getCoursesFailing(player).then(courses => {
//       console.log(player)
//       for (const course of courses) {
//         console.log('...', course.name, '=>', course.grade)
//       }
//     })
//   }
// })
vnn.runEligibilityCheck(canvas, spark)
