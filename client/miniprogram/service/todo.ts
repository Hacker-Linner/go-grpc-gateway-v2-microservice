import { todo } from "./proto_gen/todo/todo_pb"
import { SDK } from "./sdk"

export namespace TodoService {
    export function CreateTodo(req: todo.v1.ICreateTodoRequest): Promise<todo.v1.ICreateTodoResponse>{
        return SDK.sendRequestWithAuthRetry({
            method: "POST",
            path: "/v1/todo",
            data: req,
            respMarshaller: todo.v1.CreateTodoResponse.fromObject
        })
    }
}