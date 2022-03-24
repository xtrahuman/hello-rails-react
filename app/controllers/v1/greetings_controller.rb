class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    @random_greet = @greetings[rand(Greeting.all.length)]
    render json: { greeting: @random_greet }.to_json
  end
end
