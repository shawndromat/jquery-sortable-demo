class ListsController < ApplicationController
  def index
    @lists = List.all.order("rank ASC")
    render json: @lists, include: :cards
  end
end
