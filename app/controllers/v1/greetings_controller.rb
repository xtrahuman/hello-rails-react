class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: { greeting: @greetings }.to_json
  end
end
