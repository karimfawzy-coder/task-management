import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './tasks.repository';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TasksService {
    constructor( @InjectRepository(Task) private tasksRepository : TaskRepository){}


   async getTaskById(id : string ) : Promise<Task> {
       return this.tasksRepository.getTaskById(id);
    }
    // private tasks: Array<Task> = [];

    // getAllTasks(): Array<Task> {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDTO): Task[] {
    //     const { status, search } = filterDto;
    //     let tasks = this.getAllTasks();
    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status)
    //     }
    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             if (task.title.includes(search) || task.description.includes(search)) {
    //                 return true;
    //             }
    //             return false;
    //         })
    //     }
    //     return tasks;
    // }

    // createTask(createTaskDTO: CreateTaskDTO): Task {
    //     const { title, description } = createTaskDTO;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     }
    //     this.tasks.push(task);
    //     return task;
    // }

    // getTaskByID(id: string): Task | undefined {

    //     const found = this.tasks.find((task) => task.id === id);
    //     if (!found) {
    //         throw new NotFoundException(`task with ID ${id} not exist `);
    //     }
    //     return found;
    // }

    // deleteTask(id: string): void {
    //        const task = this.getTaskByID(id)

    //     this.tasks = this.tasks.filter((t) => t.id !== task?.id);

    // }

    // updateTask(id: string,updateTaskDto: UpdateTaskDTO): Task | undefined {
    //    const {status} = updateTaskDto
    //     const task = this.getTaskByID(id)
    //     if (task)
    //         task.status = status;
    //     return task;
    // }
}
