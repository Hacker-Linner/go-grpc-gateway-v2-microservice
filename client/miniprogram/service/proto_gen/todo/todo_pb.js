import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const todo = $root.todo = (() => {

    /**
     * Namespace todo.
     * @exports todo
     * @namespace
     */
    const todo = {};

    todo.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof todo
         * @namespace
         */
        const v1 = {};

        v1.CreateTodoRequest = (function() {

            /**
             * Properties of a CreateTodoRequest.
             * @memberof todo.v1
             * @interface ICreateTodoRequest
             * @property {string|null} [title] CreateTodoRequest title
             */

            /**
             * Constructs a new CreateTodoRequest.
             * @memberof todo.v1
             * @classdesc Represents a CreateTodoRequest.
             * @implements ICreateTodoRequest
             * @constructor
             * @param {todo.v1.ICreateTodoRequest=} [properties] Properties to set
             */
            function CreateTodoRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateTodoRequest title.
             * @member {string} title
             * @memberof todo.v1.CreateTodoRequest
             * @instance
             */
            CreateTodoRequest.prototype.title = "";

            /**
             * Creates a CreateTodoRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof todo.v1.CreateTodoRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {todo.v1.CreateTodoRequest} CreateTodoRequest
             */
            CreateTodoRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.todo.v1.CreateTodoRequest)
                    return object;
                let message = new $root.todo.v1.CreateTodoRequest();
                if (object.title != null)
                    message.title = String(object.title);
                return message;
            };

            /**
             * Creates a plain object from a CreateTodoRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof todo.v1.CreateTodoRequest
             * @static
             * @param {todo.v1.CreateTodoRequest} message CreateTodoRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateTodoRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.title = "";
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                return object;
            };

            /**
             * Converts this CreateTodoRequest to JSON.
             * @function toJSON
             * @memberof todo.v1.CreateTodoRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateTodoRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateTodoRequest;
        })();

        v1.CreateTodoResponse = (function() {

            /**
             * Properties of a CreateTodoResponse.
             * @memberof todo.v1
             * @interface ICreateTodoResponse
             */

            /**
             * Constructs a new CreateTodoResponse.
             * @memberof todo.v1
             * @classdesc Represents a CreateTodoResponse.
             * @implements ICreateTodoResponse
             * @constructor
             * @param {todo.v1.ICreateTodoResponse=} [properties] Properties to set
             */
            function CreateTodoResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a CreateTodoResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof todo.v1.CreateTodoResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {todo.v1.CreateTodoResponse} CreateTodoResponse
             */
            CreateTodoResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.todo.v1.CreateTodoResponse)
                    return object;
                return new $root.todo.v1.CreateTodoResponse();
            };

            /**
             * Creates a plain object from a CreateTodoResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof todo.v1.CreateTodoResponse
             * @static
             * @param {todo.v1.CreateTodoResponse} message CreateTodoResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateTodoResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CreateTodoResponse to JSON.
             * @function toJSON
             * @memberof todo.v1.CreateTodoResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateTodoResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateTodoResponse;
        })();

        v1.TodoService = (function() {

            /**
             * Constructs a new TodoService service.
             * @memberof todo.v1
             * @classdesc Represents a TodoService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function TodoService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (TodoService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TodoService;

            /**
             * Callback as used by {@link todo.v1.TodoService#createTodo}.
             * @memberof todo.v1.TodoService
             * @typedef CreateTodoCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {todo.v1.CreateTodoResponse} [response] CreateTodoResponse
             */

            /**
             * Calls CreateTodo.
             * @function createTodo
             * @memberof todo.v1.TodoService
             * @instance
             * @param {todo.v1.ICreateTodoRequest} request CreateTodoRequest message or plain object
             * @param {todo.v1.TodoService.CreateTodoCallback} callback Node-style callback called with the error, if any, and CreateTodoResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(TodoService.prototype.createTodo = function createTodo(request, callback) {
                return this.rpcCall(createTodo, $root.todo.v1.CreateTodoRequest, $root.todo.v1.CreateTodoResponse, request, callback);
            }, "name", { value: "CreateTodo" });

            /**
             * Calls CreateTodo.
             * @function createTodo
             * @memberof todo.v1.TodoService
             * @instance
             * @param {todo.v1.ICreateTodoRequest} request CreateTodoRequest message or plain object
             * @returns {Promise<todo.v1.CreateTodoResponse>} Promise
             * @variation 2
             */

            return TodoService;
        })();

        return v1;
    })();

    return todo;
})();