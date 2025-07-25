import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";


// @EntityRepository(Task)
// export class TasksRepository extends Repository<Task> {

// }

@Injectable()
export class TaskRepository  {
   
  constructor(
     @InjectRepository(Task)
     private readonly taskRepositoryEntity : Repository<Task>){}

    async getTaskById(id : string ) : Promise<Task> {
             const found = await this.taskRepositoryEntity.findOneBy({id});
             if (!found) {
                 throw new NotFoundException(`task with ID ${id} not exist `);
              }
             return found;
      }
}