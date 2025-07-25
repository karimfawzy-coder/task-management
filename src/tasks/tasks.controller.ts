import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService){}

    // @Get()
    // getTasks(@Query() filterDTO : GetTasksFilterDTO ) : Array<Task> {
    //     if(Object.keys(filterDTO).length){
    //         return this.tasksService.getTasksWithFilters(filterDTO);
    //     }else{
    //         return this.tasksService.getAllTasks();
    //     }
    // }

     @Get('/:id')
    getTaskByID(@Param('id') id : string) : Promise<Task> {
        return this.tasksService.getTaskById(id);
    }
    // @Delete('/:id')
    // deleteTask(@Param('id') id : string) : void {
    //   return  this.tasksService.deleteTask(id);
    // }

    // @Post()
    // createTask(
    //  @Body() createTaskDto : CreateTaskDTO
    // ) : Task{
    //  return this.tasksService.createTask(createTaskDto);
    // }

    // @Patch('/:id')
    // updateTask(
    //  @Param('id') id:string, @Body() status : UpdateTaskDTO 
    // ) : Task  | undefined{
    //  return this.tasksService.updateTask(id , status);
    // }
}
