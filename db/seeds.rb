# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all
Step.destroy_all

todo1 = Todo.create!(
    title: "first",
    body: "first to do ",
    done: false
)

todo2 = Todo.create!(
    title: "second",
    body: "second to do ",
    done: false
)

todo3 = Todo.create!(
    title: "third",
    body: "third to do ",
    done: false
)

step1 = Step.create!(
    title: "step 1",
    body: "gogogogo",
    done: false,
    todo_id: todo1.id
)

step2 = Step.create!(
    title: "step 2",
    body: "faster!",
    done: false,
    todo_id: todo1.id
)

step2 = Step.create!(
    title: "step 1",
    body: "slow and steady",
    done: false,
    todo_id: todo3.id
)