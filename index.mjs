import { CanvasService, SparkpostService, VNNService } from 'services'

const canvas = new CanvasService
const spark = new SparkpostService
const vnn = new VNNService

canvas.getGrades(2359)
// spark.test()
// vnn.test()
