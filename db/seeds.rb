# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Todo.destroy_all
Step.destroy_all

u1 = User.create!(
    username: 'snoopy',
    password: 'sleepingdog'
)

todo1 = Todo.create!(
    title: "first",
    body: "first to do ",
    done: false,
    user: u1,
    tag_names: ['sample', 'working', 'good']
)

todo2 = Todo.create!(
    title: "second",
    body: "finish a/A",
    done: false,
    user: u1,
    tag_names: ['coding', 'career']
)

todo3 = Todo.create!(
    title: "triathlon",
    body: "race!",
    done: false,
    user: u1,
    tag_names: ['career', 'sport']
)

step1 = Step.create!(
    title: "step 1",
    body: "gogogogo",
    done: false,
    todo: todo1
)

step2 = Step.create!(
    title: "step 2",
    body: "faster!",
    done: false,
    todo: todo1
)

step2 = Step.create!(
    title: "step 1",
    body: "slow and steady",
    done: false,
    todo: todo2
)