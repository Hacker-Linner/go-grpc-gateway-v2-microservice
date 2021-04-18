import * as $protobuf from "protobufjs";
/** Namespace todo. */
export namespace todo {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a CreateTodoRequest. */
        interface ICreateTodoRequest {

            /** CreateTodoRequest title */
            title?: (string|null);
        }

        /** Represents a CreateTodoRequest. */
        class CreateTodoRequest implements ICreateTodoRequest {

            /**
             * Constructs a new CreateTodoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: todo.v1.ICreateTodoRequest);

            /** CreateTodoRequest title. */
            public title: string;

            /**
             * Creates a CreateTodoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTodoRequest
             */
            public static fromObject(object: { [k: string]: any }): todo.v1.CreateTodoRequest;

            /**
             * Creates a plain object from a CreateTodoRequest message. Also converts values to other types if specified.
             * @param message CreateTodoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: todo.v1.CreateTodoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTodoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateTodoResponse. */
        interface ICreateTodoResponse {
        }

        /** Represents a CreateTodoResponse. */
        class CreateTodoResponse implements ICreateTodoResponse {

            /**
             * Constructs a new CreateTodoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: todo.v1.ICreateTodoResponse);

            /**
             * Creates a CreateTodoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTodoResponse
             */
            public static fromObject(object: { [k: string]: any }): todo.v1.CreateTodoResponse;

            /**
             * Creates a plain object from a CreateTodoResponse message. Also converts values to other types if specified.
             * @param message CreateTodoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: todo.v1.CreateTodoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTodoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a TodoService */
        class TodoService extends $protobuf.rpc.Service {

            /**
             * Constructs a new TodoService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls CreateTodo.
             * @param request CreateTodoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateTodoResponse
             */
            public createTodo(request: todo.v1.ICreateTodoRequest, callback: todo.v1.TodoService.CreateTodoCallback): void;

            /**
             * Calls CreateTodo.
             * @param request CreateTodoRequest message or plain object
             * @returns Promise
             */
            public createTodo(request: todo.v1.ICreateTodoRequest): Promise<todo.v1.CreateTodoResponse>;
        }

        namespace TodoService {

            /**
             * Callback as used by {@link todo.v1.TodoService#createTodo}.
             * @param error Error, if any
             * @param [response] CreateTodoResponse
             */
            type CreateTodoCallback = (error: (Error|null), response?: todo.v1.CreateTodoResponse) => void;
        }
    }
}
