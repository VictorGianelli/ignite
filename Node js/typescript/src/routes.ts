import { Request, Response } from 'express';
import CreateCourse from './CreateCoursesService';

export function createCourse(requert:Request,response:Response) {
 
 CreateCourse.execute({
  name: "NojeJS",
  duration: 10,
  educator: "Dani"
 });

 return response.send();
}


