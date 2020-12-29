export const fetchSteps = (todo) => (
    $.ajax({
        method: 'GET',
        url: `api/todos/${todo.id}/steps`
    })
)

export const addStep = (todo_id, step) => (
    $.ajax({
        method: 'POST',
        url: `api/todos/${todo_id}/steps`,
        data: { step }
    })
)

export const updateStep = (step) => (
    $.ajax({
        method: 'PATCH',
        url: `api/steps/${step.id}`,
        data: { step }
    })
)

export const deleteStep = (step) => (
    $.ajax({
        method: 'DELETE',
        url: `api/steps/${step.id}`,
    })
)

