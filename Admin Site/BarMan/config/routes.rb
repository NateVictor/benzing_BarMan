Rails.application.routes.draw do
  root 'patron#home'
  get 'patron/home'
  get 'management/home'
  get 'management/signup'
  get 'management/login'
  get 'management/profile'
end
