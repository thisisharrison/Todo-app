class Api::TodosController < ApplicationController
    def show
        @todo = Todo.find(params[:id])
        render json: @todo, include: :tags
    end

    def index
        render json: Todo.all, include: :tags
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def update
        @todo = Todo.find(params[:id])
        if @todo.update(todo_params)
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        @todo = Todo.find(params[:id])
        @todo.destroy
        render json: @todo
    end

    private

    def todo_params
        params.require(:todo).permit(:title, :body, :done, :tag_names)
    end

end
