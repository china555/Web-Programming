const fastify = require("fastify")();

fastify.listen(3000);

const user = []

fastify.post("/user", (request, response) => {
    console.log(request.body)
    const createtodolist = {
        user: request.body.name,
        email: request.body.email,
        todolist: request.body.todolist,
    }
    response.send({
        msg: "Success"
    })
    user.push(createtodolist)
})

fastify.get("/user", (request, response) => {
    response.send(user)
})

fastify.patch("/user/:index/:index1", (request, response) => {
    user[request.params.index].todolist[request.params.index1] = request.body.newtodo
    response.send({
        msg: "update"
    })
})
fastify.delete("/user/:index/:index1", (request, response) => {
    const firstindex = request.params.index
    const secondindex = request.params.index1
    const isFirstIndexLessThanUserLength = firstindex < user.length
    const isSecondIndexLessThanToDoListLength = user[request.params.index].todolist.length > secondindex

    if (isFirstIndexLessThanUserLength && isSecondIndexLessThanToDoListLength) {
        delete1(Number(firstindex), Number(secondindex));
        user[firstindex].todolist.pop();
        response.send({
            msg: "Delete Complete"
        })
    }
    response.send({
        msg: "ERROR CAN NOT FOUND INFO"
    })

})

function delete1(index, index1) {

    const toDoListLength = user[index].todolist.length
    const secondindex = request.params.index1

    for (let i = index1; i < toDoListLength; i++) {

        if (i !== toDoListLength) {
            console.log("!")
            user[index].todolist[i] = user[index].todolist[i + 1]
        }

    }
}