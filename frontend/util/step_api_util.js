export const fetchSteps = (todo) => (
    $.ajax({
        method: 'GET',
        url: `api/todos/${todo.id}/steps`
    })
)

export const addStep = (todo, step) => (
    $.ajax({
        method: 'POST',
        url: `api/todos/${todo.id}/steps`,
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

export const removeStep = (step) => (
    $.ajax({
        method: 'DELETE',
        url: `api/steps/${step.id}`,
    })
)

