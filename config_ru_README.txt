This is the README file describing config.ru 

Rack-based apps use a configuration file named config.ru (a "rackup file) that instructs Rack::Builder what middleware should it use and in which order.

"Rack provides a minimal, modular and adaptable interface for developing web applications in Ruby. By wrapping HTTP requests and responses in the simplest way possible, it unifies and distills the API for web servers, web frameworks, and software in between (the so-called middleware) into a single method call."

Q: Where, exactly, is "App" in the following to be found?
map '/' do
  run App
end

Q: What does "map" do?
map '/sidekiq' do
  run Sidekiq::Web
end