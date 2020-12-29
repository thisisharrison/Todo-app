class Api::StepsController < ApplicationController
    def index
        @steps = Todo.find(params[:todo_id]).steps
        render json: @steps
    end

    def create
        @steps = Step.new(step_params)
        # @steps = Todo.find(params[:tod0_id]).steps.new(step_params)
        if @step.save
            render json: @step
        else
            render json: @steps.errors.full_messages, status: 422
        end
    end

    def update
        @step = Step.find(params[:id])
        if @step
            if @step.update(step_params)
                render json: @step
            else
                render json: @step.errors.full_messages, status: 422
            end    
        else
            render json: { message: 'not found', status: 404 }
        end
    end

    def destroy
        @step = Step.find(params[:id])
        @step.destroy
        render json: @step
    end

    private

    def step_params
        params.require(:step).permit(:title, :body, :done, :todo_id)
    end
end