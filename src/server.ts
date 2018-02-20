import {CourseModel} from "./model/model";

const courses = CourseModel.findAll()
  .then(function(results: {}[]){
    console.log(JSON.stringify(results));
  });